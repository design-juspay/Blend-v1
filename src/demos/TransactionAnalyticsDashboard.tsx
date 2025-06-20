import React, { useState } from 'react'; // Added useState
import { StatCard, StatCardVariant, ChangeType, Text, ButtonV2, ButtonTypeV2, Tabs, TabsList, TabsTrigger, TabsVariant, ButtonSubTypeV2, Charts, ChartType, ButtonSizeV2, ChartLegendPosition, DataTable, ColumnDefinition, Checkbox, Avatar, AvatarSize, AvatarShape } from '../../lib/main'; // Added DataTable, ColumnDefinition, Checkbox, Avatar, AvatarSize, AvatarShape
// import { RefreshCw, TrendingUp, FileText, Timer, AlertTriangle, ArrowRight, CalendarDays, Filter, ChevronDown, Settings, Download, Plus, MoreHorizontal, Edit3, Trash2, MoreVertical } from 'lucide-react'; // Example icon imports

// Placeholder data for mini charts - In a real app, this would come from props or state
const kpiChartDataGreen = [{ label: 'M1', value: 10 }, { label: 'M2', value: 20 }, { label: 'M3', value: 15 }];
const kpiChartDataRed = [{ label: 'M1', value: 25 }, { label: 'M2', value: 15 }, { label: 'M3', value: 20 }];

const KpiSection = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
      <StatCard
        title="Transaction Success Rate"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataGreen}
        // change={{ value: 23.45, type: ChangeType.INCREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for RefreshCw Icon */}</span>}
      />
      <StatCard
        title="Success Transaction"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataGreen}
        // change={{ value: 23.45, type: ChangeType.INCREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for TrendingUp Icon */}</span>}
      />
      <StatCard
        title="Average Ticket Size"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataRed} // Assuming red line for decrease
        // change={{ value: 23.45, type: ChangeType.DECREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for FileText Icon */}</span>}
        actionIcon={<span>&rarr;</span>}
      />
      <StatCard
        title="Average Ticket Size"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataRed} // Assuming red line for decrease
        // change={{ value: 23.45, type: ChangeType.DECREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for FileText Icon */}</span>}
        actionIcon={<span>&rarr;</span>}
      />
      <StatCard
        title="Transaction Success Rate" // Note: Image shows this title twice
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataGreen}
        // change={{ value: 23.45, type: ChangeType.INCREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for RefreshCw Icon */}</span>} 
      />
      <StatCard
        title="Average Latency"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataGreen}
        // change={{ value: 23.45, type: ChangeType.INCREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for Timer Icon */}</span>}
      />
      <StatCard
        title="Conflicted Transaction Rate"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataGreen}
        // change={{ value: 23.45, type: ChangeType.INCREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for AlertTriangle Icon */}</span>}
      />
      <StatCard
        title="TP 50 Latency"
        value="83.24%"
        variant={StatCardVariant.LINE}
        chartData={kpiChartDataGreen}
        // change={{ value: 23.45, type: ChangeType.INCREASE }} // Removed change prop
        titleIcon={<span>{/* Placeholder for Timer Icon */}</span>}
      />
    </div>
  );
};

const PageHeaderSection = () => {
  // Placeholder icons - replace with actual Lucide icons or other icon library
  const CalendarIcon = () => <span>{/* Calendar */}</span>;
  const FilterIcon = () => <span>{/* Filter */}</span>;
  const ChevronDownIcon = () => <span>{/* ChevronDown */}</span>;

  return (
    <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","marginBottom":"20px"}}>
      <Text variant="heading.lg">
          Transaction Analytics
      </Text>
      <div style={{"display":"flex", "alignItems": "center", "gap":"10px"}}>
        <ButtonV2 text="Today" buttonType={ButtonTypeV2.SECONDARY} leadingIcon={<CalendarIcon />} />
        <ButtonV2 text="Compare With" buttonType={ButtonTypeV2.SECONDARY} />
        <ButtonV2 text="Transactions" buttonType={ButtonTypeV2.SECONDARY} trailingIcon={<ChevronDownIcon />} />
        <ButtonV2 text="Filters" buttonType={ButtonTypeV2.SECONDARY} leadingIcon={<FilterIcon />} />
      </div>
      <div style={{"display":"flex","gap":"10px","alignItems":"center"}}>
        <ButtonV2 text="Asia-Pacific" buttonType={ButtonTypeV2.SECONDARY} trailingIcon={<ChevronDownIcon />} />
        <ButtonV2 text="Test Mode" buttonType={ButtonTypeV2.SECONDARY} />
      </div>
    </div>
  );
};

