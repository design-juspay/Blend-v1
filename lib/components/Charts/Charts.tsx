import { ChartLegendPosition, ChartsProps, ChartType } from "./types";
import { ResponsiveContainer } from "recharts";
import { DEFAULT_COLORS } from "./utils";
import { ChartHeader } from "./ChartHeader";
import { ChartLegends } from "./ChartLegend";
import { useRef, useState } from "react";
import { renderChart } from "./renderChart";
import { transformNestedData } from "./ChartUtils";
import Block from "../../components/Primitives/Block/Block";
import { FOUNDATION_THEME } from "../../tokens";

/**
 * @description A comprehensive charting component that renders interactive line, bar, and pie charts with customizable legends, tooltips, and data visualization features.
 * Built on Recharts with enhanced functionality for data exploration, series filtering, and responsive design.
 * @feature Multiple chart types (line, bar, pie) with seamless switching
 * @feature Interactive legend with series filtering and hover effects
 * @feature Custom tooltips with detailed data point information
 * @feature Responsive container with automatic sizing
 * @feature Customizable colors and axis labels
 * @feature Header slots for additional controls and information
 * @feature Data transformation for complex nested datasets
 * @example Basic Line Chart
 * ```tsx
 * import { Charts, ChartType, NewNestedDataPoint } from "blend-v1";
 * 
 * const salesData: NewNestedDataPoint[] = [
 *   {
 *     name: "January",
 *     data: {
 *       "Product A": { primary: { label: "Sales", val: 4500 } },
 *       "Product B": { primary: { label: "Sales", val: 3200 } },
 *       "Product C": { primary: { label: "Sales", val: 2800 } }
 *     }
 *   },
 *   {
 *     name: "February", 
 *     data: {
 *       "Product A": { primary: { label: "Sales", val: 5200 } },
 *       "Product B": { primary: { label: "Sales", val: 3800 } },
 *       "Product C": { primary: { label: "Sales", val: 3100 } }
 *     }
 *   },
 *   {
 *     name: "March",
 *     data: {
 *       "Product A": { primary: { label: "Sales", val: 4800 } },
 *       "Product B": { primary: { label: "Sales", val: 4200 } },
 *       "Product C": { primary: { label: "Sales", val: 3500 } }
 *     }
 *   }
 * ];
 * 
 * <Charts
 *   chartType={ChartType.LINE}
 *   data={salesData}
 *   xAxisLabel="Month"
 *   yAxisLabel="Sales ($)"
 *   chartHeaderSlot={<h3>Monthly Sales Performance</h3>}
 * />
 * ```
 * @example Intermediate Bar Chart with Custom Colors
 * ```tsx
 * import { 
 *   Charts, 
 *   ChartType, 
 *   ChartLegendPosition, 
 *   NewNestedDataPoint 
 * } from "blend-v1";
 * import { TrendingUp, BarChart, Download } from "lucide-react";
 * 
 * const revenueData: NewNestedDataPoint[] = [
 *   {
 *     name: "Q1 2024",
 *     data: {
 *       "Subscriptions": { primary: { label: "Revenue", val: 125000 } },
 *       "One-time Sales": { primary: { label: "Revenue", val: 45000 } },
 *       "Services": { primary: { label: "Revenue", val: 32000 } }
 *     }
 *   },
 *   {
 *     name: "Q2 2024",
 *     data: {
 *       "Subscriptions": { primary: { label: "Revenue", val: 142000 } },
 *       "One-time Sales": { primary: { label: "Revenue", val: 38000 } },
 *       "Services": { primary: { label: "Revenue", val: 41000 } }
 *     }
 *   },
 *   {
 *     name: "Q3 2024",
 *     data: {
 *       "Subscriptions": { primary: { label: "Revenue", val: 158000 } },
 *       "One-time Sales": { primary: { label: "Revenue", val: 52000 } },
 *       "Services": { primary: { label: "Revenue", val: 48000 } }
 *     }
 *   }
 * ];
 * 
 * const customColors = ["#3b82f6", "#10b981", "#f59e0b"];
 * 
 * <Charts
 *   chartType={ChartType.BAR}
 *   data={revenueData}
 *   colors={customColors}
 *   xAxisLabel="Quarter"
 *   yAxisLabel="Revenue ($)"
 *   legendPosition={ChartLegendPosition.TOP}
 *   chartHeaderSlot={
 *     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
 *       <BarChart size={24} />
 *       <span>Quarterly Revenue Breakdown</span>
 *     </div>
 *   }
 *   slot1={
 *     <button style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
 *       <TrendingUp size={16} />
 *       View Trends
 *     </button>
 *   }
 *   slot2={
 *     <button style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
 *       <Download size={16} />
 *       Export Data
 *     </button>
 *   }
 * />
 * ```
 * @example Advanced Pie Chart with All Features
 * ```tsx
 * import { 
 *   Charts, 
 *   ChartType, 
 *   ChartLegendPosition, 
 *   NewNestedDataPoint 
 * } from "blend-v1";
 * import { useState } from "react";
 * import { PieChart, Settings, RefreshCw, Share2 } from "lucide-react";
 * 
 * function MarketShareChart() {
 *   const [refreshing, setRefreshing] = useState(false);
 * 
 *   const marketShareData: NewNestedDataPoint[] = [
 *     {
 *       name: "Market Share",
 *       data: {
 *         "Our Company": { primary: { label: "Market Share", val: 35.2 } },
 *         "Competitor A": { primary: { label: "Market Share", val: 28.7 } },
 *         "Competitor B": { primary: { label: "Market Share", val: 18.9 } },
 *         "Competitor C": { primary: { label: "Market Share", val: 12.1 } },
 *         "Others": { primary: { label: "Market Share", val: 5.1 } }
 *       }
 *     }
 *   ];
 * 
 *   const brandColors = [
 *     "#6366f1", // Our Company - Indigo
 *     "#ef4444", // Competitor A - Red  
 *     "#f59e0b", // Competitor B - Amber
 *     "#10b981", // Competitor C - Emerald
 *     "#8b5cf6"  // Others - Purple
 *   ];
 * 
 *   const handleRefresh = async () => {
 *     setRefreshing(true);
 *     // Simulate data refresh
 *     await new Promise(resolve => setTimeout(resolve, 2000));
 *     setRefreshing(false);
 *   };
 * 
 *   return (
 *     <Charts
 *       chartType={ChartType.PIE}
 *       data={marketShareData}
 *       colors={brandColors}
 *       legendPosition={ChartLegendPosition.RIGHT}
 *       chartHeaderSlot={
 *         <div style={{ 
 *           display: 'flex', 
 *           alignItems: 'center', 
 *           justifyContent: 'space-between',
 *           width: '100%'
 *         }}>
 *           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
 *             <PieChart size={24} color="#6366f1" />
 *             <div>
 *               <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
 *                 Market Share Analysis
 *               </h3>
 *               <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
 *                 Q4 2024 Industry Report
 *               </p>
 *             </div>
 *           </div>
 *         </div>
 *       }
 *       slot1={
 *         <button 
 *           onClick={handleRefresh}
 *           disabled={refreshing}
 *           style={{ 
 *             display: 'flex', 
 *             alignItems: 'center', 
 *             gap: '8px',
 *             padding: '8px 12px',
 *             border: '1px solid #d1d5db',
 *             borderRadius: '6px',
 *             background: 'white',
 *             cursor: refreshing ? 'not-allowed' : 'pointer'
 *           }}
 *         >
 *           <RefreshCw 
 *             size={16} 
 *             style={{ 
 *               animation: refreshing ? 'spin 1s linear infinite' : 'none' 
 *             }} 
 *           />
 *           Refresh Data
 *         </button>
 *       }
 *       slot2={
 *         <button style={{ 
 *           display: 'flex', 
 *           alignItems: 'center', 
 *           gap: '8px',
 *           padding: '8px 12px',
 *           border: '1px solid #d1d5db',
 *           borderRadius: '6px',
 *           background: 'white',
 *           cursor: 'pointer'
 *         }}>
 *           <Share2 size={16} />
 *           Share Report
 *         </button>
 *       }
 *       slot3={
 *         <button style={{ 
 *           display: 'flex', 
 *           alignItems: 'center', 
 *           gap: '8px',
 *           padding: '8px 12px',
 *           border: '1px solid #d1d5db',
 *           borderRadius: '6px',
 *           background: 'white',
 *           cursor: 'pointer'
 *         }}>
 *           <Settings size={16} />
 *           Chart Settings
 *         </button>
 *       }
 *     />
 *   );
 * }
 * ```
 */
