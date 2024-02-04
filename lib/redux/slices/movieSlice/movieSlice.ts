import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { fetchAllMovie } from "./thunks";
import { constants } from "@/utils/constants";

const initialState: MovieSliceState = {
    status: "idle",
    hasNextPage: true,
    movies: [],
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMovie.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllMovie.fulfilled, (state, action) => {
                state.status = "idle";
                state.movies = [...state.movies, ...action.payload.data];
                state.hasNextPage =
                    action.payload.meta.total_items_count >=
                    action.meta.arg * Number(constants.pageSize);
            });
    },
});

/* Types */
export interface MovieSliceState {
    status: "idle" | "loading" | "failed";
    hasNextPage: boolean;
    movies: Movie[];
}
