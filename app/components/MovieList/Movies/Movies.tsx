import React, { memo } from "react";
import styles from "./movies.module.scss";
import MovieCard from "../../MovieCard/MovieCard";

interface MoviesProps {
    movies: Movie[];
}

const Movies = memo(
    ({ movies }: MoviesProps) => {
        return (
            <div className={styles.movies}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        );
    },
    (prevProps: MoviesProps, nextProps: MoviesProps) => {
        return prevProps.movies.length === nextProps.movies.length;
    }
);

export default Movies;
