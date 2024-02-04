
import type { ReduxState } from "@/lib/redux";

export const selectMoviesStatus = (state: ReduxState) => state.movie.status;
export const selectHasNextPage = (state: ReduxState) => state.movie.hasNextPage;
export const selectMovies = (state: ReduxState) => state.movie.movies;
