import type { ReactNode } from "react";

/**
 * @propCategory Enum
 * @description Defines the visual variant of the StatCard, determining how data is presented (e.g., with a line chart, progress bar).
 */
export enum StatCardVariant {
  /** Displays data with a line chart. */
  LINE = "line",
  /** Displays data with a progress bar. */
  PROGRESS_BAR = "progress",
  /** Displays data with a bar chart. */
  BAR = "bar",
  /** Displays data primarily as a number. */
  NUMBER = "number",
}

/**
 * @propCategory Enum
 * @description Defines the type of change for the `StatCardChange` object (increase or decrease).
 */
export enum ChangeType {
  /** Indicates an increase in value. */
  INCREASE = "increase",
  /** Indicates a decrease in value. */
  DECREASE = "decrease",
}

/**
 * @description Represents a single data point for charts within a StatCard.
 */
export type ChartDataPoint = {
  /**
   * @propCategory Required
   * @description The numerical value of the data point.
   */
  value: number;
  /**
   * @propCategory Required
   * @description The label for the data point (e.g., x-axis category).
   */
  label: string;
  /**
   * @propCategory Data
   * @description Optional date associated with the data point.
   */
  date?: string;
};

/**
 * @description Represents a change in value, typically displayed as a percentage or absolute difference.
 */
export type StatCardChange = {
  /**
   * @propCategory Required
   * @description The numerical value of the change (e.g., percentage or absolute amount).
   */
  value: number;
  /**
   * @propCategory Required
   * @description The type of change (increase or decrease).
   */
  type: ChangeType;
};

/**
 * @description A card component designed to display key statistics or metrics.
 * It can show a primary value, title, subtitle, change indicator, and a mini chart or progress bar.
 * @feature Displays a key statistic prominently.
 * @feature Shows trend/change information (increase/decrease).
 * @feature Multiple visual variants (line chart, progress bar, bar chart, number only).
 * @feature Optional icons for title and actions.
 * @feature Help icon with tooltip support.
 * @example
 * ```tsx
 * import { StatCard, StatCardVariant, ChangeType } from "./components/StatCard"; // Assuming path
 * import { TrendingUp, Info } from "lucide-react"; // Assuming lucide-react
 *
 * const salesData: ChartDataPoint[] = [
 *   { label: "Mon", value: 100 }, { label: "Tue", value: 150 }, { label: "Wed", value: 120 }
 * ];
 *
 * <StatCard
 *   title="Total Revenue"
 *   value="$12,345"
 *   variant={StatCardVariant.LINE}
 *   chartData={salesData}
 *   change={{ value: 5.2, type: ChangeType.INCREASE }}
 *   subtitle="Last 30 days"
 *   titleIcon={<TrendingUp size={18} />}
 *   helpIconText="This is the total revenue generated."
 * />
 *
 * <StatCard
 *   title="Task Completion"
 *   value="75%"
 *   variant={StatCardVariant.PROGRESS_BAR}
 *   progressValue={75}
 *   subtitle="Project Alpha"
 * />
 * ```
 */
export type StatCardProps = {
  /**
   * @propCategory Required
   * @description The main title of the stat card.
   */
  title: string;
  /**
   * @propCategory Required
   * @description The primary value to be displayed on the card (e.g., a number, currency amount).
   */
  value: string | number;
  /**
   * @propCategory Data
   * @description Optional object representing the change in value (e.g., percentage increase/decrease).
   */
  change?: StatCardChange;
  /**
   * @propCategory Content
   * @description Optional subtitle or additional context for the stat.
   */
  subtitle?: string;
  /**
   * @propCategory Required
   * @description The visual variant of the stat card, determining how data is presented.
   */
  variant: StatCardVariant;
  /**
   * @propCategory Data
   * @description Optional array of `ChartDataPoint` for variants that include a chart (LINE, BAR).
   */
  chartData?: ChartDataPoint[];
  /**
   * @propCategory Data
   * @description The value for the progress bar variant (typically 0-100).
   */
  progressValue?: number;
  /**
   * @propCategory Content
   * @description Optional ReactNode (e.g., an icon) to display next to the title.
   */
  titleIcon?: ReactNode;
  /**
   * @propCategory Content
   * @description Optional ReactNode (e.g., an icon button) for an action related to the card.
   */
  actionIcon?: ReactNode;
  /**
   * @propCategory Content
   * @description Tooltip text for an optional help icon displayed near the title.
   */
  helpIconText?: string;
};
