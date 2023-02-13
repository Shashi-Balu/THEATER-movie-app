import React, { useContext } from "react";
import { MovieContext } from "../MovieProviders/MovieProviders";
import MovieCard from "../MovieCard/MovieCard";
import "./Movie.css";

function Movie({ type }) {
    const {
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        trendingMoviesImages,
        upcomingMoviesImages,
        popularMoviesImages,
        topRatedImages,
    } = useContext(MovieContext);
    return (
        <>
            <div>
                {(() => {
                    switch (type) {
                        case "upcoming":
                            return (
                                <div className="movies-container">
                                    {upcomingMovies.map((movie, index) => (
                                        <MovieCard
                                            key={index}
                                            title={movie.title}
                                            rating={movie.vote_average.toFixed(1)}
                                            imgUrl={upcomingMoviesImages[index]}
                                        />
                                    ))}
                                </div>
                            );
                        case "top-rated":
                            return (
                                <div className="movies-container">
                                    {topRatedMovies.map((movie, index) => (
                                        <MovieCard
                                            key={index}
                                            title={movie.title}
                                            rating={movie.vote_average.toFixed(1)}
                                            imgUrl={topRatedImages[index]}
                                        />
                                    ))}
                                </div>
                            );
                        case "popular":
                            return (
                                <div className="movies-container">
                                    {popularMovies.map((movie, index) => (
                                        <MovieCard
                                            key={index}
                                            title={movie.title}
                                            rating={movie.vote_average.toFixed(1)}
                                            imgUrl={popularMoviesImages[index]}
                                        />
                                    ))}
                                </div>
                            );

                        case "trending":
                        default:
                            return (
                                <div className="movies-container">
                                    {trendingMovies.map((movie, index) => (
                                        <MovieCard
                                            key={index}
                                            title={movie.title}
                                            rating={movie.vote_average.toFixed(1)}
                                            imgUrl={trendingMoviesImages[index]}
                                        />
                                    ))}
                                </div>
                            );
                    }
                })()}
            </div>
        </>
    );
}

export default Movie;
