import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchMovies } from "./fetchMovies";

export const fetchAllMovie = createAppAsyncThunk(
  "movie/fetchMovies",
  async (amount: number) => {
    const response = await fetchMovies(amount);

    return response.data;
  },
);