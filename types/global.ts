import { GridCellProps } from "react-virtualized";

export interface VirtualizedGridItemProps<T> extends GridCellProps {
    items: T[];
    columnCount: number;
}
