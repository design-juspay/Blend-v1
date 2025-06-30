import { useState, useEffect } from 'react';
import { ColumnDefinition, SortDirection, FilterType, SearchConfig, ColumnFilter } from '../../../lib/components/DataTable/types';
import DataTable from '../../../lib/components/DataTable/DataTable';
import { Avatar } from '../../../lib/components/Avatar';
import Tag from '../../../lib/components/Tags/Tags';
import { TagColor, TagVariant, TagSize } from '../../../lib/components/Tags/types';
import { Button, ButtonType, ButtonSize } from '../../../lib/main';
import { RefreshCw, Plus, CircleX, Server, Database, Zap } from 'lucide-react';
import { ColumnType, AvatarData, TagData } from '../../../lib/components/DataTable/columnTypes';
import AdvancedFilterComponent, { FilterRule } from './AdvancedFilterComponent';

const DataTableDemo = () => {
    // Demo mode toggle
    const [isServerSideMode, setIsServerSideMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [autoSwitchToApi, setAutoSwitchToApi] = useState(true); 

    // Generate larger dataset for server-side demo
    const generateLargeDataset = (count: number) => {
      const names = [
        'Jesse Leos', 'Jane Smith', 'Robert Johnson', 'Lisa Brown', 'David Miller',
        'Emma Wilson', 'Michael Clark', 'Sarah Davis', 'James Taylor', 'Anna White',
        'John Doe', 'Mary Johnson', 'Chris Wilson', 'Patricia Brown', 'Daniel Garcia',
        'Jennifer Martinez', 'Matthew Anderson', 'Linda Taylor', 'Anthony Thomas', 'Barbara Jackson'
      ];
      
      const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];
      
      return Array.from({ length: count }, (_, index) => {
        const userName = names[index % names.length];
        const userStatus = statuses[index % statuses.length];
        
        return {
          id: index + 1,
          name: {
            label: userName,
            sublabel: [
              'August 2014', 'September 2015', 'March 2016', 'November 2017', 'July 2018',
              'January 2019', 'April 2020', 'June 2021', 'October 2022', 'February 2023',
              'May 2020', 'December 2021', 'March 2022', 'August 2023', 'November 2019'
            ][index % 15],
            imageUrl: `https://randomuser.me/api/portraits/${index % 2 ? 'men' : 'women'}/${index % 70}.jpg`
          } as AvatarData,
          joinDate: [
            'August 2014', 'September 2015', 'March 2016', 'November 2017', 'July 2018',
            'January 2019', 'April 2020', 'June 2021', 'October 2022', 'February 2023',
            'May 2020', 'December 2021', 'March 2022', 'August 2023', 'November 2019'
          ][index % 15],
          number: `${300 + index}`,
          gateway: ['Gateway A', 'Gateway B', 'Gateway C', 'Gateway D', 'Gateway E'][index % 5],
          contact: [
            'Samantha Smith', 'John Doe', 'Emily White', 'Michael Green', 'Sarah Johnson',
            'Peter Brown', 'Lucy Chen', 'Mark Wilson', 'Rachel Lee', 'Tom Anderson',
            'Alice Cooper', 'Bob Dylan', 'Carol King', 'Dave Matthews', 'Eva Green'
          ][index % 15],
          status: {
            text: userStatus,
            color: userStatus === 'Active' ? 'success' : userStatus === 'Inactive' ? 'error' : userStatus === 'Pending' ? 'warning' : 'neutral',
            variant: 'subtle'
          } as TagData,
          email: [
            'jesse@example.com', 'jane@example.com', 'robert@example.com',
            'lisa@example.com', 'david@example.com', 'emma@example.com',
            'michael@example.com', 'sarah@example.com', 'james@example.com',
            'anna@example.com', 'john@example.com', 'mary@example.com'
          ][index % 12],
          role: ['Admin', 'User', 'Manager', 'Editor', 'Viewer', 'Moderator'][index % 6],
          department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'][index % 6]
        };
      });
    };

    // Simulate full dataset (3000 records)
    const [fullDataset] = useState(() => generateLargeDataset(3000));
    
    // Current displayed data (100 records for server-side, 50 for local)
    const [data, setData] = useState(() => 
      isServerSideMode ? generateLargeDataset(100) : generateLargeDataset(50)
    );

    // Server-side state
    const [serverState, setServerState] = useState({
      searchQuery: '',
      filters: [] as FilterRule[],
      currentPage: 1,
      pageSize: 10,
      totalRecords: 3000
    });

    type UserRow = {
      id: number;
      name: AvatarData;
      joinDate: string;
      email: string;
      role: string;
      number: string;
      gateway: string;
      contact: string;
      status: TagData;
      department: string;
    } & Record<string, unknown>;
    
    const columns: ColumnDefinition<UserRow>[] = [
      { 
        field: 'name',
        header: 'Name',
        type: ColumnType.AVATAR,
        renderCell: (value) => {
          const avatarData = value as AvatarData;
          return (
            <div style={{ display: 'flex', width: '100%', gap: '12px', alignItems: 'center' }}>
              <Avatar src={avatarData.imageUrl} alt={avatarData.label} />
              <div>
                <div style={{ fontWeight: 500, fontSize: '14px' }}>{avatarData.label}</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>Joined in {avatarData.sublabel}</div>
              </div>
            </div>
          );
        },
        isSortable: true,
        isFilterable: true,
        filterType: FilterType.TEXT,
        width: '250px'
      },
      { 
        field: 'email',
        header: 'Email',
        type: ColumnType.TEXT,
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.TEXT,
        width: '200px'
      },
      { 
        field: 'role',
        header: 'Role',
        type: ColumnType.SELECT,
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.SELECT,
        filterOptions: [
          { id: 'admin', label: 'Admin', value: 'Admin' },
          { id: 'user', label: 'User', value: 'User' },
          { id: 'manager', label: 'Manager', value: 'Manager' },
          { id: 'editor', label: 'Editor', value: 'Editor' },
          { id: 'viewer', label: 'Viewer', value: 'Viewer' },
          { id: 'moderator', label: 'Moderator', value: 'Moderator' },
        ]
      },
      { 
        field: 'department',
        header: 'Department',
        type: ColumnType.SELECT,
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.SELECT,
        filterOptions: [
          { id: 'engineering', label: 'Engineering', value: 'Engineering' },
          { id: 'marketing', label: 'Marketing', value: 'Marketing' },
          { id: 'sales', label: 'Sales', value: 'Sales' },
          { id: 'hr', label: 'HR', value: 'HR' },
          { id: 'finance', label: 'Finance', value: 'Finance' },
          { id: 'operations', label: 'Operations', value: 'Operations' },
        ]
      },
      { 
        field: 'gateway',
        header: 'Gateway',
        type: ColumnType.SELECT,
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.SELECT,
        filterOptions: [
          { id: 'gateway-a', label: 'Gateway A', value: 'Gateway A' },
          { id: 'gateway-b', label: 'Gateway B', value: 'Gateway B' },
          { id: 'gateway-c', label: 'Gateway C', value: 'Gateway C' },
          { id: 'gateway-d', label: 'Gateway D', value: 'Gateway D' },
          { id: 'gateway-e', label: 'Gateway E', value: 'Gateway E' },
        ]
      },
      {
        field: 'status',
        header: 'Status',
        type: ColumnType.TAG,
        renderCell: (value) => {
          const tagData = value as TagData;
          const getStatusColor = (status: string): TagColor => {
            switch (status) {
              case 'Active':
                return TagColor.SUCCESS;
              case 'Inactive':
                return TagColor.ERROR;
              case 'Pending':
                return TagColor.WARNING;
              case 'Suspended':
                return TagColor.NEUTRAL;
              default:
                return TagColor.NEUTRAL;
            }
          };

          return (
            <Tag
              text={tagData.text}
              variant={TagVariant.SUBTLE}
              color={getStatusColor(tagData.text)}
              size={TagSize.SM}
            />
          );
        },
        isSortable: true,
        isFilterable: true,
        filterType: FilterType.SELECT,
        filterOptions: [
          { id: 'active', label: 'Active', value: 'Active' },
          { id: 'inactive', label: 'Inactive', value: 'Inactive' },
          { id: 'pending', label: 'Pending', value: 'Pending' },
          { id: 'suspended', label: 'Suspended', value: 'Suspended' },
        ]
      },
    ];
    
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortConfig, setSortConfig] = useState({
      field: '',
      direction: SortDirection.NONE
    });

    // Simulate server-side API call
    const fetchServerData = async (searchQuery: string, filters: FilterRule[], page: number, size: number) => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      let filteredData = [...fullDataset];
      
      // Apply server-side search
      if (searchQuery.trim()) {
        filteredData = filteredData.filter(row => 
          Object.values(row).some(value => 
            String(value).toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }
      
       filters.forEach(filter => {
         if (filter.value && filter.value.trim()) {
           filteredData = filteredData.filter(row => {
             let cellValue = (row as Record<string, unknown>)[filter.field as string];
             
             if (filter.field === 'name' && cellValue && typeof cellValue === 'object') {
               cellValue = (cellValue as AvatarData).label;
             } else if (filter.field === 'status' && cellValue && typeof cellValue === 'object') {
               cellValue = (cellValue as TagData).text;
             }
             
             const cellValueStr = String(cellValue).toLowerCase();
             const filterValueStr = filter.value.toLowerCase();
             
             switch (filter.operator) {
               case 'equals':
                 return cellValueStr === filterValueStr;
               case 'contains':
                 return cellValueStr.includes(filterValueStr);
               case 'startsWith':
                 return cellValueStr.startsWith(filterValueStr);
               case 'endsWith':
                 return cellValueStr.endsWith(filterValueStr);
               default:
                 return cellValueStr.includes(filterValueStr);
             }
           });
         }
       });
      
      // Apply server-side pagination
      const startIndex = (page - 1) * size;
      const paginatedData = filteredData.slice(startIndex, startIndex + size);
      
      setData(paginatedData);
      setServerState(prev => ({
        ...prev,
        searchQuery,
        filters,
        currentPage: page,
        pageSize: size,
        totalRecords: filteredData.length
      }));
      
      setIsLoading(false);
      
      console.log('🚀 Server API Call:', {
        searchQuery,
        filters,
        page,
        size,
        totalResults: filteredData.length,
        returnedRecords: paginatedData.length
      });
    };

    const autoSwitchToServerMode = () => {
      if (!isServerSideMode && autoSwitchToApi) {
        console.log('🔄 Auto-switching to server-side mode for advanced filtering...');
        setIsServerSideMode(true);
        return true;
      }
      return false;
    };

    // Handle search change (both local and server-side)
    const handleSearchChange = (searchConfig: SearchConfig) => {
      console.log('🔍 Search changed:', searchConfig);
      
      if (isServerSideMode) {
        // Server-side: Make API call
        fetchServerData(searchConfig.query, serverState.filters, 1, pageSize);
      } else {
        // Local: Let DataTable handle it internally
        console.log('Local search will be handled by DataTable component');
      }
    };

    // Handle local column filter change 
    const handleFilterChange = (filters: ColumnFilter[]) => {
      console.log('🔧 Local Column Filters changed:', filters);
      // Local filters are handled automatically by the DataTable component
    };

    // Handle advanced filter change (both local and server-side)
    const handleAdvancedFiltersChange = (filters: unknown[]) => {
      const typedFilters = filters as FilterRule[];
      console.log('🔧 Advanced Filters changed:', typedFilters);
      
      // Auto-switch to server-side if filters are applied and auto-switch is enabled
      const switched = autoSwitchToServerMode();
      
      if (isServerSideMode || switched) {
        // Server-side: Make API call (either already in server mode or just switched)
        fetchServerData(serverState.searchQuery, typedFilters, 1, pageSize);
      } else {
        // Local: Just update the server state for consistency
        setServerState(prev => ({ ...prev, filters: typedFilters }));
        console.log('Local advanced filtering will be handled by DataTable component');
      }
    };

    // Handle pagination change (server-side only)
    const handlePageChange = (page: number) => {
      console.log('🔄 Page change requested:', { page, isServerSideMode });
      setCurrentPage(page);
      
      if (isServerSideMode) {
        // For server-side mode, fetch new data for the requested page
        console.log('📡 Fetching server data for page:', page);
        fetchServerData(serverState.searchQuery, serverState.filters, page, pageSize);
      } else {
        console.log('💻 Local pagination - no server call needed');
      }
    };

    const handlePageSizeChange = (size: number) => {
      console.log('🔄 Page size change requested:', { size, isServerSideMode });
      setPageSize(size);
      setCurrentPage(1);
      
      if (isServerSideMode) {
        // For server-side mode, fetch new data with new page size
        console.log('📡 Fetching server data with new page size:', size);
        fetchServerData(serverState.searchQuery, serverState.filters, 1, size);
      } else {
        console.log('💻 Local pagination - no server call needed');
      }
    };

    // Toggle between local and server-side modes
    const toggleMode = () => {
      const newMode = !isServerSideMode;
      console.log('🔀 Switching mode:', { from: isServerSideMode ? 'server' : 'local', to: newMode ? 'server' : 'local' });
      setIsServerSideMode(newMode);
      
      // Reset pagination state when switching modes
      setCurrentPage(1);
      
      if (newMode) {
        // Switching to server-side: Load initial server data
        console.log('📡 Loading initial server data...');
        fetchServerData('', [], 1, pageSize);
      } else {
        // Switching to local: Load smaller local dataset
        console.log('💻 Loading local dataset...');
        setData(generateLargeDataset(50));
        // Reset server state when switching to local
        setServerState({
          searchQuery: '',
          filters: [],
          currentPage: 1,
          pageSize: 10,
          totalRecords: 3000
        });
      }
    };

    // Toggle auto-switch feature
    const toggleAutoSwitch = () => {
      setAutoSwitchToApi(!autoSwitchToApi);
      console.log('🔧 Auto-switch to API:', !autoSwitchToApi ? 'enabled' : 'disabled');
    };

    // Initialize server data on mount if in server mode
    useEffect(() => {
      if (isServerSideMode) {
        fetchServerData('', [], 1, pageSize);
      }
    }, []);

    // Handle row save
    const handleRowSave = (rowId: unknown, updatedRow: Record<string, unknown>) => {
      setData(prevData => 
        prevData.map(row => 
          row.id === rowId ? { ...row, ...updatedRow } : row
        )
      );
      console.log('Row saved:', { rowId, updatedRow });
    };

    // Handle row cancel
    const handleRowCancel = (rowId: unknown) => {
      console.log('Edit cancelled for row:', rowId);
    };

    // Handle row expansion
    const handleRowExpansionChange = (rowId: unknown, isExpanded: boolean, rowData: Record<string, unknown>) => {
      const userData = rowData as UserRow;
      console.log('Row expansion changed:', { rowId, isExpanded, userData });
    };

    const isRowExpandable = (row: Record<string, unknown>) => {
      const userRow = row as UserRow;
      const statusText = (userRow.status as TagData).text;
      return statusText === 'Active' || userRow.role === 'Admin';
    };

    const renderExpandedRow = ({ row, index, toggleExpansion }: {
      row: Record<string, unknown>;
      index: number;
      isExpanded: boolean;
      toggleExpansion: () => void;
    }) => {
      const userRow = row as UserRow;
      
      const getActivityData = (user: UserRow) => {
        const statusText = (user.status as TagData).text;
        const activities = [
          `Last login: ${statusText === 'Active' ? '2 hours ago' : '1 week ago'}`,
          `Profile updated: ${user.role === 'Admin' ? '1 day ago' : '3 days ago'}`,
          `Password changed: ${user.gateway === 'Gateway A' ? '1 week ago' : '2 weeks ago'}`,
          `Role assigned: ${user.joinDate}`
        ];
        return activities;
      };

      const getSystemMetrics = (user: UserRow) => {
        return {
          loginCount: user.id * 12 + Math.floor(Math.random() * 50),
          lastIP: `192.168.1.${user.id % 255}`,
          sessionDuration: `${Math.floor(user.id / 10) + 1}h ${user.id % 60}m`,
          dataUsage: `${(user.id * 0.5).toFixed(1)} GB`
        };
      };

      const activities = getActivityData(userRow);
      const metrics = getSystemMetrics(userRow);

      return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: (userRow.status as TagData).text === 'Active' ? '#f0f9ff' : '#fef2f2',
          borderRadius: '8px',
          margin: '8px 0',
          border: `1px solid ${(userRow.status as TagData).text === 'Active' ? '#bfdbfe' : '#fecaca'}`
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h4 style={{ 
              margin: '0', 
              fontSize: '18px', 
              fontWeight: 600,
              color: '#1f2937'
            }}>
              Detailed Profile: {(userRow.name as AvatarData).label} (Row #{index + 1})
            </h4>
            <button
              onClick={toggleExpansion}
              style={{
                padding: '6px 12px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Collapse
            </button>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px',
            marginBottom: '20px'
          }}>
            <div style={{
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #e5e7eb'
            }}>
              <strong style={{ color: '#6b7280', fontSize: '12px', textTransform: 'uppercase' }}>
                User Information
              </strong>
              <div style={{ fontSize: '14px', marginTop: '8px' }}>
                <div><strong>ID:</strong> #{userRow.id.toString().padStart(4, '0')}</div>
                <div><strong>Email:</strong> {userRow.email}</div>
                <div><strong>Contact:</strong> {userRow.contact}</div>
                <div><strong>Department:</strong> {userRow.department}</div>
                <div><strong>Status:</strong> 
                  <span style={{ 
                    color: (userRow.status as TagData).text === 'Active' ? '#059669' : '#dc2626',
                    fontWeight: 'bold',
                    marginLeft: '4px'
                  }}>
                    {(userRow.status as TagData).text}
                  </span>
                </div>
              </div>
            </div>
            
            <div style={{
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #e5e7eb'
            }}>
              <strong style={{ color: '#6b7280', fontSize: '12px', textTransform: 'uppercase' }}>
                System Access
              </strong>
              <div style={{ fontSize: '14px', marginTop: '8px' }}>
                <div><strong>Role:</strong> {userRow.role}</div>
                <div><strong>Gateway:</strong> {userRow.gateway}</div>
                <div><strong>User Number:</strong> {userRow.number}</div>
                <div><strong>Member Since:</strong> {userRow.joinDate}</div>
              </div>
            </div>

            <div style={{
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '6px',
              border: '1px solid #e5e7eb'
            }}>
              <strong style={{ color: '#6b7280', fontSize: '12px', textTransform: 'uppercase' }}>
                Usage Metrics
              </strong>
              <div style={{ fontSize: '14px', marginTop: '8px' }}>
                <div><strong>Login Count:</strong> {metrics.loginCount}</div>
                <div><strong>Last IP:</strong> {metrics.lastIP}</div>
                <div><strong>Session Duration:</strong> {metrics.sessionDuration}</div>
                <div><strong>Data Usage:</strong> {metrics.dataUsage}</div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            padding: '16px', 
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e5e7eb'
          }}>
            <strong style={{ color: '#6b7280', fontSize: '12px', textTransform: 'uppercase' }}>
              Recent Activity Timeline
            </strong>
            <div style={{ fontSize: '14px', marginTop: '12px' }}>
              {activities.map((activity, idx) => (
                <div key={idx} style={{ 
                  padding: '8px 0', 
                  borderBottom: idx < activities.length - 1 ? '1px solid #f3f4f6' : 'none',
                  color: '#4b5563'
                }}>
                  • {activity}
                </div>
              ))}
            </div>
          </div>

          {userRow.role === 'Admin' && (
            <div style={{ 
              marginTop: '16px',
              padding: '12px', 
              backgroundColor: '#fef3c7',
              borderRadius: '6px',
              border: '1px solid #f59e0b'
            }}>
              <strong style={{ color: '#92400e', fontSize: '12px', textTransform: 'uppercase' }}>
                Admin Privileges
              </strong>
              <div style={{ fontSize: '14px', marginTop: '8px', color: '#92400e' }}>
                This user has administrative access to system settings, user management, and security configurations.
              </div>
            </div>
          )}
        </div>
      );
    };

    const handleRefreshData = () => {
      if (isServerSideMode) {
        fetchServerData(serverState.searchQuery, serverState.filters, currentPage, pageSize);
      } else {
        setData(generateLargeDataset(50));
      }
      console.log('Data refreshed');
    };
  
    const handleAddUser = () => {
      console.log('Adding new user...');
    };

    // Handle row click
    const handleRowClick = (row: Record<string, unknown>, index: number) => {
      const userData = row as UserRow;
      const userName = (userData.name as AvatarData).label;
      console.log(`🖱️ Row clicked:`, { 
        user: userName, 
        email: userData.email, 
        role: userData.role,
        index 
      });
      
      // Example: Show an alert or navigate to user profile
      alert(`Clicked on user: ${userName}\nEmail: ${userData.email}\nRole: ${userData.role}\n\nYou can implement navigation or other actions here.`);
      
      // Example: You could navigate to a user profile page
      // navigate(`/users/${userData.id}`);
    };

    return (
      <div>
        {/* Mode Toggle and Controls */}
        <div style={{ 
          marginBottom: '20px', 
          padding: '16px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
                Demo Mode: {isServerSideMode ? 'Server-Side' : 'Local'} Search & Filtering
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
                {isServerSideMode 
                  ? `🚀 Server-side mode: Simulating 3,000 records with API calls for search/filter. Currently showing ${data.length} records.`
                  : `💻 Local mode: All operations handled client-side with ${data.length} records. Both column filters and advanced filters work locally.`
                }
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                buttonType={autoSwitchToApi ? ButtonType.PRIMARY : ButtonType.SECONDARY}
                leadingIcon={Zap}
                size={ButtonSize.SMALL}
                onClick={toggleAutoSwitch}
                disabled={isServerSideMode}
              >
                Auto API Switch: {autoSwitchToApi ? 'ON' : 'OFF'}
              </Button>
              <Button
                buttonType={isServerSideMode ? ButtonType.PRIMARY : ButtonType.SECONDARY}
                leadingIcon={isServerSideMode ? Server : Database}
                size={ButtonSize.SMALL}
                onClick={toggleMode}
                disabled={isLoading}
              >
                Switch to {isServerSideMode ? 'Local' : 'Server-Side'}
              </Button>
            </div>
          </div>
          
          {/* Auto-switch explanation */}
          {!isServerSideMode && (
            <div style={{ 
              marginTop: '12px', 
              padding: '12px', 
              backgroundColor: autoSwitchToApi ? '#e0f2fe' : '#fef3c7', 
              borderRadius: '6px',
              fontSize: '12px'
            }}>
              <strong>🔧 Auto API Switch:</strong> {autoSwitchToApi 
                ? 'When you use Advanced Filters, the table will automatically switch to server-side mode to handle API calls.'
                : 'Advanced Filters will work locally only. Toggle this to enable automatic API switching.'
              }
            </div>
          )}
          
          {isServerSideMode && (
            <div style={{ 
              marginTop: '12px', 
              padding: '12px', 
              backgroundColor: '#e0f2fe', 
              borderRadius: '6px',
              fontSize: '12px'
            }}>
              <strong>Server State:</strong> Query: "{serverState.searchQuery || 'none'}", 
              Filters: {serverState.filters.length}, 
              Page: {serverState.currentPage}, 
              Total: {serverState.totalRecords} records
              {isLoading && <span style={{ color: '#0369a1', marginLeft: '8px' }}>⏳ Loading...</span>}
            </div>
          )}
        </div>

        <DataTable
          data={data}
          columns={columns as unknown as ColumnDefinition<Record<string, unknown>>[]}
          idField="id"
          title="User Management"
          description={`Complete overview of system users with ${isServerSideMode ? 'server-side' : 'local'} search, filtering, inline editing, expandable rows, and clickable rows. Try clicking on any row, using column header filters, and advanced filters!`}
          isHoverable
          enableSearch
          searchPlaceholder={`Search users... ${isServerSideMode ? '(server-side)' : '(local)'}`}
          enableFiltering={true}
          enableAdvancedFilter
          advancedFilterComponent={AdvancedFilterComponent}
          advancedFilters={serverState.filters}
          enableInlineEdit
          enableRowExpansion
          renderExpandedRow={renderExpandedRow}
          isRowExpandable={isRowExpandable}
          serverSideSearch={isServerSideMode}
          serverSideFiltering={isServerSideMode}
          serverSidePagination={isServerSideMode}
          isLoading={isLoading}
          pagination={{
            currentPage,
            pageSize,
            totalRows: isServerSideMode ? serverState.totalRecords : data.length,
            pageSizeOptions: [5, 10, 25, 50],
          }}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          defaultSort={sortConfig}
          onSortChange={(newSortConfig) => setSortConfig(newSortConfig)}
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          onAdvancedFiltersChange={handleAdvancedFiltersChange}
          onRowSave={handleRowSave}
          onRowCancel={handleRowCancel}
          onRowExpansionChange={handleRowExpansionChange}
          onRowClick={handleRowClick}
          headerSlot1={
            <Button
              buttonType={ButtonType.SECONDARY}
              leadingIcon={RefreshCw}
              size={ButtonSize.SMALL}
              onClick={handleRefreshData}
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Refresh'}
            </Button>
          }
          headerSlot2={
            <Button
              buttonType={ButtonType.DANGER}
              leadingIcon={CircleX}
              size={ButtonSize.SMALL}
              onClick={handleRefreshData}
            >
              Action
            </Button>
          }
          headerSlot3={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                buttonType={ButtonType.PRIMARY}
                leadingIcon={Plus}
                size={ButtonSize.SMALL}
                onClick={handleAddUser}
              >
                Add User
              </Button>
            </div>
          }
        />
      </div>
    );
  };

export default DataTableDemo;