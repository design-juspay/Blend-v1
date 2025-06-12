import { useState } from 'react';
import { ColumnDefinition, SortDirection, FilterType, SearchConfig, ColumnFilter } from '../../../lib/components/DataTable/types';
import DataTable from '../../../lib/components/DataTable/DataTable';
import { Avatar } from '../../../lib/components/Avatar';
import Tag from '../../../lib/components/Tags/Tags';
import { TagColor, TagVariant, TagSize } from '../../../lib/components/Tags/types';
import  {Button, ButtonType, ButtonSize } from '../../../lib/main';
import { RefreshCw, Plus, CircleX } from 'lucide-react';


const DataTableDemo = () => {
    const [data, setData] = useState(() => Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: [
        'Jesse Leos', 'Jane Smith', 'Robert Johnson', 'Lisa Brown', 'David Miller',
        'Emma Wilson', 'Michael Clark', 'Sarah Davis', 'James Taylor', 'Anna White'
      ][index % 10],
      joinDate: [
        'August 2014', 'September 2015', 'March 2016', 'November 2017', 'July 2018',
        'January 2019', 'April 2020', 'June 2021', 'October 2022', 'February 2023'
      ][index % 10],
      number: `${300 + index}`,
      gateway: ['Gateway A', 'Gateway B', 'Gateway C'][index % 3],
      contact: [
        'Samantha Smith', 'John Doe', 'Emily White', 'Michael Green', 'Sarah Johnson',
        'Peter Brown', 'Lucy Chen', 'Mark Wilson', 'Rachel Lee', 'Tom Anderson'
      ][index % 10],
      status: index % 3 === 0 ? 'Active' : index % 3 === 1 ? 'Inactive' : 'Pending',
      email: [
        'jesse@example.com', 'jane@example.com', 'robert@example.com',
        'lisa@example.com', 'david@example.com', 'emma@example.com',
        'michael@example.com', 'sarah@example.com', 'james@example.com',
        'anna@example.com'
      ][index % 10],
      role: ['Admin', 'User', 'Manager', 'Editor', 'Viewer'][index % 5]
    })));

    type UserRow = {
      id: number;
      name: string;
      joinDate: string;
      email: string;
      role: string;
      number: string;
      gateway: string;
      contact: string;
      status: 'Active' | 'Inactive' | 'Pending';
    } & Record<string, unknown>;
    
  
    const columns: ColumnDefinition<UserRow>[] = [
      { 
        field: 'name',
        header: 'Name',
        renderCell: (_value, row) => (
          <div style={{ display: 'flex', width: '100%', gap: '12px', alignItems: 'center' }}>
            <Avatar src={`https://randomuser.me/api/portraits/${row.id % 2 ? 'men' : 'women'}/${row.id % 70}.jpg`} />
            <div>
              <div style={{ fontWeight: 500, fontSize: '14px' }}>{row.name}</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Joined in {row.joinDate}</div>
            </div>
          </div>
        ),
        isSortable: true,
        isFilterable: true,
        filterType: FilterType.TEXT,
        width: '250px'
      },
      { 
        field: 'email',
        header: 'Email',
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.TEXT,
        width: '200px'
      },
      { 
        field: 'role',
        header: 'Role',
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
        ]
      },
      { 
        field: 'number',
        header: 'Number',
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.TEXT
      },
      { 
        field: 'gateway',
        header: 'Gateway',
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.SELECT,
        filterOptions: [
          { id: 'gateway-a', label: 'Gateway A', value: 'Gateway A' },
          { id: 'gateway-b', label: 'Gateway B', value: 'Gateway B' },
          { id: 'gateway-c', label: 'Gateway C', value: 'Gateway C' },
        ]
      },
      { 
        field: 'contact',
        header: 'Contact',
        isSortable: true,
        isEditable: true,
        isFilterable: true,
        filterType: FilterType.TEXT
      },
      {
        field: 'status',
        header: 'Status',
        renderCell: (_value, row) => {
          const getStatusColor = (status: string): TagColor => {
            switch (status) {
              case 'Active':
                return TagColor.SUCCESS;
              case 'Inactive':
                return TagColor.ERROR;
              case 'Pending':
                return TagColor.WARNING;
              default:
                return TagColor.NEUTRAL;
            }
          };

          return (
            <Tag
              text={row.status}
              variant={TagVariant.SUBTLE}
              color={getStatusColor(row.status)}
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
        ]
      },
    ];
    
  
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortConfig, setSortConfig] = useState({
      field: '',
      direction: SortDirection.NONE
    });

    // Handle search and filter
    const handleSearchChange = (searchConfig: SearchConfig) => {
      console.log('Search changed:', searchConfig);
    };

    const handleFilterChange = (filters: ColumnFilter[]) => {
      console.log('Filters changed:', filters);
    };

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

    const handleRefreshData = () => {
      // Simulate API call to refresh data
      console.log('Refreshing data...');
      // You can call your API here and update the data state
    };
  
    const handleAddUser = () => {
      console.log('Adding new user...');
      // Handle add user logic
    };
  
  
    return (
      <div>
        <DataTable
          data={data}
          columns={columns as ColumnDefinition<Record<string, unknown>>[]}
          idField="id"
          title="User Management"
          description="Complete overview of system users and their roles with search, filtering, and inline editing"
          isStriped
          isHoverable
          enableSearch
          searchPlaceholder="Search users by name, email, or any field..."
          enableFiltering
          enableInlineEdit
          pagination={{
            currentPage,
            pageSize,
            totalRows: data.length,
            pageSizeOptions: [5, 10, 25, 50],
            onPageChange: setCurrentPage,
            onPageSizeChange: setPageSize
          }}
          defaultSort={sortConfig}
          onSortChange={(newSortConfig) => setSortConfig(newSortConfig)}
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          onRowSave={handleRowSave}
          onRowCancel={handleRowCancel}
          headerSlot1={
            <Button
              buttonType={ButtonType.SECONDARY}
              leadingIcon={RefreshCw}
              size={ButtonSize.SMALL}
              onClick={handleRefreshData}
            >
              Refresh
            </Button>
          }
          headeSlot2={
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