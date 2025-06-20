# StatCard Component Documentation

## Description
A card component designed to display key statistics or metrics.
It can show a primary value, title, subtitle, change indicator, and a mini chart or progress bar.

## Features
- Displays a key statistic prominently.
- Shows trend/change information (increase/decrease).
- Multiple visual variants (line chart, progress bar, bar chart, number only).
- Optional icons for title and actions.
- Help icon with tooltip support.

## Props

### Required

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `title` | `string` | true | The main title of the stat card. | `-` |
| `value` | `string \| number` | true | The primary value to be displayed on the card (e.g., a number, currency amount). | `-` |
| `variant` | `'line' \| 'progress' \| 'bar' \| 'number'` | true | The visual variant of the stat card, determining how data is presented. | `-` |

### Data

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `change` | `StatCardChange \| undefined` | false | Optional object representing the change in value (e.g., percentage increase/decrease). | `-` |
| `chartData` | `ChartDataPoint[] \| undefined` | false | Optional array of `ChartDataPoint` for variants that include a chart (LINE, BAR). | `-` |
| `progressValue` | `number \| undefined` | false | The value for the progress bar variant (typically 0-100). | `-` |

### Content

| Prop Name     | Type        | Required | Description | Default Value |
|---------------|-------------|----------|-------------|---------------|
| `subtitle` | `string \| undefined` | false | Optional subtitle or additional context for the stat. | `-` |
| `titleIcon` | `ReactNode` | false | Optional ReactNode (e.g., an icon) to display next to the title. | `-` |
| `actionIcon` | `ReactNode` | false | Optional ReactNode (e.g., an icon button) for an action related to the card. | `-` |
| `helpIconText` | `string \| undefined` | false | Tooltip text for an optional help icon displayed near the title. | `-` |

## Usage Examples

### ```tsx
```tsx
import { StatCard, StatCardVariant, ChangeType } from "./components/StatCard"; // Assuming path
import { TrendingUp, Info } from "lucide-react"; // Assuming lucide-react

const salesData: ChartDataPoint[] = [
  { label: "Mon", value: 100 }, { label: "Tue", value: 150 }, { label: "Wed", value: 120 }
];

<StatCard
  title="Total Revenue"
  value="$12,345"
  variant={StatCardVariant.LINE}
  chartData={salesData}
  change={{ value: 5.2, type: ChangeType.INCREASE }}
  subtitle="Last 30 days"
  titleIcon={<TrendingUp size={18} />}
  helpIconText="This is the total revenue generated."
/>

<StatCard
  title="Task Completion"
  value="75%"
  variant={StatCardVariant.PROGRESS_BAR}
  progressValue={75}
  subtitle="Project Alpha"
/>
