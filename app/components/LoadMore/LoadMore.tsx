"use client";

import React, { memo, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { PropagateLoader } from "react-spinners";

import styles from "./load-more.module.scss";
import { ReduxState, useSelector } from "@/lib/redux";
import VirtualizedGrid from "../VirtualizedGrid/VirtualizedGrid";
import { renderCell } from "../VirtualizedGrid/renderCell";

interface LoadMoreProps<T extends { id: string }> {
    defaultPage: number;
    itemHeight: number;
    itemMinWidth: number;
    loadMore: (page: number) => void;
    hasNextPage?: boolean;
    isFetching?: boolean;
    renderItem: (item: T) => JSX.Element;
    dataSelector: (state: ReduxState) => T[];
}

const LoadMore = <T extends { id: string }>({
    defaultPage,
    loadMore,
    isFetching,
    hasNextPage,
    renderItem,
    dataSelector,
    itemHeight,
    itemMinWidth
}: LoadMoreProps<T>) => {
    const page = useRef(defaultPage);
    const { ref, inView } = useInView();
    const data = useSelector(dataSelector);

    useEffect(() => {
        if (inView && hasNextPage) {
            loadMore(page.current);
            page.current++;
        }
    }, [inView, hasNextPage]);

    return (
        <div className={styles.loadMore}>
            <VirtualizedGrid
                items={data}
                itemHeight={itemHeight}
                itemMinWidth={itemMinWidth}
                renderCell={(props) => renderCell({ ...props, renderItem })}
            />

            {(isFetching || hasNextPage) && (
                <div className={styles.loadMore__loader} ref={ref}>
                    <PropagateLoader color="#fff" />
                </div>
            )}
        </div>
    );
};

export default memo(LoadMore) as typeof LoadMore;
