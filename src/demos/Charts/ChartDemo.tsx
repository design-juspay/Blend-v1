import { Button, ButtonType, ButtonSize } from "../../../lib/components/Button";
import {
  Charts,
  ChartType,
  ChartLegendPosition,
} from "../../../lib/components/Charts";
import { NewNestedDataPoint } from "../../../lib/components/Charts/types";
import { Calendar, Filter, Download } from "lucide-react";
import "./ChartDemo.css";

const ChartDemo = () => {
  const sampleNestedData: NewNestedDataPoint[] = [
    {
      name: "Jan", // May 1
      data: {
        revenue: { // May 1 - May 30
          primary: { label: "Total Revenue", val: 4000 },
          aux: [{ label: "Growth", val: 12 }],
        },
        profit: { // Jun 1 - Jun 30
          primary: { label: "Net Profit", val: 2400 },
          aux: [{ label: "Margin", val: 24 }],
        },
        traffic: {
          primary: { label: "Website Traffic", val: 15000 },
          aux: [{ label: "Change", val: 8 }],
        },
        conversions: {
          primary: { label: "Conversion Rate", val: 3.2 },
          aux: [{ label: "Change", val: 0.5 }],
        },
      },
    },
    {
      name: "Feb",
      data: {
        revenue: {
          primary: { label: "Total Revenue", val: 3000 },
          aux: [{ label: "Growth", val: -25 }],
        },
        profit: {
          primary: { label: "Net Profit", val: 1398 },
          aux: [{ label: "Margin", val: 19 }],
        },
        traffic: {
          primary: { label: "Website Traffic", val: 13000 },
          aux: [{ label: "Change", val: -13 }],
        },
        conversions: {
          primary: { label: "Conversion Rate", val: 2.8 },
          aux: [{ label: "Change", val: -0.4 }],
        },
      },
    },
    {
      name: "Mar",
      data: {
        revenue: {
          primary: { label: "Total Revenue", val: 2000 },
          aux: [{ label: "Growth", val: -33 }],
        },
        profit: {
          primary: { label: "Net Profit", val: 9800 },
          aux: [{ label: "Margin", val: 32 }],
        },
        traffic: {
          primary: { label: "Website Traffic", val: 17000 },
          aux: [{ label: "Change", val: 30 }],
        },
        conversions: {
          primary: { label: "Conversion Rate", val: 3.5 },
          aux: [{ label: "Change", val: 0.7 }],
        },
      },
    },
    {
      name: "Apr",
      data: {
        revenue: {
          primary: { label: "Total Revenue", val: 2780 },
          aux: [{ label: "Growth", val: 39 }],
        },
        profit: {
          primary: { label: "Net Profit", val: 3908 },
          aux: [{ label: "Margin", val: 28 }],
        },
        traffic: {
          primary: { label: "Website Traffic", val: 19500 },
          aux: [{ label: "Change", val: 15 }],
        },
        conversions: {
          primary: { label: "Conversion Rate", val: 4.1 },
          aux: [{ label: "Change", val: 0.6 }],
        },
      },
    },
    {
      name: "May",
      data: {
        revenue: {
          primary: { label: "Total Revenue", val: 3490 },
          aux: [{ label: "Growth", val: 25 }],
        },
        profit: {
          primary: { label: "Net Profit", val: 4300 },
          aux: [{ label: "Margin", val: 31 }],
        },
        traffic: {
          primary: { label: "Website Traffic", val: 21000 },
          aux: [{ label: "Change", val: 8 }],
        },
        conversions: {
          primary: { label: "Conversion Rate", val: 3.9 },
          aux: [{ label: "Change", val: -0.2 }],
        },
      },
    },
    {
      name: "Jun",
      data: {
        revenue: {
          primary: { label: "Total Revenue", val: 3200 },
          aux: [{ label: "Growth", val: -8 }],
        },
        profit: {
          primary: { label: "Net Profit", val: 3800 },
          aux: [{ label: "Margin", val: 29 }],
        },
        traffic: {
          primary: { label: "Website Traffic", val: 18500 },
          aux: [{ label: "Change", val: -12 }],
        },
        conversions: {
          primary: { label: "Conversion Rate", val: 4.2 },
          aux: [{ label: "Change", val: 0.3 }],
        },
      },
    },
  ];

  return (
    <div className="chart-demo-container">
      <h1 className="chart-demo-title">Chart Component Demo</h1>

      <Charts
        data={sampleNestedData}
        chartType={ChartType.LINE}
        chartHeaderSlot={
          <div className="chart-header">
            <h2 className="chart-header-title">Line Chart Example</h2>
          </div>
        }
        slot1={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Calendar}
            size={ButtonSize.SMALL}
            onClick={() => {
              console.log("Calendar clicked");
            }}
          >
            Last 6 months
          </Button>
        }
        slot2={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Filter}
            size={ButtonSize.SMALL}
          >
            Filters
          </Button>
        }
        slot3={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Download}
            size={ButtonSize.SMALL}
          >
            Export
          </Button>
        }
      />

      <Charts
        data={sampleNestedData}
        chartType={ChartType.BAR}
        chartHeaderSlot={
          <div className="chart-header">
            <h2 className="chart-header-title">Bar Chart Example</h2>
          </div>
        }
        slot1={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Calendar}
            size={ButtonSize.SMALL}
          >
            Last 6 months
          </Button>
        }
        slot2={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Filter}
            size={ButtonSize.SMALL}
          >
            Filters
          </Button>
        }
        slot3={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Download}
            size={ButtonSize.SMALL}
          >
            Export
          </Button>
        }
      />

      <Charts
        data={sampleNestedData}
        chartType={ChartType.PIE}
        chartHeaderSlot={
          <div className="chart-header">
            <h2 className="chart-header-title">Pie Chart Example</h2>
          </div>
        }
        slot1={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Calendar}
            size={ButtonSize.SMALL}
          >
            Last 6 months
          </Button>
        }
        slot2={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Filter}
            size={ButtonSize.SMALL}
          >
            Filters
          </Button>
        }
        slot3={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Download}
            size={ButtonSize.SMALL}
          >
            Export
          </Button>
        }
      />

      <Charts
        data={sampleNestedData}
        legendPosition={ChartLegendPosition.RIGHT}
        chartType={ChartType.PIE}
        chartHeaderSlot={
          <div className="chart-header chart-header-truncate">
            <h2 className="chart-header-title">
              Pie Chart with Right Legend Position
            </h2>
          </div>
        }
        slot1={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Calendar}
            size={ButtonSize.SMALL}
          >
            Last 6 months
          </Button>
        }
        slot2={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Filter}
            size={ButtonSize.SMALL}
          >
            Filters
          </Button>
        }
        slot3={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Download}
            size={ButtonSize.SMALL}
          >
            Export
          </Button>
        }
      />

      <Charts
        data={sampleNestedData}
        chartType={ChartType.LINE}
        metrics={["revenue", "profit"]}
        chartHeaderSlot={
          <div className="chart-header">
            <h2 className="chart-header-title">
              Line Chart with Limited Metrics
            </h2>
          </div>
        }
        slot1={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Calendar}
            size={ButtonSize.SMALL}
          >
            Last 6 months
          </Button>
        }
        slot2={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Filter}
            size={ButtonSize.SMALL}
          >
            Filters
          </Button>
        }
        slot3={
          <Button
            buttonType={ButtonType.SECONDARY}
            leadingIcon={Download}
            size={ButtonSize.SMALL}
          >
            Export
          </Button>
        }
        xAxisLabel="Month"
        yAxisLabel="Value"
      />
    </div>
  );
};

export default ChartDemo;
