import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
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
import dateRangePickerTokens, { CalendarTokenType } from './dateRangePicker.tokens';
import { SwitchSize } from '../Switch/types';
import { Switch } from '../Switch/Switch';
import { FOUNDATION_THEME } from '../../tokens';
import Block from '../Primitives/Block/Block';
import { Popover } from '../Popover';
import { TextInput } from '../Inputs/TextInput';
import { useComponentToken } from '../../context/useComponentToken';
import PrimitiveText from '../Primitives/PrimitiveText/PrimitiveText';
import PrimitiveButton from '../Primitives/PrimitiveButton/PrimitiveButton';

type DateInputsSectionProps = {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  showTimePicker: boolean;
  allowSingleDateSelection: boolean;
  selectedRange: DateRange;
  startDateValidation: DateValidationResult;
  endDateValidation: DateValidationResult;
  onStartDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEndDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
  calendarToken: CalendarTokenType;
}

const DateInputsSection: React.FC<DateInputsSectionProps> = ({
  startDate,
  endDate,
  startTime,
  endTime,
  showTimePicker,
  allowSingleDateSelection,
  selectedRange,
  startDateValidation,
  endDateValidation,
  onStartDateChange,
  onEndDateChange,
  onStartTimeChange,
  onEndTimeChange,
  calendarToken,
}) => (
  <Block padding={calendarToken.calendar.inputs.padding}>
    <Block display="flex" flexDirection="column">
      <Block display="flex" gap={calendarToken.calendar.inputs.dateInput.gap} alignItems="center">
        <PrimitiveText as="span" color={calendarToken.calendar.inputs.dateInput.label.color} style={{ minWidth: calendarToken.calendar.inputs.dateInput.label.minWidth }}>
          Start
        </PrimitiveText>
        <Block display="flex" alignItems="start" gap={FOUNDATION_THEME.unit[8]}>
          <TextInput
            label=""
            placeholder="DD/MM/YYYY"
            value={startDate}
            onChange={onStartDateChange}
            error={!startDateValidation.isValid}
            errorMessage={startDateValidation.message}
          />
          {showTimePicker && (
            <TimeSelector value={startTime} onChange={onStartTimeChange} />
          )}
        </Block>
      </Block>

      {(!allowSingleDateSelection || 
          (allowSingleDateSelection && 
          selectedRange.startDate.getTime() !== selectedRange.endDate.getTime())) && (
        <Block display="flex" gap={calendarToken.calendar.inputs.dateInput.gap} alignItems="center">
          <PrimitiveText as="span" color={calendarToken.calendar.inputs.dateInput.label.color} style={{ minWidth: calendarToken.calendar.inputs.dateInput.label.minWidth }}>
            End
          </PrimitiveText>
          <Block display="flex" alignItems="start" gap={FOUNDATION_THEME.unit[8]}>
            <TextInput
              label=""
              placeholder="DD/MM/YYYY"
              value={endDate}
              onChange={onEndDateChange}
              error={!endDateValidation.isValid}
              errorMessage={endDateValidation.message}
            />
            {showTimePicker && (
              <TimeSelector value={endTime} onChange={onEndTimeChange} />
            )}
          </Block>
        </Block>
      )}
    </Block>
  </Block>
);

type CalendarSectionProps = {
  selectedRange: DateRange;
  today: Date;
  allowSingleDateSelection: boolean;
  disableFutureDates: boolean;
  disablePastDates: boolean;
  onDateSelect: (range: DateRange) => void;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({
  selectedRange,
  today,
  allowSingleDateSelection,
  disableFutureDates,
  disablePastDates,
  onDateSelect,
}) => (
  <Block>
    <CalendarGrid
      selectedRange={selectedRange}
      onDateSelect={onDateSelect}
      today={today}
      allowSingleDateSelection={allowSingleDateSelection}
      disableFutureDates={disableFutureDates}
      disablePastDates={disablePastDates}
    />
  </Block>
);

type FooterControlsProps = {
  showTimePicker: boolean;
  onTimePickerToggle: (checked: boolean) => void;
  onCancel: () => void;
  onApply: () => void;
  calendarToken: CalendarTokenType;
}

const FooterControls: React.FC<FooterControlsProps> = ({
  showTimePicker,
  onTimePickerToggle,
  onCancel,
  onApply,
  calendarToken,
}) => (
  <Block 
    display="flex" 
    alignItems="center" 
    justifyContent="space-between" 
    padding={calendarToken.calendar.footer.padding}
    borderTop={calendarToken.calendar.footer.borderTop}
  >
    <Block display="flex" alignItems="center" gap={calendarToken.calendar.footer.timerange.gap}>
      <Switch
        checked={showTimePicker}
        onChange={onTimePickerToggle}
        size={SwitchSize.MEDIUM}
      />
      <Block as="span" color={calendarToken.calendar.footer.timerange.color} fontWeight={calendarToken.calendar.footer.timerange.fontWeight} fontSize={calendarToken.calendar.footer.timerange.fontSize}>
        Time Ranges
      </Block>
    </Block>

    <Block display="flex" gap={calendarToken.calendar.footer.button.gap}>
      <Button 
        buttonType={ButtonType.SECONDARY}
        size={ButtonSize.SMALL}
        onClick={onCancel}
        text="Cancel"
      />    
      <Button
        buttonType={ButtonType.PRIMARY}
        size={ButtonSize.SMALL}
        onClick={onApply}
        text="Apply"
      />
    </Block>
  </Block>
);




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
    const calendarToken = useComponentToken("CALENDAR") as CalendarTokenType;

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
        <PrimitiveButton
          {...calendarToken.trigger}
          borderRadius={showPresets ? calendarToken.trigger.borderRadiusWithPresets : calendarToken.trigger.borderRadiusWithoutPresets}
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
        </PrimitiveButton>
      );
    };

    return (
      <Block display="flex">
        {showPresets && (
          <QuickRangeSelector
            isOpen={isQuickRangeOpen}
            onToggle={() => !isDisabled && setIsQuickRangeOpen(!isQuickRangeOpen)}
            activePreset={activePreset}
            onPresetSelect={handlePresetSelect}
            excludeCustom={true}
            disableFutureDates={disableFutureDates}
            disablePastDates={disablePastDates}
          />
        )}

        <Popover
          open={isOpen}
          onOpenChange={setIsOpen}
          trigger={renderTrigger()}
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <Block style={{ ...calendarToken.calendar }}>
            <DateInputsSection
              startDate={startDate}
              endDate={endDate}
              startTime={startTime}
              endTime={endTime}
              showTimePicker={showTimePickerState}
              allowSingleDateSelection={allowSingleDateSelection}
              selectedRange={selectedRange}
              startDateValidation={startDateValidation}
              endDateValidation={endDateValidation}
              onStartDateChange={handleStartDateChangeCallback}
              onEndDateChange={handleEndDateChangeCallback}
              onStartTimeChange={handleStartTimeChangeCallback}
              onEndTimeChange={handleEndTimeChangeCallback}
              calendarToken={calendarToken}
            />

            <CalendarSection
              selectedRange={selectedRange}
              today={today}
              allowSingleDateSelection={allowSingleDateSelection}
              disableFutureDates={disableFutureDates}
              disablePastDates={disablePastDates}
              onDateSelect={handleDateSelectCallback}
            />

            <FooterControls
              showTimePicker={showTimePickerState}
              onTimePickerToggle={setShowTimePickerState}
              onCancel={handleCancel}
              onApply={handleApply}
              calendarToken={calendarToken}
            />
          </Block>
        </Popover>
      </Block>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
