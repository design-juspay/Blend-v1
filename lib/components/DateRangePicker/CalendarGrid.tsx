import { forwardRef, useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { DateRange } from './types';
import dateRangePickerTokens from './dateRangePicker.tokens';
import Block from '../Primitives/Block/Block';
import {
  handleCalendarDateClick,
  generateMonthWeeks,
  generateCalendarMonths,
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
    
    const months = useMemo(() => generateCalendarMonths(2012, 0), []);
    const dayNames = useMemo(() => getDayNames(), []);

    const { visibleMonths, totalHeight } = getVisibleMonths(
      scrollTop,
      CONTAINER_HEIGHT,
      months,
      MONTH_HEIGHT,
      4
    );

    const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
      const newScrollTop = e.currentTarget.scrollTop;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        setScrollTop(newScrollTop);
      });
    }, []);

    useEffect(() => {
      if (!isInitialized.current && scrollContainerRef.current) {
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
          <Block style={{ height: totalHeight, position: 'relative' }}>
            {visibleMonths.map(({ year, month, index }) => 
              renderMonthCalendar(year, month, index)
            )}
          </Block>
        </Block>
      </Block>
    );
  }
);

CalendarGrid.displayName = 'CalendarGrid';

export default CalendarGrid;
