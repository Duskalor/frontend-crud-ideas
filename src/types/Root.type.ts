export interface Root {
  table: Table;
  column: Column2;
  row: Row;
  cell: Cell;
}

export interface Table {
  _features: Feature[];
  options: Options;
  initialState: InitialState;
}

export interface Feature {}

export interface Options {
  filterFromLeafRows: boolean;
  maxLeafRowFilterDepth: number;
  globalFilterFn: string;
  groupedColumnMode: string;
  paginateExpandedRows: boolean;
  enableRowSelection: boolean;
  enableMultiRowSelection: boolean;
  enableSubRowSelection: boolean;
  columnResizeMode: string;
  columnResizeDirection: string;
  state: State;
  renderFallbackValue: any;
  data: Daum[];
  columns: Column[];
  meta: Meta;
}

export interface State {
  columnSizing: ColumnSizing;
  columnSizingInfo: ColumnSizingInfo;
  rowSelection: RowSelection;
  rowPinning: RowPinning;
  expanded: Expanded;
  grouping: any[];
  sorting: any[];
  columnFilters: any[];
  columnPinning: ColumnPinning;
  columnOrder: any[];
  columnVisibility: ColumnVisibility;
  pagination: Pagination;
}

export interface ColumnSizing {}

export interface ColumnSizingInfo {
  startOffset: any;
  startSize: any;
  deltaOffset: any;
  deltaPercentage: any;
  isResizingColumn: boolean;
  columnSizingStart: any[];
}

export interface RowSelection {}

export interface RowPinning {
  top: any[];
  bottom: any[];
}

export interface Expanded {}

export interface ColumnPinning {
  left: any[];
  right: any[];
}

export interface ColumnVisibility {}

export interface Pagination {
  pageIndex: number;
  pageSize: number;
}

export interface Daum {
  id: string;
  nombre: string;
  descripcion: string;
  created_at: string;
  updated_at: string;
}

export interface Column {
  accessorKey: string;
  header: string;
  size?: number;
}

export interface Meta {}

export interface InitialState {
  columnSizing: ColumnSizing2;
  columnSizingInfo: ColumnSizingInfo2;
  rowSelection: RowSelection2;
  rowPinning: RowPinning2;
  expanded: Expanded2;
  grouping: any[];
  sorting: any[];
  columnFilters: any[];
  columnPinning: ColumnPinning2;
  columnOrder: any[];
  columnVisibility: ColumnVisibility2;
  pagination: Pagination2;
}

export interface ColumnSizing2 {}

export interface ColumnSizingInfo2 {
  startOffset: any;
  startSize: any;
  deltaOffset: any;
  deltaPercentage: any;
  isResizingColumn: boolean;
  columnSizingStart: any[];
}

export interface RowSelection2 {}

export interface RowPinning2 {
  top: any[];
  bottom: any[];
}

export interface Expanded2 {}

export interface ColumnPinning2 {
  left: any[];
  right: any[];
}

export interface ColumnVisibility2 {}

export interface Pagination2 {
  pageIndex: number;
  pageSize: number;
}

export interface Column2 {
  id: string;
  depth: number;
  columnDef: ColumnDef;
  columns: any[];
}

export interface ColumnDef {
  header: string;
  filterFn: string;
  sortingFn: string;
  sortUndefined: number;
  aggregationFn: string;
  size: number;
  minSize: number;
  maxSize: number;
  accessorKey: string;
}

export interface Row {
  id: string;
  index: number;
  original: Original;
  depth: number;
  _valuesCache: ValuesCache;
  _uniqueValuesCache: UniqueValuesCache;
  subRows: any[];
  columnFilters: ColumnFilters;
  columnFiltersMeta: ColumnFiltersMeta;
  _groupingValuesCache: GroupingValuesCache;
}

export interface Original {
  id: string;
  nombre: string;
  descripcion: string;
  created_at: string;
  updated_at: string;
}

export interface ValuesCache {
  descripcion: string;
}

export interface UniqueValuesCache {}

export interface ColumnFilters {}

export interface ColumnFiltersMeta {}

export interface GroupingValuesCache {}

export interface Cell {
  id: string;
  row: Row2;
  column: Column3;
}

export interface Row2 {
  id: string;
  index: number;
  original: Original2;
  depth: number;
  _valuesCache: ValuesCache2;
  _uniqueValuesCache: UniqueValuesCache2;
  subRows: any[];
  columnFilters: ColumnFilters2;
  columnFiltersMeta: ColumnFiltersMeta2;
  _groupingValuesCache: GroupingValuesCache2;
}

export interface Original2 {
  id: string;
  nombre: string;
  descripcion: string;
  created_at: string;
  updated_at: string;
}

export interface ValuesCache2 {
  descripcion: string;
}

export interface UniqueValuesCache2 {}

export interface ColumnFilters2 {}

export interface ColumnFiltersMeta2 {}

export interface GroupingValuesCache2 {}

export interface Column3 {
  id: string;
  depth: number;
  columnDef: ColumnDef2;
  columns: any[];
}

export interface ColumnDef2 {
  header: string;
  filterFn: string;
  sortingFn: string;
  sortUndefined: number;
  aggregationFn: string;
  size: number;
  minSize: number;
  maxSize: number;
  accessorKey: string;
}
