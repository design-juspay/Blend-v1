import { useState, useEffect } from 'react';
import { ColumnDefinition, SortDirection, SearchConfig, ColumnFilter, ColumnType, AvatarColumnProps, TagColumnProps } from '../../../lib/components/DataTable/types';
import DataTable from '../../../lib/components/DataTable/DataTable';
import { Avatar } from '../../../lib/components/Avatar';
import Tag from '../../../lib/components/Tags/Tags';
import { TagColor, TagVariant, TagSize } from '../../../lib/components/Tags/types';
import { Button, ButtonType, ButtonSize } from '../../../lib/main';
import { RefreshCw, CircleX, Server, Database, Zap } from 'lucide-react';
import AdvancedFilterComponent, { FilterRule } from './AdvancedFilterComponent';

const DataTableDemo = () => {
    // Demo mode toggle
    const [isServerSideMode, setIsServerSideMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [autoSwitchToApi, setAutoSwitchToApi] = useState(true); 
    const [columnFreeze, setColumnFreeze] = useState(2);
    const [enableRowSelection, setEnableRowSelection] = useState(true);
    const [enableColumnManager, setEnableColumnManager] = useState(true);
    const [enableRowExpansion] = useState(true); // Always enabled for demo 

    // Define strict user row type matching column requirements
    type UserRow = {
      id: number;
      name: AvatarColumnProps;
      joinDate: string;
      email: string;
      role: string;
      number: string;
      gateway: string;
      contact: string;
      status: TagColumnProps;
      department: string;
      permissions: {
        values: string[];
        labels: string[];
      };
      revenue: string;
      growthRate: string;
    };

    // Generate larger dataset for server-side demo
    const generateLargeDataset = (count: number): UserRow[] => {
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
          } as AvatarColumnProps,
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
            variant: 'subtle' as const,
            color: userStatus === 'Active' ? 'success' as const : 
                   userStatus === 'Inactive' ? 'error' as const : 
                   userStatus === 'Pending' ? 'warning' as const : 'neutral' as const,
            size: 'sm' as const
          } as TagColumnProps,
          email: [
            'jesse@example.com', 'jane@example.com', 'robert@example.com',
            'lisa@example.com', 'david@example.com', 'emma@example.com',
            'michael@example.com', 'sarah@example.com', 'james@example.com',
            'anna@example.com', 'john@example.com', 'mary@example.com'
          ][index % 12],
          role: ['Admin', 'User', 'Manager', 'Editor', 'Viewer', 'Moderator'][index % 6],
          department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'][index % 6],
          permissions: {
            values: [
              ['read', 'write'],
              ['read', 'write', 'delete'],
              ['read'],
              ['read', 'write', 'admin'],
              ['read', 'write'],
              ['read'],
              ['read', 'write', 'delete', 'admin'],
              ['read', 'write'],
              ['read', 'write', 'delete'],
              ['read'],
              ['read', 'write'],
              ['read', 'write', 'admin']
            ][index % 12],
            labels: [
              ['Read', 'Write'],
              ['Read', 'Write', 'Delete'],
              ['Read'],
              ['Read', 'Write', 'Admin'],
              ['Read', 'Write'],
              ['Read'],
              ['Read', 'Write', 'Delete', 'Admin'],
              ['Read', 'Write'],
              ['Read', 'Write', 'Delete'],
              ['Read'],
              ['Read', 'Write'],
              ['Read', 'Write', 'Admin']
            ][index % 12]
          },
          revenue: [
            '$12,500.00', '€8,750.50', '£15,200.75', '$22,100.25', '₹350,000.00',
            '$9,800.99', '€14,600.33', '£7,450.80', '$31,200.00', '₹275,500.75',
            '$18,900.15', '€11,300.90', '£25,750.60', '$6,850.45', '₹425,000.25'
          ][index % 15],
          growthRate: [
            '12.5%', '8.7%', '15.2%', '22.1%', '5.8%',
            '9.3%', '14.6%', '7.4%', '31.2%', '18.9%',
            '11.3%', '25.7%', '6.8%', '19.5%', '13.4%'
          ][index % 15]
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
    
    // Strict column definitions using the new typing system
    const columns: ColumnDefinition<UserRow>[] = [
      { 
        field: 'name',
        header: 'User Profile',
        headerSubtext: 'Name & Join Date',
        type: ColumnType.AVATAR,
        renderCell: (value: AvatarColumnProps) => (
          <div style={{ display: 'flex', width: '100%', gap: '12px', alignItems: 'center' }}>
            <Avatar src={value.imageUrl} alt={value.label} />
            <div>
              <div style={{ fontWeight: 500, fontSize: '14px' }}>{value.label}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Joined in {value.sublabel}</div>
            </div>
          </div>
        ),
        isSortable: true,
        minWidth: '220px',
        maxWidth: '320px'
      },
      { 
        field: 'email',
        header: 'Contact Info',
        headerSubtext: 'Email Address',
        type: ColumnType.TEXT,
        isSortable: true,
        isEditable: true,
        minWidth: '180px',
        maxWidth: '250px'
      },
      { 
        field: 'role',
        header: 'Access Level',
        headerSubtext: 'User Role & Permissions',
        type: ColumnType.SELECT,
        isSortable: true,
        isEditable: true,
        minWidth: '120px',
        maxWidth: '160px'
      },
      { 
        field: 'department',
        header: 'Department',
        type: ColumnType.MULTISELECT,
        isSortable: true,
        isEditable: true,
        minWidth: '130px',
        maxWidth: '180px'
      },
      { 
        field: 'gateway',
        header: 'Gateway',
        type: ColumnType.SELECT,
        isSortable: true,
        isEditable: true,
        minWidth: '120px',
        maxWidth: '160px'
      },
      {
        field: 'status',
        header: 'Account Status',
        headerSubtext: 'Current State',
        type: ColumnType.TAG,
        renderCell: (value: TagColumnProps) => (
          <Tag
            text={value.text}
            variant={TagVariant.SUBTLE}
            color={value.color === 'success' ? TagColor.SUCCESS :
                   value.color === 'error' ? TagColor.ERROR :
                   value.color === 'warning' ? TagColor.WARNING :
                   TagColor.NEUTRAL}
            size={TagSize.SM}
          />
        ),
        isSortable: true,
        minWidth: '100px',
        maxWidth: '140px'
      },
      {
        field: 'permissions',
        header: 'User Permissions',
        headerSubtext: 'Access Rights',
        type: ColumnType.REACT_ELEMENT,
        isSortable: false, // Required for REACT_ELEMENT type
        renderCell: (value: unknown) => {
          const permissionsData = value as { values: string[]; labels: string[] };
          const getPermissionColor = (permission: string): TagColor => {
            switch (permission.toLowerCase()) {
              case 'admin':
                return TagColor.ERROR;
              case 'write':
                return TagColor.WARNING;
              case 'delete':
                return TagColor.ERROR;
              case 'read':
                return TagColor.SUCCESS;
              default:
                return TagColor.NEUTRAL;
            }
          };

          return (
            <div style={{ 
              display: 'flex', 
              flexWrap: 'nowrap', 
              gap: '4px',
              overflow: 'auto',
              whiteSpace: 'nowrap',
              minWidth: '200px',
              maxWidth: '100%',
              scrollbarWidth: 'thin',
              scrollBehavior: 'smooth'
            }}>
              {permissionsData.values.map((permission, index) => (
                <Tag
                  key={index}
                  text={permissionsData.labels?.[index] || permission}
                  variant={TagVariant.SUBTLE}
                  color={getPermissionColor(permission)}
                  size={TagSize.SM}
                />
              ))}
            </div>
          );
        },

        minWidth: '200px',
        maxWidth: '350px'
      },
      { 
        field: 'revenue',
        header: 'Revenue',
        headerSubtext: 'Monthly Revenue',
        type: ColumnType.NUMBER,
        isSortable: true,
        isEditable: true,
        minWidth: '120px',
        maxWidth: '160px'
      },
      { 
        field: 'growthRate',
        header: 'Growth Rate',
        headerSubtext: 'Monthly Growth %',
        type: ColumnType.NUMBER,
        isSortable: true,
        isEditable: true,
        minWidth: '120px',
        maxWidth: '160px'
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
               cellValue = (cellValue as AvatarColumnProps).label;
             } else if (filter.field === 'status' && cellValue && typeof cellValue === 'object') {
               cellValue = (cellValue as TagColumnProps).text;
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
      const statusText = (userRow.status as TagColumnProps).text;
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
        const statusText = (user.status as TagColumnProps).text;
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
          backgroundColor: (userRow.status as TagColumnProps).text === 'Active' ? '#f0f9ff' : '#fef2f2',
          borderRadius: '8px',
          margin: '8px 0',
          border: `1px solid ${(userRow.status as TagColumnProps).text === 'Active' ? '#bfdbfe' : '#fecaca'}`
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
              Detailed Profile: {(userRow.name as AvatarColumnProps).label} (Row #{index + 1})
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
                    color: (userRow.status as TagColumnProps).text === 'Active' ? '#059669' : '#dc2626',
                    fontWeight: 'bold',
                    marginLeft: '4px'
                  }}>
                    {(userRow.status as TagColumnProps).text}
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

    /**
     * ✨ HOW TO USE getRowStyle - COMPREHENSIVE EXAMPLES ✨
     * 
     * The getRowStyle function allows you to apply dynamic styling to table rows
     * based on any condition or data value. Here are common patterns:
     * 
     * 1. STATUS-BASED STYLING (Priority approach):
     *    - Check critical status first (e.g., suspended, error, failed)
     *    - Then check important status (e.g., admin, premium, vip)
     *    - Finally check general conditions (e.g., new, pending)
     * 
     * 2. NUMERIC VALUE CONDITIONS:
     *    - if (userData.salary > 100000) return { backgroundColor: '#f0fdf4' };
     *    - if (userData.score < 50) return { backgroundColor: '#fef2f2' };
     *    - if (userData.age >= 65) return { backgroundColor: '#fef3c7' };
     * 
     * 3. DATE-BASED CONDITIONS:
     *    - const joinDate = new Date(userData.joinDate);
     *    - const monthsAgo = (Date.now() - joinDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
     *    - if (monthsAgo < 3) return { backgroundColor: '#f0fdf4' }; // New users
     * 
     * 4. ARRAY/LIST CONDITIONS:
     *    - if (userData.permissions.includes('admin')) return { backgroundColor: '#f0f9ff' };
     *    - if (userData.tags.length > 5) return { backgroundColor: '#fef3c7' };
     * 
     * 5. MULTIPLE FIELD CONDITIONS:
     *    - if (userData.role === 'Manager' && userData.department === 'Sales') 
     *        return { backgroundColor: '#f3e8ff' };
     * 
     * 6. STYLING OPTIONS YOU CAN APPLY:
     *    - backgroundColor: '#fef2f2' (row background color)
     *    - borderLeft: '4px solid #dc2626' (left border for emphasis)
     *    - color: '#7f1d1d' (text color)
     *    - fontWeight: '500' (text weight)
     *    - boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' (subtle shadow)
     *    - opacity: '0.7' (transparency)
     *    - textDecoration: 'line-through' (strikethrough for disabled items)
     * 
     * 7. HOVER BEHAVIOR:
     *    - Hover effects only apply to rows WITHOUT custom background colors
     *    - Rows with custom background colors maintain their color on hover
     *    - Default rows (no custom styling) show hover effects normally
     *    - This preserves the visual intention of your custom colors
     * 
     * 8. PERFORMANCE TIP:
     *    - Return early for high-priority conditions (like critical errors)
     *    - Use priority-based approach instead of complex nested conditions
     */

    // Example: How to apply row colors based on data conditions (delta values)
    // Users can implement their own logic here based on any row data
    const getRowStyle = (row: Record<string, unknown>, index: number): React.CSSProperties => {
      const userData = row as UserRow;
      const statusText = (userData.status as TagColumnProps).text;
      
      // Priority 1: Critical status - Suspended users (highest priority)
      if (statusText === 'Suspended') {
        return {
          backgroundColor: '#fef2f2', // Light red background
          borderLeft: '4px solid #dc2626', // Red left border for emphasis
          color: '#7f1d1d', // Darker red text for better contrast
        };
      }
      
      // Priority 2: Administrative roles - Admin users  
      if (userData.role === 'Admin') {
        return {
          backgroundColor: '#f0f9ff', // Light blue background
          borderLeft: '4px solid #2563eb', // Blue left border
          fontWeight: '500', // Slightly bolder text for admins
        };
      }
      
      // Priority 3: Recently joined users - New members (2023+)
      const joinYear = parseInt(userData.joinDate.split(' ')[1] || '2020');
      if (joinYear >= 2023) {
        return {
          backgroundColor: '#f0fdf4', // Light green background
          borderLeft: '4px solid #16a34a', // Green left border
          // Could add: boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' for subtle elevation
        };
      }
      
      // Priority 4: Alternating row colors for better readability
      if (index % 2 === 0) {
        return {
          backgroundColor: '#fafafa', // Very light gray for even rows
        };
      }
      
      // Default: No special styling
      return {};
    };

    // Handle row click
    const handleRowClick = (row: Record<string, unknown>, index: number) => {
      const userData = row as UserRow;
      const userName = (userData.name as AvatarColumnProps).label;
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
                <span style={{ marginLeft: '8px' }}>
                  {columnFreeze > 0 ? (
                    <>📌 Currently freezing the first {columnFreeze} data column{columnFreeze !== 1 ? 's' : ''} + checkbox/expansion columns.</>
                  ) : (
                    <>🔄 All columns are scrollable (no columns frozen).</>
                  )}
                </span>
                <span style={{ marginLeft: '8px' }}>
                  🏷️ Search functionality available only in dropdown menus for select/multiselect/tag columns like skills, roles, and status.
                </span>
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label htmlFor="column-freeze">Freeze Columns:</label>
                  <select
                    id="column-freeze"
                    value={columnFreeze}
                    onChange={(e) => setColumnFreeze(parseInt(e.target.value))}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid #d1d5db',
                      fontSize: '14px'
                    }}
                  >
                    <option value={0}>None</option>
                    <option value={1}>First 1</option>
                    <option value={2}>First 2</option>
                    <option value={3}>First 3</option>
                    <option value={4}>First 4</option>
                    <option value={5}>First 5</option>
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label>
                    <input
                      type="checkbox"
                      checked={enableRowSelection}
                      onChange={(e) => setEnableRowSelection(e.target.checked)}
                      style={{ marginRight: '4px' }}
                    />
                    Row Selection
                  </label>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <label>
                    <input
                      type="checkbox"
                      checked={enableColumnManager}
                      onChange={(e) => setEnableColumnManager(e.target.checked)}
                      style={{ marginRight: '4px' }}
                    />
                    Column Manager
                  </label>
                </div>
              </div>
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
          
          {/* Column freeze explanation */}
          <div style={{ 
            marginTop: '12px', 
            padding: '12px', 
            backgroundColor: '#f0f9ff', 
            borderRadius: '6px',
            fontSize: '12px'
          }}>
            <strong>📌 Column Freeze:</strong> Use the dropdown above to freeze the first N data columns. 
            When set to 0 (None), ALL columns scroll including checkbox/expansion columns. 
            When set to 1+, the checkbox/expansion columns become sticky along with the first N data columns. 
            Try changing between "None" and "First 2" then scroll horizontally to see the difference!
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
          description={`Complete overview of system users with ${isServerSideMode ? 'server-side' : 'local'} search, filtering, inline editing, expandable rows, clickable rows, and dynamic row styling. 🎛️ NEW SYSTEM COLUMN CONTROLS: Toggle Row Selection checkbox column and Column Manager dropdown on/off using the controls above! Column freezing ${columnFreeze > 0 ? `(currently freezing ${columnFreeze} data column${columnFreeze !== 1 ? 's' : ''} + ${enableRowSelection ? 'checkbox' : 'no checkbox'}${enableRowExpansion ? ' + expansion' : ''}${enableColumnManager ? ' + manager' : ''} columns)` : '(currently all columns scrollable)'} with improved border styling - only the rightmost frozen column shows a border separator! Features smart filtering based on column types: Avatar/Text/Number columns show only sorting, Select/Multiselect/Tag columns get dropdown filtering with search for menu items. ⚙️ FORMATTING TOGGLE: Click the Settings icon to toggle between formatted numbers (with currency symbols $, €, £, ₹ and percentage % symbols) and raw numbers (clean numeric values only). This affects both the table view AND CSV exports! 🔧 AUTO FILTER OPTIONS: All filter options are now automatically extracted from data with smart deduplication! Department is MULTISELECT - select multiple departments to filter! Role & Gateway are SELECT - choose one option to filter! 🎨 Smart Row Styling: Red = Suspended users (priority 1), Blue = Admin users (priority 2), Green = Recently joined 2023+ (priority 3), Light gray = Even rows (priority 4). Colors apply to entire row including frozen columns! ✨ Enhanced Features: Improved column padding (16px), better z-index layering for frozen columns, smart hover behavior, enhanced empty state, and robust data handling. Try toggling system columns on/off, changing column freeze settings, clicking the Settings icon for number formatting, selecting filters, scrolling horizontally to see improved frozen column borders, clicking rows, and using advanced filters!`}
          isHoverable
          enableSearch
          searchPlaceholder={`Search users... ${isServerSideMode ? '(server-side)' : '(local)'}`}
          enableFiltering={true}
          enableAdvancedFilter
          advancedFilterComponent={AdvancedFilterComponent}
          advancedFilters={serverState.filters}
          columnFreeze={columnFreeze}
          enableInlineEdit
          enableRowExpansion
          enableRowSelection={enableRowSelection}
          enableColumnManager={enableColumnManager}
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
          getRowStyle={getRowStyle}
        />
      </div>
    );
  };

export default DataTableDemo;