// Define NewNestedDataPoint structure if not exported from library, based on Charts component documentation
// For simplicity, assuming it's available or we define it locally if needed.
// If it's part of the library, it should be imported: import { NewNestedDataPoint } from '../../lib/main';
// For now, we'll assume the Charts component handles the structure internally based on its props.
// If NewNestedDataPoint is not directly usable, we'll use a compatible structure.
interface LocalChartDataPoint { // Used for StatCard's mini charts
  label: string;
  value: number;
}

interface NewNestedDataPoint {
  name: string; // X-axis category
  data: {
    [metricKey: string]: { // Series name
      primary: { label: string; val: number };
      secondary?: { label: string; val: number };
    };
  };
}


const DataSourceTabsSection = () => {
  // Placeholder for PlusIcon, replace with actual Lucide icon or similar
  const PlusIcon = () => <span>+</span>; // Using a simple span for the + icon

  return (
    <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
      <Tabs defaultValue="merchantId" variant={TabsVariant.UNDERLINE} style={{ flexGrow: 1 }}>
        <TabsList>
          <TabsTrigger value="merchantId">Merchant ID</TabsTrigger>
          <TabsTrigger value="paymentGateway">Payment Gateway</TabsTrigger>
          <TabsTrigger value="paymentMethodType">Payment Method Type</TabsTrigger>
        </TabsList>
        {/* <TabsContent value="merchantId">Merchant ID Content</TabsContent> */}
        {/* <TabsContent value="paymentGateway">Payment Gateway Content</TabsContent> */}
        {/* <TabsContent value="paymentMethodType">Payment Method Type Content</TabsContent> */}
      </Tabs>
      <ButtonV2 
        subType={ButtonSubTypeV2.ICON_ONLY}
        leadingIcon={<PlusIcon />} 
        aria-label="Add new data source" 
        // style={{ marginLeft: '10px' }} // Removed style prop
      />
    </div>
  );
};

const TransactionAnalyticsDashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9fafb', fontFamily: 'Inter, sans-serif' }}>
      <PageHeaderSection />
      <KpiSection />
      <DataSourceTabsSection />
      <ChartLayoutSection />
      <SummaryTableSection />
    </div>
  );
};

// Sample Data for Charts
const sampleLineChartData: NewNestedDataPoint[] = [
  { name: '00:00', data: { 'Overall': { primary: { label: 'Overall', val: 35 } }, 'mpocket': { primary: { label: 'mpocket', val: 55 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 60 } }, 'meesho': { primary: { label: 'meesho', val: 40 } } } },
  { name: '01:00', data: { 'Overall': { primary: { label: 'Overall', val: 40 } }, 'mpocket': { primary: { label: 'mpocket', val: 60 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 65 } }, 'meesho': { primary: { label: 'meesho', val: 45 } } } },
  { name: '02:00', data: { 'Overall': { primary: { label: 'Overall', val: 38 } }, 'mpocket': { primary: { label: 'mpocket', val: 58 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 62 } }, 'meesho': { primary: { label: 'meesho', val: 42 } } } },
  { name: '03:00', data: { 'Overall': { primary: { label: 'Overall', val: 45 } }, 'mpocket': { primary: { label: 'mpocket', val: 65 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 70 } }, 'meesho': { primary: { label: 'meesho', val: 50 } } } },
  { name: '04:00', data: { 'Overall': { primary: { label: 'Overall', val: 50 } }, 'mpocket': { primary: { label: 'mpocket', val: 70 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 75 } }, 'meesho': { primary: { label: 'meesho', val: 55 } } } },
  { name: '05:00', data: { 'Overall': { primary: { label: 'Overall', val: 48 } }, 'mpocket': { primary: { label: 'mpocket', val: 68 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 72 } }, 'meesho': { primary: { label: 'meesho', val: 52 } } } },
  { name: '06:00', data: { 'Overall': { primary: { label: 'Overall', val: 55 } }, 'mpocket': { primary: { label: 'mpocket', val: 75 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 80 } }, 'meesho': { primary: { label: 'meesho', val: 60 } } } },
  { name: '07:00', data: { 'Overall': { primary: { label: 'Overall', val: 60 } }, 'mpocket': { primary: { label: 'mpocket', val: 80 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 85 } }, 'meesho': { primary: { label: 'meesho', val: 65 } } } },
  { name: '08:00', data: { 'Overall': { primary: { label: 'Overall', val: 58 } }, 'mpocket': { primary: { label: 'mpocket', val: 78 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 82 } }, 'meesho': { primary: { label: 'meesho', val: 62 } } } },
  { name: '09:00', data: { 'Overall': { primary: { label: 'Overall', val: 65 } }, 'mpocket': { primary: { label: 'mpocket', val: 85 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 90 } }, 'meesho': { primary: { label: 'meesho', val: 70 } } } },
  { name: '10:00', data: { 'Overall': { primary: { label: 'Overall', val: 70 } }, 'mpocket': { primary: { label: 'mpocket', val: 90 } }, 'zeptomarketplace': { primary: { label: 'zeptomarketplace', val: 95 } }, 'meesho': { primary: { label: 'meesho', val: 75 } } } },
];

