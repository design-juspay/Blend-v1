import { FilterType } from './types';

export enum ColumnType {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  MULTISELECT = 'multiselect',
  DATE = 'date',
  DATE_RANGE = 'date_range',
  AVATAR = 'avatar',
  TAG = 'tag',
  CUSTOM = 'custom'
}

export type ColumnFilterOption = {
  id: string;
  label: string;
  value: string;
}

export type ColumnTypeConfig = {
  type: ColumnType;
  filterType: FilterType;
  filterOptions?: ColumnFilterOption[];
  supportsSorting: boolean;
  supportsFiltering: boolean;
  enableSearch?: boolean; // For text-based filtering with search
  filterComponent?: 'search' | 'select' | 'multiselect' | 'dateRange' | 'numberRange';
}

export const getColumnTypeConfig = (type: ColumnType): ColumnTypeConfig => {
  switch (type) {
    case ColumnType.TEXT:
      return {
        type,
        filterType: FilterType.TEXT,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: true,
        filterComponent: 'search'
      };
    case ColumnType.NUMBER:
      return {
        type,
        filterType: FilterType.NUMBER,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: true,
        filterComponent: 'search'
      };
    case ColumnType.SELECT:
      return {
        type,
        filterType: FilterType.SELECT,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: false,
        filterComponent: 'select'
      };
    case ColumnType.MULTISELECT:
      return {
        type,
        filterType: FilterType.MULTISELECT,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: false,
        filterComponent: 'multiselect'
      };
    case ColumnType.AVATAR:
      return {
        type,
        filterType: FilterType.TEXT,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: true,
        filterComponent: 'search'
      };
    case ColumnType.TAG:
      return {
        type,
        filterType: FilterType.SELECT,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: false,
        filterComponent: 'select'
      };
    case ColumnType.DATE:
      return {
        type,
        filterType: FilterType.DATE,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: false,
        filterComponent: 'dateRange'
      };
    case ColumnType.DATE_RANGE:
      return {
        type,
        filterType: FilterType.DATE,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: false,
        filterComponent: 'dateRange'
      };
    case ColumnType.CUSTOM:
      return {
        type,
        filterType: FilterType.TEXT,
        supportsSorting: true,
        supportsFiltering: false,
        enableSearch: false
      };
    default:
      return {
        type: ColumnType.TEXT,
        filterType: FilterType.TEXT,
        supportsSorting: true,
        supportsFiltering: true,
        enableSearch: true,
        filterComponent: 'search'
      };
  }
}; 