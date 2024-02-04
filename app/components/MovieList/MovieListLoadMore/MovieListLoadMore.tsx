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

    const loadMore = React.useCallback(async (page: number) => {
        const res = await dispatch(fetchAllMovie(page));
        return (res.payload as MoviesRes).data;
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
