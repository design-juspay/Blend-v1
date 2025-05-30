import React, { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { styled } from 'styled-components';
import { DateRangePickerProps, DateRangePreset, DateRange } from './types';
import {
  formatDate,
  getPresetDateRange,
  isValidDate,
  parseDate,
} from './utils';
import Button from '../Button/Button';
import { ButtonType, ButtonSize } from '../Button/types';
import CalendarGrid from './CalendarGrid';
import QuickRangeSelector from './QuickRangeSelector';
import TimeSelector from './TimeSelector';
import dateRangePickerTokens from './dateRangePicker.tokens';
import { SwitchSize } from '../Switch/types';
import { Switch } from '../Switch/Switch';
import { FOUNDATION_THEME } from '../../tokens';
import Block from '../Primitives/Block/Block';

const StyledContainer = styled(Block)<{ $isDisabled: boolean }>`
  ${dateRangePickerTokens.base.container}
  ${props => props.$isDisabled && dateRangePickerTokens.states.disabled}
`;

const StyledFlexContainer = styled(Block)`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const StyledQuickRangeContainer = styled(Block)`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  height: 40px;
  
  @media (min-width: 640px) {
    width: 128px;
    margin-bottom: 0;
    margin-right: 0;
  }
`;

const StyledMainInputContainer = styled(Block)`
  position: relative;
  
  @media (min-width: 640px) {
    min-width: 384px;
  }
`;

const StyledTrigger = styled(Block)<{ $isDisabled: boolean; $showPresets: boolean }>`
  ${dateRangePickerTokens.base.input}
  ${props => props.$isDisabled && dateRangePickerTokens.states.disabled}
  height: 40px;
  border-radius: ${props => props.$showPresets ? '0 6px 6px 0' : '6px'};
  
  @media (max-width: 639px) {
    border-radius: 6px;
  }
`;

const StyledCalendarContainer = styled(Block)`
  ${dateRangePickerTokens.calendar.container}
`;

const StyledCalendarContent = styled(Block)`
  padding: ${dateRangePickerTokens.calendar.gridContainer.padding};
`;

const StyledInputRow = styled(Block)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  ${dateRangePickerTokens.timePicker.input}
`;

const StyledLabel = styled(Block)`
  width: 96px;
  ${dateRangePickerTokens.text.label}
`;

const StyledScrollableCalendar = styled(Block)`
  margin-top: 16px;
  max-height: 300px;
  overflow-y: auto;
`;

const StyledFooter = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-top: 1px solid ${FOUNDATION_THEME.colors.gray[200]};
  margin-top: 16px;
`;

const StyledToggleContainer = styled(Block)`
  display: flex;
  align-items: center;
`;

const StyledToggleLabel = styled.span`
  margin-left: 4px;
  ${dateRangePickerTokens.text.value}
`;

const StyledButtonGroup = styled(Block)`
  display: flex;
  gap: 8px;
`;

const StyledTriggerContent = styled(Block)`
  ${dateRangePickerTokens.text.value}
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconAndText = styled(Block)`
  display: flex;
  align-items: center;
`;

const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value,
      onChange,
      showTimePicker = false,
      showPresets = true,
      isDisabled = false,
      className,
      dateFormat = 'dd/MM/yyyy',
      ariaLabel = 'Date range picker',
      allowSingleDateSelection = false,
      disableFutureDates = false,
      disablePastDates = false,
      triggerElement = null,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isQuickRangeOpen, setIsQuickRangeOpen] = useState(false);
    const [showTimePickerState, setShowTimePickerState] = useState(showTimePicker);

    const [selectedRange, setSelectedRange] = useState<DateRange>(
      value || getPresetDateRange(DateRangePreset.TODAY)
    );

    const [activePreset, setActivePreset] = useState<DateRangePreset>(DateRangePreset.TODAY);

    const [startTime, setStartTime] = useState(formatDate(selectedRange.startDate, 'HH:mm'));
    const [endTime, setEndTime] = useState(formatDate(selectedRange.endDate, 'HH:mm'));

    const [startDate, setStartDate] = useState(formatDate(selectedRange.startDate, dateFormat));
    const [endDate, setEndDate] = useState(formatDate(selectedRange.endDate, dateFormat));

    const calendarRef = useRef<HTMLDivElement>(null);
    const quickRangeRef = useRef<HTMLDivElement>(null);
    const calendarScrollRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const today = new Date();

    // Update state when value prop changes
    useEffect(() => {
      if (value) {
        setSelectedRange(value);
        setStartDate(formatDate(value.startDate, dateFormat));
        setEndDate(formatDate(value.endDate, dateFormat));
        setStartTime(formatDate(value.startDate, 'HH:mm'));
        setEndTime(formatDate(value.endDate, 'HH:mm'));
      }
    }, [value, dateFormat]);

    // Handle click outside to close dropdowns
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!dropdownRef.current) return;

        const isOutsideDropdown = !dropdownRef.current.contains(event.target as Node);
        const isOutsideCalendar =
          calendarRef.current && !calendarRef.current.contains(event.target as Node);
        const isOutsideQuickRange =
          quickRangeRef.current && !quickRangeRef.current.contains(event.target as Node);
        const isOutsideTrigger =
          triggerRef.current && !triggerRef.current.contains(event.target as Node);

        if (isOutsideDropdown && isOutsideCalendar && isOutsideQuickRange && isOutsideTrigger) {
          setIsOpen(false);
          setIsQuickRangeOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // Scroll to current month when calendar opens
    useEffect(() => {
      if (isOpen && calendarScrollRef.current) {
        setTimeout(() => {
          const currentMonthElement = calendarScrollRef.current?.querySelector(
            `[data-current-month="true"]`
          );

          if (currentMonthElement) {
            currentMonthElement.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }, 0);
      }
    }, [isOpen]);

    // Format the date display for the input
    const formatDateDisplay = () => {
      if (!selectedRange.startDate) {
        return 'Select date range';
      }

      const formatOptions: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      };

      const timeFormatOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };

      const startDateStr = selectedRange.startDate.toLocaleDateString('en-US', formatOptions);
      const startTimeStr = selectedRange.startDate.toLocaleTimeString('en-US', timeFormatOptions);

      if (
        !selectedRange.endDate ||
        (allowSingleDateSelection &&
          selectedRange.startDate.getTime() === selectedRange.endDate.getTime())
      ) {
        return `${startDateStr}, ${startTimeStr}`;
      }

      const endDateStr = selectedRange.endDate.toLocaleDateString('en-US', formatOptions);
      const endTimeStr = selectedRange.endDate.toLocaleTimeString('en-US', timeFormatOptions);

      return `${startDateStr}, ${startTimeStr} - ${endDateStr}, ${endTimeStr}`;
    };

    const handleToggleOpen = () => {
      if (!isDisabled) {
        setIsOpen(!isOpen);
      }
    };

    // Handle date selection from calendar
    const handleDateSelect = useCallback((range: DateRange) => {
      // Preserve time when selecting dates
      if (range.startDate) {
        const [startHour, startMinute] = startTime.split(':').map(Number);
        range.startDate.setHours(startHour, startMinute);
      }

      if (range.endDate) {
        const [endHour, endMinute] = endTime.split(':').map(Number);
        range.endDate.setHours(endHour, endMinute);
      }

      setSelectedRange(range);
      setStartDate(formatDate(range.startDate, dateFormat));
      setEndDate(formatDate(range.endDate, dateFormat));
      setActivePreset(DateRangePreset.CUSTOM);
    }, [startTime, endTime, dateFormat]);

    // Handle preset selection
    const handlePresetSelect = useCallback((preset: DateRangePreset) => {
      const range = getPresetDateRange(preset);

      // Preserve time when selecting presets
      if (showTimePickerState) {
        const [startHour, startMinute] = startTime.split(':').map(Number);
        range.startDate.setHours(startHour, startMinute);

        const [endHour, endMinute] = endTime.split(':').map(Number);
        range.endDate.setHours(endHour, endMinute);
      }

      setSelectedRange(range);
      setStartDate(formatDate(range.startDate, dateFormat));
      setEndDate(formatDate(range.endDate, dateFormat));
      setActivePreset(preset);
    }, [startTime, endTime, dateFormat, showTimePickerState]);

    // Handle start date input change
    const handleStartDateChange = useCallback((value: string) => {
      setStartDate(value);

      const parsedDate = parseDate(value, dateFormat);
      if (parsedDate !== null && isValidDate(parsedDate)) {
        // Preserve time
        const [hours, minutes] = startTime.split(':').map(Number);
        parsedDate.setHours(hours, minutes);

        const newRange = { ...selectedRange, startDate: parsedDate };
        setSelectedRange(newRange);
        setActivePreset(DateRangePreset.CUSTOM);
      }
    }, [selectedRange, startTime, dateFormat]);

    // Handle end date input change
    const handleEndDateChange = useCallback((value: string) => {
      setEndDate(value);

      const parsedDate = parseDate(value, dateFormat);
      if (parsedDate !== null && isValidDate(parsedDate)) {
        // Preserve time
        const [hours, minutes] = endTime.split(':').map(Number);
        parsedDate.setHours(hours, minutes);

        const newRange = { ...selectedRange, endDate: parsedDate };
        setSelectedRange(newRange);
        setActivePreset(DateRangePreset.CUSTOM);
      }
    }, [selectedRange, endTime, dateFormat]);

    // Handle start time change
    const handleStartTimeChange = useCallback((time: string) => {
      setStartTime(time);
      if (selectedRange.startDate) {
        const [hours, minutes] = time.split(':').map(Number);
        const newStartDate = new Date(selectedRange.startDate);
        newStartDate.setHours(hours, minutes);
        setSelectedRange(prev => ({ ...prev, startDate: newStartDate }));
        setActivePreset(DateRangePreset.CUSTOM);
      }
    }, [selectedRange.startDate]);

    const handleEndTimeChange = useCallback((time: string) => {
      setEndTime(time);
      if (selectedRange.endDate) {
        const [hours, minutes] = time.split(':').map(Number);
        const newEndDate = new Date(selectedRange.endDate);
        newEndDate.setHours(hours, minutes);
        setSelectedRange(prev => ({ ...prev, endDate: newEndDate }));
        setActivePreset(DateRangePreset.CUSTOM);
      }
    }, [selectedRange.endDate]);

    // Handle apply button click
    const handleApply = () => {
      setIsOpen(false);
      onChange?.(selectedRange);
    };

    // Handle cancel button click
    const handleCancel = useCallback(() => {
      // Reset to the original value
      if (value) {
        setSelectedRange(value);
        setStartDate(formatDate(value.startDate, dateFormat));
        setEndDate(formatDate(value.endDate, dateFormat));
        setStartTime(formatDate(value.startDate, 'HH:mm'));
        setEndTime(formatDate(value.endDate, 'HH:mm'));
      }
      setIsOpen(false);
    }, [value, dateFormat]);

    // Close both dropdowns when disabled
    useEffect(() => {
      if (isDisabled) {
        setIsOpen(false);
        setIsQuickRangeOpen(false);
      }
    }, [isDisabled, isOpen]);

    const handleDateSelectCallback = useCallback(handleDateSelect, [handleDateSelect]);
    const handleStartTimeChangeCallback = useCallback(handleStartTimeChange, [handleStartTimeChange]);
    const handleEndTimeChangeCallback = useCallback(handleEndTimeChange, [handleEndTimeChange]);
    const handleStartDateChangeCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      handleStartDateChange(e.target.value);
    }, [handleStartDateChange]);
    const handleEndDateChangeCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      handleEndDateChange(e.target.value);
    }, [handleEndDateChange]);

    const renderTrigger = () => {
      if (triggerElement) {
        return (
          <Block
            ref={triggerRef}
            onClick={handleToggleOpen}
            style={{ 
              opacity: isDisabled ? 0.5 : 1, 
              cursor: isDisabled ? 'not-allowed' : 'pointer' 
            }}
          >
            {triggerElement}
          </Block>
        );
      }

      return (
        <StyledTrigger
          onClick={handleToggleOpen}
          ref={triggerRef}
          $isDisabled={isDisabled}
          $showPresets={showPresets}
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          aria-disabled={isDisabled}
          role="button"
          tabIndex={isDisabled ? -1 : 0}
        >
          <StyledTriggerContent>
            <StyledIconAndText>
              <Calendar size={14} style={{ marginRight: '6px' }} />
              <span>{formatDateDisplay()}</span>
            </StyledIconAndText>
            {isOpen ? (
              <ChevronUp size={14} style={{ marginLeft: '8px' }} />
            ) : (
              <ChevronDown size={14} style={{ marginLeft: '8px' }} />
            )}
          </StyledTriggerContent>
        </StyledTrigger>
      );
    };

    return (
      <StyledContainer 
        ref={ref} 
        $isDisabled={isDisabled}
        className={className}
      >
        <StyledFlexContainer>
          {showPresets && (
            <StyledQuickRangeContainer ref={quickRangeRef}>
              <QuickRangeSelector
                isOpen={isQuickRangeOpen}
                onToggle={() => !isDisabled && setIsQuickRangeOpen(!isQuickRangeOpen)}
                activePreset={activePreset}
                onPresetSelect={handlePresetSelect}
                excludeCustom={true}
                disableFutureDates={disableFutureDates}
                disablePastDates={disablePastDates}
              />
            </StyledQuickRangeContainer>
          )}

          <StyledMainInputContainer ref={dropdownRef}>
            {renderTrigger()}

            {isOpen && (
              <StyledCalendarContainer ref={calendarRef}>
                <StyledCalendarContent>
                  <div>
                    <StyledInputRow>
                      <StyledLabel>Start</StyledLabel>
                      <StyledInput
                        type="text"
                        placeholder="DD/MM/YYYY"
                        value={startDate}
                        onChange={handleStartDateChangeCallback}
                      />
                      {showTimePickerState && (
                        <TimeSelector value={startTime} onChange={handleStartTimeChangeCallback} />
                      )}
                    </StyledInputRow>

                    {(!allowSingleDateSelection || 
                        (allowSingleDateSelection && 
                        selectedRange.startDate.getTime() !== selectedRange.endDate.getTime())) && (
                      <StyledInputRow>
                        <StyledLabel>End</StyledLabel>
                        <StyledInput
                          type="text"
                          placeholder="DD/MM/YYYY"
                          value={endDate}
                          onChange={handleEndDateChangeCallback}
                        />
                        {showTimePickerState && (
                          <TimeSelector value={endTime} onChange={handleEndTimeChangeCallback} />
                        )}
                      </StyledInputRow>
                    )}
                  </div>

                  <StyledScrollableCalendar ref={calendarScrollRef}>
                    <CalendarGrid
                      selectedRange={selectedRange}
                      onDateSelect={handleDateSelectCallback}
                      today={today}
                      allowSingleDateSelection={allowSingleDateSelection}
                      disableFutureDates={disableFutureDates}
                      disablePastDates={disablePastDates}
                    />
                  </StyledScrollableCalendar>

                  <StyledFooter>
                    <StyledToggleContainer>
                    <Switch
                        checked={showTimePickerState}
                        onChange={setShowTimePickerState}
                        size={SwitchSize.MEDIUM}
                      />
                      <StyledToggleLabel>Time Ranges</StyledToggleLabel>
                    </StyledToggleContainer>

                    <StyledButtonGroup>
                      <Button
                        buttonType={ButtonType.SECONDARY}
                        size={ButtonSize.MEDIUM}
                        onClick={handleCancel}
                        text="Cancel"
                      />    
                      <Button
                        buttonType={ButtonType.PRIMARY}
                        size={ButtonSize.MEDIUM}
                        onClick={handleApply}
                        text="Apply"
                      />
                    </StyledButtonGroup>
                  </StyledFooter>
                </StyledCalendarContent>
              </StyledCalendarContainer>
            )}
          </StyledMainInputContainer>
        </StyledFlexContainer>
      </StyledContainer>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
