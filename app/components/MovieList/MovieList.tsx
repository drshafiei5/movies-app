"use client";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./movie-list.module.scss";
import MovieListLoadMore from "./MovieListLoadMore/MovieListLoadMore";
import Movies from "./Movies/Movies";

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <>
            <Movies movies={movies} />
            <MovieListLoadMore />
        </>
    );
};

export default MovieList;