const sampleBarChartData: NewNestedDataPoint[] = [
    { name: '00:00', data: { 'Overall': { primary: { label: 'Overall', val: 2.8 } } } },
    { name: '01:00', data: { 'Overall': { primary: { label: 'Overall', val: 2.9 } } } },
    { name: '02:00', data: { 'Overall': { primary: { label: 'Overall', val: 1.8 } } } },
    { name: '03:00', data: { 'Overall': { primary: { label: 'Overall', val: 2.7 } } } },
    { name: '04:00', data: { 'Overall': { primary: { label: 'Overall', val: 3.0 } } } },
];

const samplePieChartData: NewNestedDataPoint[] = [
    { name: 'Legend 1', data: { 'Series1': { primary: { label: 'Legend 1', val: 40 } } } },
    { name: 'Legend 2', data: { 'Series1': { primary: { label: 'Legend 2', val: 25 } } } },
    { name: 'Legend 3', data: { 'Series1': { primary: { label: 'Legend 3', val: 15 } } } },
    { name: 'Legend 4', data: { 'Series1': { primary: { label: 'Legend 4', val: 10 } } } },
    { name: 'Legend 5', data: { 'Series1': { primary: { label: 'Legend 5', val: 10 } } } },
];


interface ChartCardProps {
  title: string;
  chartType: ChartType;
  chartData: NewNestedDataPoint[];
  // TODO: Add props for Top 5, Hourly filters if they are dynamic and control chart data
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartType, chartData }) => {
  const ChevronDownIcon = () => <span>{/* V */}</span>; // Placeholder
  const MoreHorizontalIcon = () => <span>...</span>; // Placeholder

  const legendItems = React.useMemo(() => {
    if (!chartData || chartData.length === 0) return [];
    const firstDataPoint = chartData[0].data;
    return Object.keys(firstDataPoint).map(key => ({ name: key }));
  }, [chartData]);
  
  // Example colors, ideally these would be part of a theme or dynamically generated
  const chartColors = ['#4A90E2', '#50E3C2', '#BD10E0', '#F5A623', '#F8E71C'];


  const chartHeader = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
      <Text variant="heading.md">{title}</Text>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <ButtonV2 text="Top 5" buttonType={ButtonTypeV2.SECONDARY} trailingIcon={<ChevronDownIcon />} size={ButtonSizeV2.SMALL} />
        <ButtonV2 text="Hourly" buttonType={ButtonTypeV2.SECONDARY} trailingIcon={<ChevronDownIcon />} size={ButtonSizeV2.SMALL} />
        <ButtonV2 subType={ButtonSubTypeV2.ICON_ONLY} leadingIcon={<MoreHorizontalIcon />} aria-label="More options" size={ButtonSizeV2.SMALL} />
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)' }}>
      <Charts
        chartHeaderSlot={chartHeader}
        data={chartData}
        chartType={chartType}
        legendPosition={ChartLegendPosition.TOP}
        metrics={legendItems.map(item => item.name)} 
        colors={chartColors.slice(0, legendItems.length)}
        // xAxisLabel={chartType !== ChartType.PIE ? "Time" : undefined} // Example conditional labels
        // yAxisLabel={chartType !== ChartType.PIE ? "Value" : undefined}
      />
    </div>
  );
};

