import { ReactNode } from 'react';

/**
 * @propCategory Enum
 * @description Defines preset date ranges available in the DateRangePicker.
 */
export enum DateRangePreset {
  /** Allows users to select a custom date range. */
  CUSTOM = 'custom',
  /** Selects the current day. */
  TODAY = 'today',
  /** Selects the previous day. */
  YESTERDAY = 'yesterday',
  /** Selects the next day. */
  TOMORROW = 'tomorrow',
  /** Selects the last 1 hour from the current time. */
  LAST_1_HOUR = 'last1Hour',
  /** Selects the last 6 hours from the current time. */
  LAST_6_HOURS = 'last6Hours',
  /** Selects the last 7 days from the current date. */
  LAST_7_DAYS = 'last7Days',
  /** Selects the last 30 days from the current date. */
  LAST_30_DAYS = 'last30Days',
  /** Selects the last 3 months from the current date. */
  LAST_3_MONTHS = 'last3Months',
  /** Selects the last 12 months from the current date. */
  LAST_12_MONTHS = 'last12Months',
  /** Selects the next 7 days from the current date. */
  NEXT_7_DAYS = 'next7Days',
  /** Selects the next 30 days from the current date. */
  NEXT_30_DAYS = 'next30Days',
  /** Selects the next 3 months from the current date. */
  NEXT_3_MONTHS = 'next3Months',
  /** Selects the next 12 months from the current date. */
  NEXT_12_MONTHS = 'next12Months',
}

/**
 * @description Represents a selected date range, including start and end dates, and an option for time picking.
 */
export type DateRange = {
  /**
   * @propCategory Required
   * @description The start date of the selected range.
   */
  startDate: Date;
  /**
   * @propCategory Required
   * @description The end date of the selected range.
   */
  endDate: Date;
  /**
   * @propCategory Behavior
   * @description If true, indicates that time selection was enabled for this range.
   * This property might be set by the component based on its `showTimePicker` prop.
   */
  showTimePicker?: boolean;
};

/**
 * @description A component that allows users to select a range of dates, optionally with time.
 * It can include preset ranges and various customization options.
 * @feature Selection of date ranges (start and end dates).
 * @feature Optional time selection for start and end dates.
 * @feature Predefined date range presets (e.g., Today, Last 7 Days).
 * @feature Customizable date format and placeholder.
 * @feature Min/max date constraints.
 * @feature Option to disable future or past dates.
 * @feature Support for a custom trigger element.
 * @example
 * ```tsx
 * import { DateRangePicker, DateRange } from "./components/DateRangePicker"; // Assuming path
 * import { useState } from "react";
 *
 * function MyComponent() {
 *   const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
 *
 *   return (
 *     <DateRangePicker
 *       value={dateRange}
 *       onChange={setDateRange}
 *       showTimePicker={true}
 *       showPresets={true}
 *       placeholder="Select a date range"
 *     />
 *   );
 * }
 * ```
 */
export type DateRangePickerProps = {
  /**
   * @propCategory State
   * @description The currently selected date range.
   */
  value?: DateRange;
  /**
   * @propCategory Event Handler
   * @description Callback function invoked when the selected date range changes.
   * @param range The new `DateRange` object.
   */
  onChange?: (range: DateRange) => void;
  /**
   * @propCategory Behavior
   * @description If true, allows users to select time along with the date.
   * @default false
   */
  showTimePicker?: boolean;
  /**
   * @propCategory Behavior
   * @description If true, displays a list of preset date ranges for quick selection.
   * @default false
   */
  showPresets?: boolean;
  /**
   * @propCategory Appearance
   * @description Placeholder text displayed in the input field when no date range is selected.
   */
  placeholder?: string;
  /**
   * @propCategory State
   * @description If true, disables the date range picker.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * @propCategory Styling
   * @description Optional CSS class name to apply to the date range picker component.
   */
  className?: string;
  /**
   * @propCategory Appearance
   * @description Optional icon to display in the input field.
   */
  icon?: ReactNode;
  /**
   * @propCategory Validation
   * @description The minimum selectable date.
   */
  minDate?: Date;
  /**
   * @propCategory Validation
   * @description The maximum selectable date.
   */
  maxDate?: Date;
  /**
   * @propCategory Appearance
   * @description The format for displaying dates (e.g., "MM/dd/yyyy").
   * Refer to date-fns format strings.
   */
  dateFormat?: string;
  /**
   * @propCategory Accessibility
   * @description ARIA label for the date range picker input.
   */
  ariaLabel?: string;
  /**
   * @propCategory Behavior
   * @description If true, allows selecting a single date (start and end date will be the same).
   * @default false
   */
  allowSingleDateSelection?: boolean;
  /**
   * @propCategory Validation
   * @description If true, disables selection of future dates.
   * @default false
   */
  disableFutureDates?: boolean;
  /**
   * @propCategory Validation
   * @description If true, disables selection of past dates.
   * @default false
   */
  disablePastDates?: boolean;
  /**
   * @propCategory Appearance
   * @description Optional custom React node to use as the trigger for opening the date range picker popover.
   * If not provided, a default input field is used.
   */
  triggerElement?: ReactNode;
}
