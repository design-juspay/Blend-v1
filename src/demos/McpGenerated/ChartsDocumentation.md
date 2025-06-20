# Charts Component Documentation

## Description
A versatile charting component capable of rendering line, bar, and pie charts.
It supports custom legends, tooltips, and header slots for additional controls or information.

## Features
- Supports line, bar, and pie chart types.
- Customizable colors and axis labels.
- Interactive legend for filtering data series.
- Custom tooltip for detailed data point information.
- Slots for custom header content.

## Props

### Appearance

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `chartType` | `'line' \| 'bar' \| 'pie' \| undefined` | false | The type of chart to render (line, bar, or pie). | `-` |
| `colors` | `string[] \| undefined` | false | Optional array of color strings to use for different data series. If not provided, default colors will be used. | `-` |
| `legendPosition` | `'top' \| 'right' \| undefined` | false | Position of the chart legend. | `-` |

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `data` | `NewNestedDataPoint[]` | true | The data to be plotted on the chart, as an array of `NewNestedDataPoint`. | `-` |
| `chartHeaderSlot` | `ReactNode` | true | React node for the main chart header content. | `-` |

### Labels

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `xAxisLabel` | `string \| undefined` | false | Optional label for the X-axis. | `-` |
| `yAxisLabel` | `string \| undefined` | false | Optional label for the Y-axis. | `-` |

### Data

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `metrics` | `string[] \| undefined` | false | Optional array of strings specifying which metrics (keys from `NewNestedDataPoint.data`) to plot. If not provided, all available metrics may be plotted. | `-` |

### Content Slots

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `slot1` | `ReactNode` | false | Optional React node for the first slot in the chart header. | `-` |
| `slot2` | `ReactNode` | false | Optional React node for the second slot in the chart header. | `-` |
| `slot3` | `ReactNode` | false | Optional React node for the third slot in the chart header. | `-` |

## Usage Examples

### ```tsx
```tsx
import { Charts, ChartType, ChartLegendPosition } from "./components/Charts";
import { NewNestedDataPoint } from "./components/Charts/types";

const chartData: NewNestedDataPoint[] = [
  {
    name: "Jan",
    data: {
      "Product A": { primary: { label: "Sales", val: 100 } },
      "Product B": { primary: { label: "Sales", val: 150 } },
    },
  },
  {
    name: "Feb",
    data: {
      "Product A": { primary: { label: "Sales", val: 120 } },
      "Product B": { primary: { label: "Sales", val: 180 } },
    },
  },
];

<Charts
  chartType={ChartType.LINE}
  data={chartData}
  xAxisLabel="Month"
  yAxisLabel="Sales"
  legendPosition={ChartLegendPosition.TOP}
  chartHeaderSlot={<div>Monthly Sales Report</div>}
/>