const ChartLayoutSection = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '30px' }}>
      <ChartCard title="Transaction Success Rate" chartType={ChartType.LINE} chartData={sampleLineChartData} />
      <ChartCard title="Overall Transaction" chartType={ChartType.LINE} chartData={sampleLineChartData} />
      <ChartCard title="Transaction Success Rate" chartType={ChartType.BAR} chartData={sampleBarChartData} />
      <ChartCard title="Transaction Success Rate" chartType={ChartType.PIE} chartData={samplePieChartData} />
    </div>
  );
};

// Summary Table Section
interface SummaryTableRow {
  id: string;
  orderId: string;
  user: { name: string; joinDate: string; avatarUrl?: string };
  amount: number;
  gateway: string;
  assignee: { name: string; avatarUrl?: string };
  progress: number; // 0-100
  // Removed synthetic fields, will reuse 'id' for select/action columns' field prop
}

const sampleTableData: SummaryTableRow[] = Array(10).fill(null).map((_, index) => ({
  id: `row-${index + 1}`,
  orderId: `4536756${index + 1}`,
  user: { name: 'Jese Leos', joinDate: 'Joined in August 2014', avatarUrl: `https://i.pravatar.cc/40?u=user${index}` },
  amount: 342,
  gateway: 'Gateway',
  assignee: { name: 'Samantha Smith', avatarUrl: `https://i.pravatar.cc/40?u=assignee${index}` },
  progress: Math.floor(Math.random() * 100),
}));

