import React from 'react';
import { DataTable } from '../../../lib/components/DataTable';
import { ColumnDefinition, SortDirection } from '../../../lib/components/DataTable/types';
import { formatCurrency, formatDate } from '../../../lib/components/DataTable/dataTableUtils';
import Block from '../../../lib/components/Primitives/Block/Block';
import PrimitiveText from '../../../lib/components/Primitives/PrimitiveText/PrimitiveText';
import { Tag } from '../../../lib/components/Tags';
import { TagSize, TagColor } from '../../../lib/components/Tags/types';

// Sample data types
type Employee = {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
  performance: number;
};

// Sample employee data
const employeeData: Employee[] = [
  {
    id: 'EMP001',
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    position: 'Senior Developer',
    salary: 95000,
    joinDate: '2022-01-15',
    status: 'active',
    performance: 4.5
  },
  {
    id: 'EMP002',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    department: 'Design',
    position: 'UX Designer',
    salary: 78000,
    joinDate: '2021-08-20',
    status: 'active',
    performance: 4.8
  },
  {
    id: 'EMP003',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: 85000,
    joinDate: '2020-03-10',
    status: 'inactive',
    performance: 4.2
  },
  {
    id: 'EMP004',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    department: 'Engineering',
    position: 'Frontend Developer',
    salary: 72000,
    joinDate: '2023-02-01',
    status: 'active',
    performance: 4.6
  },
  {
    id: 'EMP005',
    name: 'David Brown',
    email: 'david.brown@company.com',
    department: 'Sales',
    position: 'Sales Representative',
    salary: 65000,
    joinDate: '2022-11-15',
    status: 'pending',
    performance: 3.9
  },
  {
    id: 'EMP006',
    name: 'Lisa Garcia',
    email: 'lisa.garcia@company.com',
    department: 'HR',
    position: 'HR Specialist',
    salary: 68000,
    joinDate: '2021-05-30',
    status: 'active',
    performance: 4.4
  },
  {
    id: 'EMP007',
    name: 'Tom Anderson',
    email: 'tom.anderson@company.com',
    department: 'Engineering',
    position: 'DevOps Engineer',
    salary: 88000,
    joinDate: '2020-09-12',
    status: 'active',
    performance: 4.7
  },
  {
    id: 'EMP008',
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    department: 'Finance',
    position: 'Financial Analyst',
    salary: 75000,
    joinDate: '2022-07-08',
    status: 'active',
    performance: 4.3
  }
];

const DataTableDemo: React.FC = () => {
  // Employee table columns
  const employeeColumns: ColumnDefinition<Employee>[] = [
    {
      field: 'name',
      header: 'Name',
      isSortable: true,
      width: '200px'
    },
    {
      field: 'email',
      header: 'Email',
      isSortable: true,
      width: '250px'
    },
    {
      field: 'department',
      header: 'Department',
      isSortable: true,
      width: '150px'
    },
    {
      field: 'position',
      header: 'Position',
      isSortable: true,
      width: '180px'
    },
    {
      field: 'salary',
      header: 'Salary',
      isSortable: true,
      width: '120px',
      renderCell: (value) => formatCurrency(value as number)
    },
    {
      field: 'joinDate',
      header: 'Join Date',
      isSortable: true,
      width: '120px',
      renderCell: (value) => formatDate(value as string)
    },
    {
      field: 'status',
      header: 'Status',
      isSortable: true,
      width: '100px',
      renderCell: (value) => {
        const status = value as Employee['status'];
        const tagColor = status === 'active' ? TagColor.SUCCESS : 
                        status === 'inactive' ? TagColor.ERROR : TagColor.WARNING;
        return (
          <Tag 
            text={status.charAt(0).toUpperCase() + status.slice(1)}
            color={tagColor} 
            size={TagSize.XS}
          />
        );
      }
    },
    {
      field: 'performance',
      header: 'Performance',
      isSortable: true,
      width: '120px',
      renderCell: (value) => {
        const rating = value as number;
        return (
          <Block display="flex" alignItems="center" gap="4px">
            <PrimitiveText>{rating.toFixed(1)}</PrimitiveText>
            <PrimitiveText color="#FCD34D">★</PrimitiveText>
          </Block>
        );
      }
    }
  ];

  return (
    <Block padding="24px" maxWidth="1200px" margin="0 auto">
      <DataTable
        data={employeeData as Record<string, unknown>[]}
        columns={employeeColumns as ColumnDefinition<Record<string, unknown>>[]}
        idField="id"
        isStriped={true}
        isHoverable={true}
        enableFiltering={true}
        showToolbar={true}
        defaultSort={{
          field: 'name',
          direction: SortDirection.ASCENDING
        }}
        pagination={{
          currentPage: 1,
          pageSize: 5,
          totalRows: employeeData.length,
          pageSizeOptions: [5, 10, 20]
        }}
        onSortChange={(sortConfig) => {
          console.log('Sort changed:', sortConfig);
        }}
        onPageChange={(page) => {
          console.log('Page changed:', page);
        }}
        onPageSizeChange={(pageSize) => {
          console.log('Page size changed:', pageSize);
        }}
      />
    </Block>
  );
};

export default DataTableDemo; 