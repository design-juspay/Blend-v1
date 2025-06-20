import { ReactNode } from "react";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

/**
 * @description Represents a single data point for chart rendering, potentially with auxiliary values.
 * This type seems to be an older or alternative data structure. `NewNestedDataPoint` is used in `ChartsProps`.
 */
export type DataPoint = {
  /** Primary data value and its label. */
  primary: {
    /** The label for the primary data point. */
    label: string;
    /** The numerical value of the primary data point. */
    val: number;
  };
  /** Optional array of auxiliary data points, each with a label and value. */
  aux?: {
    /** The label for the auxiliary data point. */
    label: string;
    /** The numerical value of the auxiliary data point. */
    val: number;
  }[];
};

/**
 * @propCategory Enum
 * @description Defines the position of the chart legend.
 */
export enum ChartLegendPosition {
  /** Positions the legend at the top of the chart. */
  TOP = "top",
  /** Positions the legend to the right of the chart. */
  RIGHT = "right",
}

/**
 * @propCategory Enum
 * @description Defines the type of chart to be rendered.
 */
export enum ChartType {
  /** Line chart. */
  LINE = "line",
  /** Bar chart. */
  BAR = "bar",
  /** Pie chart. */
  PIE = "pie",
}

/**
 * @description Represents a data structure for nested data points, used as input for the Charts component.
 * Each point has a name (typically for the x-axis or category) and a `data` object
 * where keys are series names and values are `DataPoint` objects.
 */
export type NewNestedDataPoint = {
  /** The name of the data point, often used as the primary category label (e.g., x-axis value). */
  name: string;
  /**
   * An object where each key represents a data series (e.g., a line or bar segment name),
   * and the value is a `DataPoint` object containing primary and auxiliary values for that series at this `name`.
   * Note: The `DataPoint` type here seems to imply a structure that might be simplified or different from its direct usage.
   * For line/bar charts, `flattenedData` derived from this is often used, where series values are direct numbers.
   */
  data: {
    [key: string]: DataPoint; // This might be a complex way to store simple series values.
                               // The `generateFlattenedData` function likely transforms this.
  };
};

/**
 * @description Props for the internal `renderChart` component, not typically used directly.
 */
export type RenderChartProps = {
  /** Data transformed into a flat structure suitable for Recharts. */
  flattenedData: FlattenedDataPoint[];
  /** The type of chart to render. */
  chartType: ChartType;
  /** The key of the currently hovered series in the legend. */
  hoveredKey: string | null;
  /** Array of keys representing the lines/bars to be rendered. */
  lineKeys: string[];
  /** Array of color strings for the chart series. */
  colors: string[];
  /** Callback to set the hovered series key. */
  setHoveredKey: (key: string | null) => void;
  /** Optional label for the X-axis. */
  xAxisLabel?: string;
  /** Optional label for the Y-axis. */
  yAxisLabel?: string;
  /** Original nested data. */
  data: NewNestedDataPoint[];
  /** Array of keys for currently selected series in the legend. */
  selectedKeys: string[];
};

/**
 * @description A versatile charting component capable of rendering line, bar, and pie charts.
 * It supports custom legends, tooltips, and header slots for additional controls or information.
 * @feature Supports line, bar, and pie chart types.
 * @feature Customizable colors and axis labels.
 * @feature Interactive legend for filtering data series.
 * @feature Custom tooltip for detailed data point information.
 * @feature Slots for custom header content.
 * @example
 * ```tsx
 * import { Charts, ChartType, ChartLegendPosition } from "./components/Charts";
 * import { NewNestedDataPoint } from "./components/Charts/types";
 *
 * const chartData: NewNestedDataPoint[] = [
 *   {
 *     name: "Jan",
 *     data: {
 *       "Product A": { primary: { label: "Sales", val: 100 } },
 *       "Product B": { primary: { label: "Sales", val: 150 } },
 *     },
 *   },
 *   {
 *     name: "Feb",
 *     data: {
 *       "Product A": { primary: { label: "Sales", val: 120 } },
 *       "Product B": { primary: { label: "Sales", val: 180 } },
 *     },
 *   },
 * ];
 *
 * <Charts
 *   chartType={ChartType.LINE}
 *   data={chartData}
 *   xAxisLabel="Month"
 *   yAxisLabel="Sales"
 *   legendPosition={ChartLegendPosition.TOP}
 *   chartHeaderSlot={<div>Monthly Sales Report</div>}
 * />
 * ```
 */
