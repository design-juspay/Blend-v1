import React, { forwardRef, useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { styled } from 'styled-components';
import { DateRangePickerProps, DateRangePreset, DateRange } from './types';
import {
  formatDate,
  getPresetDateRange,
  DateValidationResult,
  formatDateDisplay,
  handleDateInputChange,
  handleTimeChange,
  handleCalendarDateSelect,
  handlePresetSelection,
  handleCancelAction,
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
import { Popover } from '../Popover';
import { TextInput } from '../Inputs/TextInput';

const StyledTrigger = styled.button<{ $isDisabled: boolean; $showPresets: boolean }>`
  ${dateRangePickerTokens.base.input}
  ${props => props.$isDisabled && dateRangePickerTokens.states.disabled}
  height: 40px;
  border-radius: ${props => props.$showPresets ? '0 8px 8px 0' : '8px'};
`;

const StyledCalendarContainer = styled(Block)`
  ${dateRangePickerTokens.calendar.container}
`;

const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value,
      onChange,
      showTimePicker = false,
      showPresets = true,
      isDisabled = false,
      dateFormat = 'dd/MM/yyyy',
      ariaLabel = 'Date range picker',
      allowSingleDateSelection = false,
      disableFutureDates = false,
      disablePastDates = false,
      triggerElement = null,
    },
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
    
    const [startDateValidation, setStartDateValidation] = useState<DateValidationResult>({ isValid: true, error: 'none' });
    const [endDateValidation, setEndDateValidation] = useState<DateValidationResult>({ isValid: true, error: 'none' });

    const quickRangeRef = useRef<HTMLDivElement>(null);

    const today = new Date();

    useEffect(() => {
      if (value) {
        setSelectedRange(value);
        setStartDate(formatDate(value.startDate, dateFormat));
        setEndDate(formatDate(value.endDate, dateFormat));
        setStartTime(formatDate(value.startDate, 'HH:mm'));
        setEndTime(formatDate(value.endDate, 'HH:mm'));
      }
    }, [value, dateFormat]);


    
    const handleDateSelect = useCallback((range: DateRange) => {
      const result = handleCalendarDateSelect(range, startTime, endTime, dateFormat);
      setSelectedRange(result.updatedRange);
      setStartDate(result.formattedStartDate);
      setEndDate(result.formattedEndDate);
      setActivePreset(DateRangePreset.CUSTOM);
    }, [startTime, endTime, dateFormat]);

    const handlePresetSelect = useCallback((preset: DateRangePreset) => {
      const result = handlePresetSelection(preset, dateFormat);
      setSelectedRange(result.updatedRange);
      setActivePreset(preset);
      setStartDate(result.formattedStartDate);
      setEndDate(result.formattedEndDate);
      setStartTime(result.formattedStartTime);
      setEndTime(result.formattedEndTime);
      
      if (preset !== DateRangePreset.CUSTOM) {
        onChange?.(result.updatedRange);
      }
    }, [dateFormat, onChange]);

    const handleStartDateChange = useCallback((value: string) => {
      const result = handleDateInputChange(value, dateFormat, selectedRange, startTime, true);
      setStartDate(result.formattedValue);
      setStartDateValidation(result.validation);

      if (result.updatedRange) {
        setSelectedRange(result.updatedRange);
        setActivePreset(DateRangePreset.CUSTOM);
      }
    }, [selectedRange, startTime, dateFormat]);

    const handleEndDateChange = useCallback((value: string) => {
      const result = handleDateInputChange(value, dateFormat, selectedRange, endTime, false);
      setEndDate(result.formattedValue);
      setEndDateValidation(result.validation);

      if (result.updatedRange) {
        setSelectedRange(result.updatedRange);
        setActivePreset(DateRangePreset.CUSTOM);
      }
    }, [selectedRange, endTime, dateFormat]);

    const handleStartTimeChange = useCallback((time: string) => {
      setStartTime(time);
      const updatedRange = handleTimeChange(time, selectedRange, true);
      setSelectedRange(updatedRange);
      setActivePreset(DateRangePreset.CUSTOM);
    }, [selectedRange]);

    const handleEndTimeChange = useCallback((time: string) => {
      setEndTime(time);
      const updatedRange = handleTimeChange(time, selectedRange, false);
      setSelectedRange(updatedRange);
      setActivePreset(DateRangePreset.CUSTOM);
    }, [selectedRange]);

    const handleApply = () => {
      setIsOpen(false);
      onChange?.(selectedRange);
    };

    const handleCancel = useCallback(() => {
      const resetData = handleCancelAction(value, dateFormat);
      if (resetData) {
        setSelectedRange(resetData.resetRange);
        setStartDate(resetData.formattedStartDate);
        setEndDate(resetData.formattedEndDate);
        setStartTime(resetData.formattedStartTime);
        setEndTime(resetData.formattedEndTime);
      }
      setIsOpen(false);
    }, [value, dateFormat]);

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
          $isDisabled={isDisabled}
          $showPresets={showPresets}
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          aria-disabled={isDisabled}
          disabled={isDisabled}
        >
          <Block flexGrow={1} display='flex' alignItems='center' justifyContent='space-between' style={{...dateRangePickerTokens.text.value}}>
            <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[8]}>
              <Calendar size={14} />
              <span>{formatDateDisplay(selectedRange, allowSingleDateSelection)}</span>
            </Block>
            {isOpen ? (
              <ChevronUp size={14} style={{ marginLeft: '8px' }} />
            ) : (
              <ChevronDown size={14} style={{ marginLeft: '8px' }} />
            )}
          </Block>
        </StyledTrigger>
      );
    };

    return (
        <Block display='flex'>
          {showPresets && (
            <Block width={136} ref={quickRangeRef}>
              <QuickRangeSelector
                isOpen={isQuickRangeOpen}
                onToggle={() => !isDisabled && setIsQuickRangeOpen(!isQuickRangeOpen)}
                activePreset={activePreset}
                onPresetSelect={handlePresetSelect}
                excludeCustom={true}
                disableFutureDates={disableFutureDates}
                disablePastDates={disablePastDates}
              />
            </Block>
          )}

            <Popover
              open={isOpen}
              onOpenChange={setIsOpen}
              trigger={renderTrigger()}
              side="bottom"
              align="start"
              sideOffset={4}
            >
              <StyledCalendarContainer>
                <Block>
                  <Block style={{padding: `${FOUNDATION_THEME.unit[16]}`, display: 'flex', flexDirection: 'column', gap: FOUNDATION_THEME.unit[12]}}>
                    <Block display='flex' gap={FOUNDATION_THEME.unit[16]} alignItems='center'>
                      <Block as='span' style={{...dateRangePickerTokens.text.label}}>Start</Block>
                      <Block display='flex' alignItems='start' gap={FOUNDATION_THEME.unit[8]}> 
                      <TextInput
                        label=""
                        placeholder="DD/MM/YYYY"
                        value={startDate}
                        onChange={handleStartDateChangeCallback}
                        error={!startDateValidation.isValid}
                        errorMessage={startDateValidation.message}
                      />
                      {showTimePickerState && (
                        <TimeSelector value={startTime} onChange={handleStartTimeChangeCallback} />
                      )}
                      </Block>
                    </Block>

                    {(!allowSingleDateSelection || 
                        (allowSingleDateSelection && 
                        selectedRange.startDate.getTime() !== selectedRange.endDate.getTime())) && (
                      <Block display='flex' gap={FOUNDATION_THEME.unit[16]} alignItems='center'>
                        <Block as='span' style={{...dateRangePickerTokens.text.label}}>End</Block>
                        <Block display='flex' alignItems='start' gap={FOUNDATION_THEME.unit[8]}> 
                        <TextInput
                          label=""
                          placeholder="DD/MM/YYYY"
                          value={endDate}
                          onChange={handleEndDateChangeCallback}
                          error={!endDateValidation.isValid}
                          errorMessage={endDateValidation.message}
                        />
                        {showTimePickerState && (
                          <TimeSelector value={endTime} onChange={handleEndTimeChangeCallback} />
                          )}
                        </Block>
                      </Block>
                    )}
                  </Block>

                  <Block>
                    <CalendarGrid
                      selectedRange={selectedRange}
                      onDateSelect={handleDateSelectCallback}
                      today={today}
                      allowSingleDateSelection={allowSingleDateSelection}
                      disableFutureDates={disableFutureDates}
                      disablePastDates={disablePastDates}
                    />
                  </Block>

                  <Block display='flex' alignItems='center' justifyContent='space-between' padding={FOUNDATION_THEME.unit[12]} borderTop={`1px solid ${FOUNDATION_THEME.colors.gray[200]}`}>
                    <Block display='flex' alignItems='center' gap={FOUNDATION_THEME.unit[8]}>
                    <Switch
                      checked={showTimePickerState}
                      onChange={setShowTimePickerState}
                      size={SwitchSize.MEDIUM}
                    />
                    <Block as='span' style={{...dateRangePickerTokens.text.value}}>Time Ranges</Block>
                    </Block>

                    <Block display='flex' gap={FOUNDATION_THEME.unit[12]}>
                      <Button
                        buttonType={ButtonType.SECONDARY}
                        size={ButtonSize.SMALL}
                        onClick={handleCancel}
                        text="Cancel"
                      />    
                      <Button
                        buttonType={ButtonType.PRIMARY}
                        size={ButtonSize.SMALL}
                        onClick={handleApply}
                        text="Apply"
                      />
                    </Block>
                  </Block>
                </Block>
              </StyledCalendarContainer>
            </Popover>
        </Block>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
