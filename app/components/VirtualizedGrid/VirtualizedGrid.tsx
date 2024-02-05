"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { VirtualizedGridItemProps } from "@/types/global";
import { useEffect, useRef } from "react";
import {
    Grid,
    AutoSizer,
    WindowScroller,
    GridCellProps,
} from "react-virtualized";

interface VirtualizedGridProps<T> {
    items: T[];
    itemMinWidth: number;
    itemHeight: number;
    renderCell: (props: VirtualizedGridItemProps<T>) => JSX.Element;
}

const VirtualizedGrid = <T,>({
    items,
    itemMinWidth,
    itemHeight,
    renderCell,
}: VirtualizedGridProps<T>) => {
    const gridRef = useRef<Grid | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const containerWidth = containerRef?.current?.clientWidth || 0;

    const windowSize = useWindowSize();

    useEffect(() => {
        gridRef.current?.recomputeGridSize();
    }, [windowSize]);

    const calculateColumnCount = (width: number) => {
        const count = Math.floor(width / itemMinWidth);
        return !isNaN(count) && +count > 0 ? +count : 1;
    };

    const calculateItemWidth = (width: number, columnCount: number) => {
        return width / columnCount;
    };

    return (
        <div style={{ flex: 1 }} ref={containerRef}>
            <WindowScroller>
                {({ height, isScrolling, onChildScroll, scrollTop }) => (
                    <AutoSizer disableHeight>
                        {() => {
                            const columnCount =
                                calculateColumnCount(containerWidth);

                            const allRow = Math.ceil(
                                items.length / columnCount
                            );

                            const rowCount =
                                !isNaN(allRow) && +allRow > 0 ? +allRow : 1;

                            const itemWidth = calculateItemWidth(
                                containerWidth,
                                columnCount
                            );

                            return (
                                <Grid
                                    autoHeight
                                    ref={gridRef}
                                    width={containerWidth}
                                    height={height}
                                    rowHeight={itemHeight}
                                    columnWidth={itemWidth}
                                    style={{ overflowX: "auto" }}
                                    cellRenderer={(props: GridCellProps) => {
                                        const fullProps: VirtualizedGridItemProps<T> =
                                            {
                                                ...props,
                                                items,
                                                columnCount,
                                            };
                                        return renderCell(fullProps);
                                    }}
                                    rowCount={rowCount}
                                    columnCount={columnCount}
                                    isScrolling={isScrolling}
                                    scrollTop={scrollTop}
                                    onScroll={onChildScroll}
                                />
                            );
                        }}
                    </AutoSizer>
                )}
            </WindowScroller>
        </div>
    );
};

export default VirtualizedGrid;