export type ChartsProps = {
  /**
   * @propCategory Appearance
   * @description The type of chart to render (line, bar, or pie).
   * @default ChartType.LINE
   */
  chartType?: ChartType;
  /**
   * @propCategory Required
   * @description The data to be plotted on the chart, as an array of `NewNestedDataPoint`.
   */
  data: NewNestedDataPoint[];
  /**
   * @propCategory Labels
   * @description Optional label for the X-axis.
   */
  xAxisLabel?: string;
  /**
   * @propCategory Labels
   * @description Optional label for the Y-axis.
   */
  yAxisLabel?: string;
  /**
   * @propCategory Appearance
   * @description Optional array of color strings to use for different data series.
   * If not provided, default colors will be used.
   */
  colors?: string[];
  /**
   * @propCategory Data
   * @description Optional array of strings specifying which metrics (keys from `NewNestedDataPoint.data`) to plot.
   * If not provided, all available metrics may be plotted.
   */
  metrics?: string[];
  /**
   * @propCategory Content Slots
   * @description Optional React node for the first slot in the chart header.
   */
  slot1?: ReactNode;
  /**
   * @propCategory Content Slots
   * @description Optional React node for the second slot in the chart header.
   */
  slot2?: ReactNode;
  /**
   * @propCategory Content Slots
   * @description Optional React node for the third slot in the chart header.
   */
  slot3?: ReactNode;
  /**
   * @propCategory Appearance
   * @description Position of the chart legend.
   * @default ChartLegendPosition.RIGHT
   */
  legendPosition?: ChartLegendPosition;
  /**
   * @propCategory Required
   * @description React node for the main chart header content.
   */
  chartHeaderSlot: ReactNode;
};

/**
 * @description Represents a data point after being flattened for use in Recharts components.
 * It has a `name` property (typically for the x-axis) and dynamic keys for series values.
 */
export type FlattenedDataPoint = {
  /** The name of the data point, often used as the category label (e.g., x-axis value). */
  name: string;
  /** Dynamic keys representing data series, where each key is a series name and its value is the data for that series at this `name`. */
  [key: string]: number | string;
};

/**
 * @description Props for the `ChartHeader` component.
 */
export type ChartHeaderProps = {
  /** Content for the first slot in the header. */
  slot1: React.ReactNode;
  /** Content for the second slot in the header. */
  slot2: React.ReactNode;
  /** Content for the third slot in the header. */
  slot3: React.ReactNode;
  /** Main content for the chart header. */
  chartHeaderSlot: ReactNode;
};

/**
 * @description Props for the `ChartLegends` component.
 */
export type ChartLegendsProps = {
  /** Ref to the chart container, used for positioning or interaction. */
  chartContainerRef: React.RefObject<HTMLDivElement>;
  /** Array of keys (series names) for the legend items. */
  keys: string[];
  /** Array of color strings corresponding to the legend keys. */
  colors: string[];
  /** Callback function when a legend item is clicked. */
  handleLegendClick: (key: string) => void;
  /** Callback function when the mouse enters a legend item. */
  handleLegendEnter: (key: string) => void;
  /** Callback function when the mouse leaves a legend item. */
  handleLegendLeave: () => void;
  /** Array of keys for currently selected series. */
  selectedKeys: string[];
  /** Callback to update the selected series keys. */
  setSelectedKeys: (keys: string[]) => void;
  /** The key of the currently hovered series. */
  hoveredKey: string | null;
  /** Array of keys that are currently active/emphasized. */
  activeKeys: string[] | null;
  /** If true, indicates the legend is for a stacked chart. */
  stacked?: boolean;
};

/**
 * @description Props for the `CustomTooltip` component used in charts.
 * Extends Recharts' `TooltipProps`.
 */
export type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  /** The key of the currently hovered series in the legend, to coordinate tooltip highlighting. */
  hoveredKey: string | null;
  /** The original, unflattened data passed to the chart. */
  originalData: NewNestedDataPoint[];
  /** Callback to set the hovered series key, potentially from tooltip interaction. */
  setHoveredKey: (key: string) => void;
  /** The type of chart the tooltip is for. */
  chartType: ChartType;
  /** Array of keys for currently selected series in the legend. */
  selectedKeys: string[];
};
