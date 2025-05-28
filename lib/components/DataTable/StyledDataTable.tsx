import styled, { css } from 'styled-components';
import dataTableTokens from './token';

export const StyledDataTableContainer = styled.div<{
  $className?: string;
}>`
  width: ${dataTableTokens.container.width};
  background-color: ${dataTableTokens.container.backgroundColor};
  border-radius: ${dataTableTokens.container.borderRadius};
  box-shadow: ${dataTableTokens.container.boxShadow};
  overflow: ${dataTableTokens.container.overflow};
`;

export const StyledDataTableHeader = styled.div`
  display: ${dataTableTokens.header.container.display};
  justify-content: ${dataTableTokens.header.container.justifyContent};
  align-items: ${dataTableTokens.header.container.alignItems};
  padding: ${dataTableTokens.header.container.padding};
  flex-direction: ${dataTableTokens.header.container.flexDirection};
  gap: ${dataTableTokens.header.container.gap};
  border-bottom: ${dataTableTokens.header.container.borderBottom};
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledDataTableTitle = styled.h2`
  font-size: ${dataTableTokens.header.title.fontSize};
  font-weight: ${dataTableTokens.header.title.fontWeight};
  color: ${dataTableTokens.header.title.color};
  line-height: ${dataTableTokens.header.title.lineHeight};
  margin: ${dataTableTokens.header.title.margin};
`;

export const StyledDataTableDescription = styled.p`
  font-size: ${dataTableTokens.header.description.fontSize};
  color: ${dataTableTokens.header.description.color};
  line-height: ${dataTableTokens.header.description.lineHeight};
  margin: ${dataTableTokens.header.description.margin};
`;

export const StyledTable = styled.table<{
  $isStriped: boolean;
  $isHoverable: boolean;
}>`
  width: ${dataTableTokens.table.base.width};
  table-layout: ${dataTableTokens.table.base.tableLayout};
  border-collapse: ${dataTableTokens.table.base.borderCollapse};
  border-spacing: ${dataTableTokens.table.base.borderSpacing};
`;

export const StyledTableHead = styled.thead`
  background-color: ${dataTableTokens.thead.base.backgroundColor};
  border-bottom: ${dataTableTokens.thead.base.borderBottom};
`;

export const StyledTableHeaderCell = styled.th<{
  $isSortable: boolean;
  $className?: string;
}>`
  padding: ${dataTableTokens.th.base.padding};
  text-align: ${dataTableTokens.th.base.textAlign};
  font-weight: ${dataTableTokens.th.base.fontWeight};
  color: ${dataTableTokens.th.base.color};
  font-size: ${dataTableTokens.th.base.fontSize};
  line-height: ${dataTableTokens.th.base.lineHeight};
  height: ${dataTableTokens.th.base.height};
  vertical-align: ${dataTableTokens.th.base.verticalAlign};
  border-bottom: ${dataTableTokens.th.base.borderBottom};
  
  ${({ $isSortable }) => $isSortable && css`
    cursor: ${dataTableTokens.th.sortable.cursor};
    user-select: ${dataTableTokens.th.sortable.userSelect};
    transition: ${dataTableTokens.th.sortable.transition};
    
    &:hover {
      color: ${dataTableTokens.th.sortable["&:hover"].color};
    }
  `}
`;

export const StyledTableBody = styled.tbody`
  background-color: ${dataTableTokens.tbody.backgroundColor};
`;

export const StyledTableRow = styled.tr<{
  $isStriped?: boolean;
  $isOdd?: boolean;
  $isHoverable?: boolean;
}>`
  border-bottom: ${dataTableTokens.tr.base.borderBottom};
  transition: ${dataTableTokens.tr.base.transition};
  
  ${({ $isStriped, $isOdd }) => $isStriped && $isOdd && css`
    background-color: ${dataTableTokens.tr.striped.backgroundColor};
  `}
  
  ${({ $isHoverable }) => $isHoverable && css`
    &:hover {
      background-color: ${dataTableTokens.tr.hover.backgroundColor};
    }
  `}
`;

export const StyledTableCell = styled.td<{
  $className?: string;
}>`
  padding: ${dataTableTokens.td.base.padding};
  font-size: ${dataTableTokens.td.base.fontSize};
  color: ${dataTableTokens.td.base.color};
  font-weight: ${dataTableTokens.td.base.fontWeight};
  line-height: ${dataTableTokens.td.base.lineHeight};
  vertical-align: ${dataTableTokens.td.base.verticalAlign};
  height: ${dataTableTokens.td.base.height};
`;

export const StyledTableWrapper = styled.div`
  border-radius: ${dataTableTokens.border.radius};
  border: ${dataTableTokens.border.width} solid ${dataTableTokens.border.color};
  overflow-x: auto;
