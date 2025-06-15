import { ReactNode } from 'react';
import { CSSObject } from 'styled-components';

export enum BreadcrumbVariant {
  DEFAULT = 'default',
  TRUNCATED = 'truncated',
}

export type BreadcrumbItemProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  isActive?: boolean;
}

export type BreadcrumbItemInternalProps = BreadcrumbItemProps & {
  isLast?: boolean;
}

export type BreadcrumbProps = {
  items: BreadcrumbItemProps[];
  variant?: BreadcrumbVariant;
}
