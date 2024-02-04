"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";

import styles from "./movie-card.module.scss";
import { joinString, toPersianDuration } from "@/utils/functions";
import placeholder from "@/public/images/placeholder.png";
import { constants } from "@/utils/constants";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = memo(
    ({ movie }: MovieCardProps) => {
        const genres = useMemo(() => {
            const items = movie?.categories.find(
                (category) => category.type === "genre"
            )?.items;

            return items ? joinString(items, "title") : "";
        }, [movie]);

        const countries = useMemo(() => {
            const items = movie?.categories.find(
                (category) => category.type === "territory"
            )?.items;

            return items ? joinString(items, "title") : "";
        }, [movie]);

        return (
            <div className={styles.movie}>
                <div className={styles.movie__content}>
                    <div className={styles.movie__photo}>
                        <Image
                            fill
                            sizes="500px"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={constants.blurData}
                            alt={movie?.title || 'عنوان تصویر'}
                            src={movie?.poster_image.path || placeholder}
                        />
                    </div>

                    <div className={styles.movie__overlay}>
                        <p>{genres.length ? genres : ""}</p>
                        <p>
                            {countries.length
                                ? `${movie.year}/ ${countries}`
                                : movie?.year}
                        </p>

                        {movie?.duration && (
                            <p>{toPersianDuration(movie.duration)}</p>
                        )}

                        {movie?.imdb_rank_percent > 0 && (
                            <div className={styles.movie__rank}>
                                <span>IMDB</span>
                                <span>{movie?.imdb_rank_percent / 10}</span>
                            </div>
                        )}
                    </div>
                </div>
                <p className={styles.movie__title}>{movie?.title}</p>
            </div>
        );
    },
    (prevProps: MovieCardProps, nextProps: MovieCardProps) => {
        return prevProps.movie?.id === nextProps.movie?.id;
    }
);

export default MovieCard;