`;

export const StyledSortIcon = styled.span<{
  $direction: 'asc' | 'desc' | 'none';
}>`
  margin-left: ${dataTableTokens.sortIcon.base.marginLeft};
  height: ${dataTableTokens.sortIcon.base.height};
  width: ${dataTableTokens.sortIcon.base.width};
  color: ${dataTableTokens.sortIcon.base.color};
  transition: ${dataTableTokens.sortIcon.base.transition};
  
  ${({ $direction }) => $direction !== 'none' && css`
    color: ${dataTableTokens.sortIcon.active.color};
  `}
  
  ${({ $direction }) => $direction === 'asc' && css`
    transform: ${dataTableTokens.sortIcon.asc.transform};
  `}
  
  ${({ $direction }) => $direction === 'desc' && css`
    transform: ${dataTableTokens.sortIcon.desc.transform};
  `}
`;

export const StyledPaginationContainer = styled.div`
  display: ${dataTableTokens.pagination.container.display};
  justify-content: ${dataTableTokens.pagination.container.justifyContent};
  align-items: ${dataTableTokens.pagination.container.alignItems};
  padding: ${dataTableTokens.pagination.container.padding};
  border-top: ${dataTableTokens.pagination.container.borderTop};
  background-color: ${dataTableTokens.pagination.container.backgroundColor};
  min-height: ${dataTableTokens.pagination.container.minHeight};
`;

export const StyledPaginationText = styled.span`
  font-size: ${dataTableTokens.pagination.text.fontSize};
  color: ${dataTableTokens.pagination.text.color};
  font-weight: ${dataTableTokens.pagination.text.fontWeight};
  display: ${dataTableTokens.pagination.text.display};
  align-items: ${dataTableTokens.pagination.text.alignItems};
  gap: ${dataTableTokens.pagination.text.gap};
`;

export const StyledPaginationControls = styled.div`
  display: ${dataTableTokens.pagination.controls.display};
  align-items: ${dataTableTokens.pagination.controls.alignItems};
  gap: ${dataTableTokens.pagination.controls.gap};
`;

export const StyledPaginationButton = styled.button<{
  $isDisabled?: boolean;
  $isActive?: boolean;
}>`
  padding: ${dataTableTokens.pagination.button.base.padding};
  border-radius: ${dataTableTokens.pagination.button.base.borderRadius};
  display: ${dataTableTokens.pagination.button.base.display};
  align-items: ${dataTableTokens.pagination.button.base.alignItems};
  justify-content: ${dataTableTokens.pagination.button.base.justifyContent};
  border: ${dataTableTokens.pagination.button.base.border};
  background-color: ${dataTableTokens.pagination.button.base.backgroundColor};
  font-size: ${dataTableTokens.pagination.button.base.fontSize};
  font-weight: ${dataTableTokens.pagination.button.base.fontWeight};
  min-width: ${dataTableTokens.pagination.button.base.minWidth};
  height: ${dataTableTokens.pagination.button.base.height};
  transition: ${dataTableTokens.pagination.button.base.transition};
  
  ${({ $isActive }) => $isActive && css`
    background-color: ${dataTableTokens.pagination.button.active.backgroundColor};
    border-color: ${dataTableTokens.pagination.button.active.borderColor};
    color: ${dataTableTokens.pagination.button.active.color};
  `}
  
  ${({ $isDisabled }) => $isDisabled ? css`
    opacity: ${dataTableTokens.pagination.button.disabled.opacity};
    cursor: ${dataTableTokens.pagination.button.disabled.cursor};
    color: ${dataTableTokens.pagination.button.disabled.color};
    background-color: ${dataTableTokens.pagination.button.disabled.backgroundColor};
  ` : css`
    color: ${dataTableTokens.pagination.button.enabled.color};
    cursor: ${dataTableTokens.pagination.button.enabled.cursor};
    
    &:hover {
      background-color: ${dataTableTokens.pagination.button.enabled["&:hover"].backgroundColor};
      border-color: ${dataTableTokens.pagination.button.enabled["&:hover"].borderColor};
    }
  `}
`;

export const StyledPaginationSelect = styled.select`
  padding: ${dataTableTokens.pagination.select.padding};
  border-radius: ${dataTableTokens.pagination.select.borderRadius};
  border: ${dataTableTokens.pagination.select.border};
  background-color: ${dataTableTokens.pagination.select.backgroundColor};
  font-size: ${dataTableTokens.pagination.select.fontSize};
  color: ${dataTableTokens.pagination.select.color};
  cursor: ${dataTableTokens.pagination.select.cursor};
  
  &:focus {
    outline: ${dataTableTokens.pagination.select["&:focus"].outline};
    border-color: ${dataTableTokens.pagination.select["&:focus"].borderColor};
    box-shadow: ${dataTableTokens.pagination.select["&:focus"].boxShadow};
  }
`; 