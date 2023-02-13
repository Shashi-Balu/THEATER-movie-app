import React, { useContext, useState } from "react";
import { MovieContext } from "../MovieProviders/MovieProviders";
import MovieCard from "../MovieCard/MovieCard";
import "./Movie.css";
import Searchbar from "../Searchbar/Searchbar";

function Movie() {
    const [displayType, setDisplayType] = useState("");

    // const getData = (receiveType) => {
    //     setDisplayType(receiveType);
    // };
    // console.log(displayType);

    const {
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        trendingMoviesImages,
        upcomingMoviesImages,
        popularMoviesImages,
        topRatedMoviesImages,
    } = useContext(MovieContext);
    return (
        <>
            <Searchbar
                category="MOVIES"
                getType={setDisplayType}
                trending="trending"
                upcoming="upcoming"
                topRated="top rated"
                popular="popular"
            />

            <div>
                {(() => {
                    switch (displayType) {
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
                                            imgUrl={topRatedMoviesImages[index]}
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
