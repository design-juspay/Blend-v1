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
 * @description A versatile statistics card component that displays key metrics with optional charts and trend indicators. Perfect for dashboards, analytics, and KPI displays.
 * @feature Displays key metrics with prominent values and trends
 * @feature Multiple visual variants: line chart, bar chart, progress bar, or number-only
 * @feature Built-in change indicators with increase/decrease arrows
 * @feature Optional help tooltips and action icons
 * @feature Responsive chart integration with hover tooltips
 * @example Basic Usage
 * ```tsx
 * import { StatCard, StatCardVariant, ChangeType } from "blend-v1";
 * 
 * <StatCard
 *   title="Total Revenue"
 *   value="$45,231"
 *   variant={StatCardVariant.NUMBER}
 *   change={{
 *     value: 12.5,
 *     type: ChangeType.INCREASE
 *   }}
 *   subtitle="This month"
 * />
 * ```
 * @example Intermediate Usage with Chart
 * ```tsx
 * import { StatCard, StatCardVariant, ChangeType, ChartDataPoint } from "blend-v1";
 * import { TrendingUp } from "lucide-react";
 * 
 * const salesData: ChartDataPoint[] = [
 *   { label: "Jan", value: 4000 },
 *   { label: "Feb", value: 3000 },
 *   { label: "Mar", value: 5000 },
 *   { label: "Apr", value: 4500 },
 *   { label: "May", value: 6000 },
 *   { label: "Jun", value: 5500 },
 *   { label: "Jul", value: 7000 }
 * ];
 * 
 * <StatCard
 *   title="Monthly Sales"
 *   value="$67,500"
 *   variant={StatCardVariant.LINE}
 *   chartData={salesData}
 *   change={{
 *     value: 23.1,
 *     type: ChangeType.INCREASE
 *   }}
 *   subtitle="Last 7 months"
 *   titleIcon={<TrendingUp size={18} />}
 * />
 * ```
 * @example Advanced Usage with All Features
 * ```tsx
 * import { 
 *   StatCard, 
 *   StatCardVariant, 
 *   ChangeType, 
 *   ChartDataPoint 
 * } from "blend-v1";
 * import { Users, MoreVertical } from "lucide-react";
 * 
 * const userGrowthData: ChartDataPoint[] = [
 *   { label: "Week 1", value: 1200, date: "2024-01-01" },
 *   { label: "Week 2", value: 1350, date: "2024-01-08" },
 *   { label: "Week 3", value: 1180, date: "2024-01-15" },
 *   { label: "Week 4", value: 1420, date: "2024-01-22" },
 *   { label: "Week 5", value: 1650, date: "2024-01-29" }
 * ];
 * 
 * <StatCard
 *   title="Active Users"
 *   value="12,847"
 *   variant={StatCardVariant.BAR}
 *   chartData={userGrowthData}
 *   change={{
 *     value: 8.2,
 *     type: ChangeType.INCREASE
 *   }}
 *   subtitle="Last 5 weeks"
 *   titleIcon={<Users size={18} />}
 *   actionIcon={
 *     <button onClick={() => console.log('More options')}>
 *       <MoreVertical size={16} />
 *     </button>
 *   }
 *   helpIconText="Total number of users who have been active in the past 30 days"
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
