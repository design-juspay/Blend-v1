import React from 'react';
import { StatCard, Charts, DataTable, Text } from '../../../lib/main';
import { StatCardVariant, ChangeType as StatCardChangeType } from '../../../lib/components/StatCard/types'; // Import enums
import { ChartType, NewNestedDataPoint } from '../../../lib/components/Charts/types'; // Import Chart types
// import { ColumnDefinition } from '../../../lib/components/DataTable/types'; // Import DataTable types - removed as we are inferring

// Placeholder data - will be refined
const kpiData = [
  { title: 'Total Sales', value: '$1,250,300', change: { value: 5.2, type: StatCardChangeType.INCREASE } },
  { title: 'Revenue Growth', value: '15%', change: { value: 1.5, type: StatCardChangeType.INCREASE } },
  { title: 'Average Order Value', value: '$250', change: { value: -0.5, type: StatCardChangeType.DECREASE } },
  { title: 'Customer Acquisition Cost', value: '$50', change: { value: 2.0, type: StatCardChangeType.INCREASE } }, // Assuming higher CAC is an increase in cost, but might be displayed as negative impact
  { title: 'Conversion Rate', value: '3.5%', change: { value: 0.2, type: StatCardChangeType.INCREASE } },
  { title: 'Customer Lifetime Value', value: '$1,200', change: { value: 3.0, type: StatCardChangeType.INCREASE } },
];

// Transformed chartData1 for NewNestedDataPoint structure
const monthlySalesData: NewNestedDataPoint[] = [
  {
    name: 'Monthly Sales Revenue', // This will be the key in the nested data object
    data: {
      'Jan': { primary: { label: 'Jan', val: 65000 } },
      'Feb': { primary: { label: 'Feb', val: 59000 } },
      'Mar': { primary: { label: 'Mar', val: 80000 } },
      'Apr': { primary: { label: 'Apr', val: 81000 } },
      'May': { primary: { label: 'May', val: 56000 } },
      'Jun': { primary: { label: 'Jun', val: 55000 } },
      'Jul': { primary: { label: 'Jul', val: 70000 } },
      'Aug': { primary: { label: 'Aug', val: 75000 } },
      'Sep': { primary: { label: 'Sep', val: 90000 } },
      'Oct': { primary: { label: 'Oct', val: 85000 } },
      'Nov': { primary: { label: 'Nov', val: 78000 } },
      'Dec': { primary: { label: 'Dec', val: 92000 } },
    },
  },
];

// Transformed chartData2 for NewNestedDataPoint structure
const unitsSoldData: NewNestedDataPoint[] = [
  {
    name: 'Units Sold', // This will be the key in the nested data object
    data: {
      'Product A': { primary: { label: 'Product A', val: 300 } },
      'Product B': { primary: { label: 'Product B', val: 150 } },
      'Product C': { primary: { label: 'Product C', val: 220 } },
      'Product D': { primary: { label: 'Product D', val: 180 } },
      'Product E': { primary: { label: 'Product E', val: 250 } },
    },
  },
];

// Example colors for charts - these might need to align with Blend's theme or be configurable
const salesChartColors = ['rgb(75, 192, 192)'];
const unitsChartColors = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
];

// Define the type for tableData items for better type safety with ColumnDefinition
// type TransactionRow = {
//   orderId: string;
//   customerName: string;
//   date: string;
//   amount: string;
//   status: string;
// };

const tableColumns = [ // Let TypeScript infer the type for columns
  { field: 'orderId' as const, header: 'Order ID' },
  { field: 'customerName' as const, header: 'Customer Name' },
  { field: 'date' as const, header: 'Date' },
  { field: 'amount' as const, header: 'Amount' },
  { field: 'status' as const, header: 'Status' },
];

const tableData = [ // Let TypeScript infer the type for data
  { orderId: 'ORD001', customerName: 'John Doe', date: '2025-06-18', amount: '$150.00', status: 'Shipped' },
  { orderId: 'ORD002', customerName: 'Jane Smith', date: '2025-06-18', amount: '$200.50', status: 'Processing' },
  { orderId: 'ORD003', customerName: 'Alice Brown', date: '2025-06-17', amount: '$75.20', status: 'Delivered' },
  { orderId: 'ORD004', customerName: 'Bob Johnson', date: '2025-06-17', amount: '$300.00', status: 'Shipped' },
  { orderId: 'ORD005', customerName: 'Eve Williams', date: '2025-06-16', amount: '$99.99', status: 'Cancelled' },
  { orderId: 'ORD006', customerName: 'Michael Clark', date: '2025-06-15', amount: '$450.75', status: 'Delivered' },
];


const SalesKpiDashboard: React.FC = () => {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Text as="h1" variant="heading.xl" style={{ marginBottom: '24px', color: '#1f2937' }}>
        Sales KPI Dashboard
      </Text>

      <Text as="h2" variant="heading.lg" style={{ marginBottom: '16px', color: '#374151' }}>
        Key Performance Indicators
      </Text>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {kpiData.map((kpi, index) => (
          <StatCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            variant={StatCardVariant.NUMBER}
            // helpText={`Compared to last period`} // Example help text
            // style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)', borderRadius: '8px' }}
          />
        ))}
      </div>

      <Text as="h2" variant="heading.lg" style={{ marginBottom: '16px', color: '#374151' }}>
        Sales Trends & Analysis
      </Text>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
          <Charts
            chartType={ChartType.LINE}
            data={monthlySalesData}
            chartHeaderSlot={<Text variant="heading.md">Monthly Sales Revenue</Text>}
            colors={salesChartColors}
            // xAxisLabel="Month" // Optional: Add if needed
            // yAxisLabel="Revenue ($)" // Optional: Add if needed
            // height prop is not directly available, sizing is likely responsive or theme-based
          />
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
          <Charts
            chartType={ChartType.BAR}
            data={unitsSoldData}
            chartHeaderSlot={<Text variant="heading.md">Units Sold by Product</Text>}
            colors={unitsChartColors}
            // xAxisLabel="Product" // Optional: Add if needed
            // yAxisLabel="Units Sold" // Optional: Add if needed
          />
        </div>
      </div>

      <Text as="h2" variant="heading.lg" style={{ marginBottom: '16px', color: '#374151' }}>
        Recent Transactions
      </Text>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)' }}>
        <DataTable
          columns={tableColumns}
          data={tableData}
          idField="orderId" // Added required idField prop
          // Props like 'showPagination', 'defaultPageSize' might be needed
        />
      </div>
    </div>
  );
};

export default SalesKpiDashboard;
