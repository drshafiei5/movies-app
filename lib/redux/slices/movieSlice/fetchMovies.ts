import { nextService } from "@/lib/axios";
import { AxiosResponse } from "axios";

export const fetchMovies = async (page = 2): Promise<AxiosResponse<MoviesRes, any>> => {
    const res = await nextService.get<MoviesRes>("/movies/" + page);

    return res;
};
