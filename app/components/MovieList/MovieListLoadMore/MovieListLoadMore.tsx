"use client";

import React from "react";
import LoadMore from "../../LoadMore/LoadMore";
import MovieCard from "../../MovieCard/MovieCard";
import {
    fetchAllMovie,
    useDispatch,
    useSelector,
    selectMoviesStatus,
    selectHasNextPage,
    selectMovies,
} from "@/lib/redux";

interface MovieListLoadMoreProps {}

const defaultPage = 2;

const MovieListLoadMore = (props: MovieListLoadMoreProps) => {
    const dispatch = useDispatch();
    const hasNextPage = useSelector(selectHasNextPage);
    const moviesStatus = useSelector(selectMoviesStatus);

    const loadMore = React.useCallback((page: number) => {
        dispatch(fetchAllMovie(page));
    }, []);

    return (
        <LoadMore
            loadMore={loadMore}
            dataSelector={selectMovies}
            defaultPage={defaultPage}
            hasNextPage={hasNextPage}
            isFetching={moviesStatus === "loading"}
            renderItem={(item) => <MovieCard movie={item} />}
        />
    );
};

export default MovieListLoadMore;
