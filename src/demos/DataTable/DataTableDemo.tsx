import { useState } from 'react';
import { ColumnDefinition, SortDirection } from '../../../lib/components/DataTable/types';
import DataTable from '../../../lib/components/DataTable/DataTable';
import { Avatar } from '../../../lib/components/Avatar';
import Tag from '../../../lib/components/Tags/Tags';
import { TagColor, TagVariant, TagSize } from '../../../lib/components/Tags/types';

const DataTableDemo = () => {
    const data = Array.from({ length: 50 }, (_, index) => ({
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
    }));

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
          <div style={{ display: 'flex', width: '100%', gap: '6px' }}>
            <Avatar src={`https://randomuser.me/api/portraits/${row.id % 2 ? 'men' : 'women'}/${row.id % 70}.jpg`} />
            <div>
              <div className="font-medium text-sm">{row.name}</div>
              <div className="text-xs text-gray-500">Joined in {row.joinDate}</div>
            </div>
          </div>
        ),
        isSortable: true,
        width: '250px'
      },
      { 
        field: 'email',
        header: 'Email',
        isSortable: true,
        width: '200px'
      },
      { 
        field: 'role',
        header: 'Role',
        isSortable: true
      },
      { 
        field: 'number',
        header: 'Number',
        isSortable: true
      },
      { 
        field: 'gateway',
        header: 'Gateway',
        isSortable: true
      },
      { 
        field: 'contact',
        header: 'Contact',
        isSortable: true
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
        isSortable: true
      },
    ];
    
  
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sortConfig, setSortConfig] = useState({
      field: '',
      direction: SortDirection.NONE
    });
  
    return (
      <div>
        <DataTable
          data={data}
          columns={columns as ColumnDefinition<Record<string, unknown>>[]}
          idField="id"
          title="User Management"
          description="Complete overview of system users and their roles"
          isStriped
          isHoverable
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
        />
      </div>
    );
  };

export default DataTableDemo;