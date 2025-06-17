import { FilterType } from './types';
import { MenuItemV2Variant, MenuItemV2ActionType } from '../Menu/types';

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
  menuItems?: {
    label: string;
    variant: MenuItemV2Variant;
    actionType?: MenuItemV2ActionType;
    onClick: () => void;
  }[];
}

export const getColumnTypeConfig = (type: ColumnType): ColumnTypeConfig => {
  switch (type) {
    case ColumnType.TEXT:
      return {
        type,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.NUMBER:
      return {
        type,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.SELECT:
      return {
        type,
        filterType: FilterType.SELECT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.MULTISELECT:
      return {
        type,
        filterType: FilterType.MULTISELECT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.AVATAR:
      return {
        type,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.TAG:
      return {
        type,
        filterType: FilterType.SELECT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.DATE:
      return {
        type,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.DATE_RANGE:
      return {
        type,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    case ColumnType.CUSTOM:
      return {
        type,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
    default:
      return {
        type: ColumnType.TEXT,
        filterType: FilterType.TEXT,
        menuItems: [
          {
            label: 'Sort Ascending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Sort Descending',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          },
          {
            label: 'Filter',
            variant: MenuItemV2Variant.DEFAULT,
            onClick: () => {}
          }
        ]
      };
  }
}; 