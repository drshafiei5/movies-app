"use client";

import { VirtualizedGridItemProps } from "@/types/global";

interface GridItemProps<T> extends VirtualizedGridItemProps<T> {
    renderItem: (item: T) => JSX.Element;
}

export const renderCell = <T,>({
    key,
    rowIndex,
    columnIndex,
    style,
    columnCount,
    items,
    renderItem,
}: GridItemProps<T>) => {
    const index = rowIndex * columnCount + columnIndex;

    return (
        <div
            key={key}
            style={{
                ...style,
                paddingLeft: index % columnCount === 0 ? 0 : "1rem",
            }}
        >
            {renderItem(items[index])}
        </div>
    );
};