const SummaryTableSection: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  // Corrected handleSelectAll to match Checkbox's onCheckedChange signature
  const handleSelectAllRows = (isChecked: boolean | 'indeterminate') => { 
    if (isChecked === true) {
      setSelectedRows(new Set(sampleTableData.map(row => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (rowId: string, checked: boolean | 'indeterminate') => {
    setSelectedRows(prev => {
      const newSelected = new Set(prev);
      if (checked === true) {
        newSelected.add(rowId);
      } else {
        newSelected.delete(rowId);
      }
      return newSelected;
    });
  };
  
  // Placeholders for icons
  const SettingsIcon = () => <span>{/* Settings */}</span>;
  const DownloadIcon = () => <span>{/* Download */}</span>;
  const EditIcon = () => <span>{/* Edit */}</span>;
  const TrashIcon = () => <span>{/* Trash */}</span>;
  const MoreVerticalIcon = () => <span>{/* MoreVertical */}</span>;


  const columns: ColumnDefinition<SummaryTableRow>[] = [
    {
      // For columns without a direct data field, use a unique 'field' that won't clash, 
      // or ensure 'id' is the correct prop if ColumnDefinition supports it for non-data columns.
      // Assuming 'field' must be a key of SummaryTableRow for now.
      // To make this work, we'd add synthetic fields to SummaryTableRow or use a different approach for action/select columns.
      // For now, I'll use existing fields and comment out problematic custom renderers.
      // This 'select' column needs a proper 'field' from SummaryTableRow or a different definition.
      field: 'id', // Reverting to 'id' for selectControl, as renderCell doesn't use the 'value'
      header: '', // Header for select can be a Checkbox component if ColumnDefinition allows ReactNode here.
      renderCell: (value: unknown, row: SummaryTableRow) => (
        <Checkbox
          id={`select-row-${row.id}`}
          checked={selectedRows.has(row.id)}
          onCheckedChange={(checked) => handleSelectRow(row.id, checked)}
          aria-label={`Select row ${row.orderId}`}
        />
      ),
      width: '50px',
    },
    { field: 'orderId', header: 'Order ID', isSortable: true },
    {
      field: 'user',
      header: 'User',
      renderCell: (value: unknown, row: SummaryTableRow) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={row.user.avatarUrl} alt={row.user.name} size={AvatarSize.SM} shape={AvatarShape.CIRCULAR} style={{ marginRight: '8px' }} />
          <div>
            <Text variant="body.sm" fontWeight="medium" as="span">{row.user.name}</Text> {/* Ensure outer is not p if inner might be */}
            <Text variant="body.xs" color="gray.500" as="span">{row.user.joinDate}</Text>
          </div>
        </div>
      ),
    },
    { field: 'amount', header: 'Amount', renderCell: (value: unknown, row: SummaryTableRow) => `₹ ${row.amount}`, isSortable: true },
    { field: 'gateway', header: 'Gateway', renderCell: (value: unknown, row: SummaryTableRow) => <Text variant="body.sm" as="span">{row.gateway}</Text> },
    {
      field: 'assignee',
      header: 'Assignee',
      renderCell: (value: unknown, row: SummaryTableRow) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={row.assignee.avatarUrl} alt={row.assignee.name} size={AvatarSize.SM} shape={AvatarShape.CIRCULAR} style={{ marginRight: '8px' }} />
          <Text variant="body.sm" as="span">{row.assignee.name}</Text>
        </div>
      ),
    },
    {
      field: 'progress',
      header: 'Progress',
      renderCell: (value: unknown, row: SummaryTableRow) => (
        <div style={{ width: '100px', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px' }}>
          <div style={{ width: `${row.progress}%`, height: '100%', backgroundColor: '#3b82f6', borderRadius: '4px' }}></div>
        </div>
      ),
    },
    {
      field: 'id', // Reverting to 'id' for actionControls, as renderCell doesn't use the 'value'
      header: 'Actions',
      renderCell: (value: unknown, row: SummaryTableRow) => (
        <div style={{ display: 'flex', gap: '10px' }}>
          <ButtonV2 key={`edit-${row.id}`} subType={ButtonSubTypeV2.ICON_ONLY} leadingIcon={<EditIcon />} aria-label={`Edit ${row.orderId}`} size={ButtonSizeV2.SMALL} />
          <ButtonV2 key={`delete-${row.id}`} subType={ButtonSubTypeV2.ICON_ONLY} leadingIcon={<TrashIcon />} aria-label={`Delete ${row.orderId}`} size={ButtonSizeV2.SMALL} />
          <ButtonV2 key={`more-${row.id}`} subType={ButtonSubTypeV2.ICON_ONLY} leadingIcon={<MoreVerticalIcon />} aria-label={`More options for ${row.orderId}`} size={ButtonSizeV2.SMALL} />
        </div>
      ),
      width: '120px',
    },
  ];

  // The header for the select all checkbox needs to be handled carefully.
  // For now, I'm making the header for the select column an empty string.
  // A proper implementation would involve making ColumnDefinition.header accept ReactNode.
  const headerCheckboxColumn: ColumnDefinition<SummaryTableRow> = {
    field: 'id', // Reverting to 'id', renderCell doesn't use value for this specific checkbox column
    header: '', // Placeholder, ideally a Checkbox component
    renderCell: (value: unknown, row: SummaryTableRow) => (
      <Checkbox
        id={`select-row-${row.id}`}
        checked={selectedRows.has(row.id)}
        onCheckedChange={(checked) => handleSelectRow(row.id, checked)}
        aria-label={`Select row ${row.orderId}`}
      />
    ),
     width: '50px',
  };
  // This is a simplified columns definition for now to avoid 'id'/'cell' issues.
  // The select-all checkbox in header is omitted for simplicity until ColumnDefinition is fully clarified.
  const displayColumns: ColumnDefinition<SummaryTableRow>[] = [
    headerCheckboxColumn,
    ...columns.slice(1) // Use other defined columns
  ];


  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)', marginTop: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <Text variant="heading.md">Summary Table</Text>
          <Text variant="body.sm" color="gray.600">Description for the Table, you can remove this from the properties panel</Text>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ButtonV2 text="Settings" leadingIcon={<SettingsIcon />} buttonType={ButtonTypeV2.SECONDARY} />
          <ButtonV2 text="Export Table" leadingIcon={<DownloadIcon />} buttonType={ButtonTypeV2.SECONDARY} />
        </div>
      </div>
      <DataTable 
        data={sampleTableData as any[]}
        columns={displayColumns as any[]}
        idField="id"
        isStriped
        isHoverable
        pagination={{
          currentPage: 1,
          pageSize: 10,
          totalRows: sampleTableData.length,
          pageSizeOptions: [10, 20, 50],
        }}
      />
    </div>
  );
};


export default TransactionAnalyticsDashboard;
