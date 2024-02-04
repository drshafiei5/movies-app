/* Components */

import { nextService } from "@/lib/axios";
import MovieList from "./components/MovieList/MovieList";

export default async function IndexPage() {
    const {
        data: { data },
    } = await nextService.get<MoviesRes>("/movies/1");


    return <MovieList movies={data}/>;
}

export const metadata = {
    title: "فیلم نت",
};