const Charts: React.FC<ChartsProps> = ({
  chartType = ChartType.LINE,
  data,
  colors,
  xAxisLabel,
  yAxisLabel,
  slot1,
  slot2,
  slot3,
  legendPosition = ChartLegendPosition.TOP,
  chartHeaderSlot,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null!);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  if (!colors || colors.length === 0) colors = DEFAULT_COLORS;
  const flattenedData = transformNestedData(data, selectedKeys);

  const lineKeys = data.length > 0 ? Object.keys(data[0].data) : [];

  const handleLegendClick = (key: string) => {
    if (chartType === ChartType.PIE) return;
    setSelectedKeys((prevActiveKeys) => {
      if (prevActiveKeys.includes(key)) {
        return prevActiveKeys.filter((k) => k !== key);
      } else {
        return [...prevActiveKeys, key];
      }
    });
  };

  const handleLegendEnter = (key: string) => {
    if (selectedKeys.length === 0 || selectedKeys.length === lineKeys.length) {
      setHoveredKey(key);
    }
  };

  const handleLegendLeave = () => {
    setHoveredKey(null);
  };

  const showHorizontallyStackedLegends = () => {
    return !(
      chartType === ChartType.PIE &&
      legendPosition === ChartLegendPosition.RIGHT
    );
  };

  return (
    <Block
      ref={chartContainerRef}
      width="100%"
      height="100%"
      border={`1px solid ${FOUNDATION_THEME.colors.gray[300]}`}
      borderRadius={FOUNDATION_THEME.border.radius[8]}
      backgroundColor={FOUNDATION_THEME.colors.gray[0]}
    >
      <ChartHeader
        slot1={slot1}
        slot2={slot2}
        slot3={slot3}
        chartHeaderSlot={chartHeaderSlot}
      />
      {showHorizontallyStackedLegends() ? (
        <Block
          padding={FOUNDATION_THEME.unit[20]}
          paddingLeft={FOUNDATION_THEME.unit[16]}
          paddingRight={FOUNDATION_THEME.unit[16]}
          display="flex"
          flexDirection="column"
          gap={FOUNDATION_THEME.unit[24]}
        >
          <ChartLegends
            chartContainerRef={chartContainerRef}
            keys={lineKeys}
            colors={colors}
            handleLegendClick={handleLegendClick}
            handleLegendEnter={handleLegendEnter}
            handleLegendLeave={handleLegendLeave}
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
            hoveredKey={hoveredKey}
            activeKeys={selectedKeys}
            stacked={false}
          />
          <Block>
            <ResponsiveContainer width="100%" height={400}>
              {renderChart({
                flattenedData,
                chartType,
                hoveredKey,
                lineKeys,
                colors,
                setHoveredKey,
                xAxisLabel,
                yAxisLabel,
                data,
                selectedKeys,
              })}
            </ResponsiveContainer>
          </Block>
        </Block>
      ) : (
        <Block
          padding={FOUNDATION_THEME.unit[20]}
          paddingLeft={FOUNDATION_THEME.unit[16]}
          paddingRight={FOUNDATION_THEME.unit[16]}
          display="flex"
          gap={FOUNDATION_THEME.unit[24]}
        >
          <Block style={{ flex: 1, width: "100%" }}>
            <ResponsiveContainer width="100%" height={400}>
              {renderChart({
                flattenedData,
                chartType,
                hoveredKey,
                lineKeys,
                colors,
                setHoveredKey,
                xAxisLabel,
                yAxisLabel,
                data,
                selectedKeys,
              })}
            </ResponsiveContainer>
          </Block>
          <Block
            width="25%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ChartLegends
              chartContainerRef={chartContainerRef}
              keys={lineKeys}
              colors={colors}
              handleLegendClick={handleLegendClick}
              handleLegendEnter={handleLegendEnter}
              handleLegendLeave={handleLegendLeave}
              selectedKeys={selectedKeys}
              setSelectedKeys={setSelectedKeys}
              hoveredKey={hoveredKey}
              activeKeys={selectedKeys}
              stacked={true}
            />
          </Block>
        </Block>
      )}
    </Block>
  );
};

Charts.displayName = "Charts";

export default Charts;
