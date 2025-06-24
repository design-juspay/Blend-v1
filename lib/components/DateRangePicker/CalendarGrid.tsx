import { forwardRef, useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { DateRange } from './types';
import dateRangePickerTokens from './dateRangePicker.tokens';
import Block from '../Primitives/Block/Block';
import {
  handleCalendarDateClick,
  generateMonthWeeks,
  getMonthName,
  getDayNames,
  getMonthHeight,
  getVisibleMonths,
  getMonthOffset,
  findCurrentMonthIndex,
  getScrollToMonth,
  getDateCellStates,
  getDateCellStyles,
  getDateCellTextColor,
  shouldShowTodayIndicator,
  generateInitialMonths,
  generateMonthChunk,
  getNextChunkParams,
} from './utils';
import FOUNDATION_THEME from '../../tokens/theme.token';

type CalendarGridProps = {
  selectedRange: DateRange;
  onDateSelect: (range: DateRange) => void;
  today: Date;
  allowSingleDateSelection?: boolean;
  disableFutureDates?: boolean;
  disablePastDates?: boolean;
}

const CONTAINER_HEIGHT = 300;
const MONTH_HEIGHT = getMonthHeight();
const LOAD_THRESHOLD = 100; // Start loading when 100px from edge

const CalendarGrid = forwardRef<HTMLDivElement, CalendarGridProps>(
  (
    {
      selectedRange,
      onDateSelect,
      today,
      allowSingleDateSelection = false,
      disableFutureDates = false,
      disablePastDates = false,
    },
    ref
  ) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollTop, setScrollTop] = useState(0);
    const animationFrameRef = useRef<number | undefined>(undefined);
    const isInitialized = useRef(false);
    const [isLoadingPast, setIsLoadingPast] = useState(false);
    const [isLoadingFuture, setIsLoadingFuture] = useState(false);
    const [months, setMonths] = useState<{ month: number; year: number }[]>([]);
    
    useEffect(() => {
      const initialMonths = generateInitialMonths(today);
      setMonths(initialMonths);
    }, [today]);

    const dayNames = useMemo(() => getDayNames(), []);

    const { visibleMonths, totalHeight } = getVisibleMonths(
      scrollTop,
      CONTAINER_HEIGHT,
      months,
      MONTH_HEIGHT,
      2
    );

    const loadMoreMonths = useCallback(async (direction: 'past' | 'future') => {
      if ((direction === 'past' && isLoadingPast) || (direction === 'future' && isLoadingFuture)) {
        return;
      }

      const chunkParams = getNextChunkParams(months, direction);
      if (!chunkParams) {
        return;
      }

      if (direction === 'past') {
        setIsLoadingPast(true);
      } else {
        setIsLoadingFuture(true);
      }

      const currentScrollTop = scrollContainerRef.current?.scrollTop || 0;

      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        const { startYear, startMonth } = chunkParams;
        let newChunk: { month: number; year: number }[];

        if (direction === 'past') {
          const firstMonth = months[0];
          const endMonth = firstMonth.month === 0 ? 11 : firstMonth.month - 1;
          const adjustedEndYear = firstMonth.month === 0 ? firstMonth.year - 1 : firstMonth.year;
          
          newChunk = generateMonthChunk(startYear, startMonth, adjustedEndYear, endMonth);
        } else {
          const endYear = startYear + 2;
          newChunk = generateMonthChunk(startYear, startMonth, endYear);
        }

        setMonths(prevMonths => {
          const newMonths = direction === 'past' 
            ? [...newChunk, ...prevMonths]
            : [...prevMonths, ...newChunk];
          
          requestAnimationFrame(() => {
            if (scrollContainerRef.current && direction === 'past') {
              const addedHeight = newChunk.length * MONTH_HEIGHT;
              scrollContainerRef.current.scrollTop = currentScrollTop + addedHeight;
            }
          });
          
          return newMonths;
        });
      } finally {
        if (direction === 'past') {
          setIsLoadingPast(false);
        } else {
          setIsLoadingFuture(false);
        }
      }
    }, [months, isLoadingPast, isLoadingFuture]);

    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
      const newScrollTop = e.currentTarget.scrollTop;
      const scrollHeight = e.currentTarget.scrollHeight;
      const clientHeight = e.currentTarget.clientHeight;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setScrollTop(newScrollTop);
      });

      if (newScrollTop < LOAD_THRESHOLD && !isLoadingPast) {
        loadMoreMonths('past');
      }
      
      if (newScrollTop + clientHeight > scrollHeight - LOAD_THRESHOLD && !isLoadingFuture) {
        loadMoreMonths('future');
      }
    }, [loadMoreMonths, isLoadingPast, isLoadingFuture]);

    useEffect(() => {
      if (!isInitialized.current && scrollContainerRef.current && months.length > 0) {
        const currentMonthIndex = findCurrentMonthIndex(months, today);
        if (currentMonthIndex !== -1) {
          const scrollPosition = getScrollToMonth(currentMonthIndex, MONTH_HEIGHT);
          
          requestAnimationFrame(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTop = scrollPosition;
              setScrollTop(scrollPosition);
              isInitialized.current = true;
            }
          });
        }
      }
    }, [months, today]);

    useEffect(() => {
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, []);

    const handleDateClick = useCallback((year: number, month: number, day: number) => {
      const clickedDate = new Date(year, month, day);
      const newRange = handleCalendarDateClick(
        clickedDate,
        selectedRange,
        allowSingleDateSelection,
        today,
        disableFutureDates,
        disablePastDates
      );

      if (newRange) {
        onDateSelect(newRange);
      }
    }, [selectedRange, allowSingleDateSelection, today, disableFutureDates, disablePastDates, onDateSelect]);

    const renderMonthCalendar = useCallback((year: number, month: number, monthIndex: number) => {
      const weeks = generateMonthWeeks(year, month);
      const topOffset = getMonthOffset(monthIndex, MONTH_HEIGHT);

      return (
        <Block 
          key={`month-${year}-${month}`}
          style={{
            ...dateRangePickerTokens.calendar.gridContainer,
            position: 'absolute',
            top: topOffset,
            left: 0,
            right: 0,
            height: MONTH_HEIGHT,
          }}
        >
          <Block style={{...dateRangePickerTokens.calendar.monthHeader}}>
            {getMonthName(month)} {year}
          </Block>

          {weeks.map((week, weekIndex) => (
            <Block style={{...dateRangePickerTokens.calendar.weekRow}} key={weekIndex}>
              {week.map((day, dayIndex) => {
                if (day === null) {
                  return <Block style={{...dateRangePickerTokens.calendar.emptyCell}} key={dayIndex} />;
                }

                const date = new Date(year, month, day);
                
                const dateStates = getDateCellStates(
                  date, 
                  selectedRange, 
                  today, 
                  disableFutureDates, 
                  disablePastDates
                );

                const cellStyles = getDateCellStyles(dateStates, dateRangePickerTokens);
                const textColor = getDateCellTextColor(dateStates, dateRangePickerTokens);

                return (
                  <Block
                    key={`${year}-${month}-${day}`}
                    style={{
                      ...cellStyles,
                      color: textColor,
                      cursor: dateStates.isDisabled ? 'not-allowed' : 'pointer',
                      position: 'relative',
                    }}
                    onClick={() => handleDateClick(year, month, day)}
                  >
                    {day}
                    {shouldShowTodayIndicator(dateStates) && (
                      <Block style={{...dateRangePickerTokens.calendar.todayIndicator}} />
                    )}
                  </Block>
                );
              })}
            </Block>
          ))}
        </Block>
      );
    }, [selectedRange, today, disableFutureDates, disablePastDates, handleDateClick]);

    const renderLoader = (position: 'top' | 'bottom') => (
      <Block
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: position === 'top' ? 'sticky' : 'relative',
          top: position === 'top' ? 0 : 'auto',
          zIndex: 5,
        }}
      >
        <Block
          style={{
            width: '20px',
            height: '20px',
            border: `2px solid ${FOUNDATION_THEME.colors.gray[300]}`,
            borderTop: `2px solid ${FOUNDATION_THEME.colors.primary[500]}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </Block>
    );

    return (
      <Block style={{...dateRangePickerTokens.calendar.gridContainer}} ref={ref}>
        {/* Sticky day names header */}
        <Block style={{
          ...dateRangePickerTokens.calendar.dayNamesContainer,
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: 'white'
        }}>
          {dayNames.map((day, index) => (
            <Block style={{...dateRangePickerTokens.calendar.dayName}} key={index}>
              {day}
            </Block>
          ))}
        </Block>
        
        <Block style={{
          height: '1px',
          backgroundColor: FOUNDATION_THEME.colors.gray[100],
          margin: '0',
          position: 'sticky',
          zIndex: 9
        }} />
        
        <Block 
          ref={scrollContainerRef}
          style={{ 
            height: CONTAINER_HEIGHT,
            overflow: 'auto',
            position: 'relative',
          }}
          onScroll={handleScroll}
        >
          {isLoadingPast && renderLoader('top')}
          
          <Block style={{ height: totalHeight, position: 'relative' }}>
            {visibleMonths.map(({ year, month, index }) => 
              renderMonthCalendar(year, month, index)
            )}
          </Block>
          
          {isLoadingFuture && renderLoader('bottom')}
        </Block>
      </Block>
    );
  }
);

CalendarGrid.displayName = 'CalendarGrid';

export default CalendarGrid;
