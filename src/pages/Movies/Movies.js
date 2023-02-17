import React, { useContext, useState } from "react";
import { MovieContext } from "../../components/MovieProviders/MovieProviders";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Movies.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import AppPagination from "../../components/AppPagination/AppPagination";

function Movies() {
    const [displayType, setDisplayType] = useState("");

    const {
        trendingPage,
        setTrendingPage,
        upcomingPage,
        setUpcomingPage,
        topRatedPage,
        setTopRatedPage,
        popularPage,
        setPopularPage,
        numberOfPages,
        totalTrendingPages,
        totalPopularPages,
        totalUpcomingPages,
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        trendingMoviesImages,
        upcomingMoviesImages,
        popularMoviesImages,
        topRatedMoviesImages,
        totalTopRatedPages,
    } = useContext(MovieContext);

    console.log(trendingMovies);
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
                                <>
                                    <div className="movies-container">
                                        {upcomingMovies?.map((movie, index) => (
                                            <MovieCard
                                                key={index}
                                                title={movie.title}
                                                rating={movie.vote_average.toFixed(1)}
                                                imgUrl={upcomingMoviesImages[index]}
                                                movieId={movie.id}
                                            />
                                        ))}
                                    </div>

                                    <div className="movies-pagination-container">
                                        <AppPagination
                                            setPage={setUpcomingPage}
                                            page={upcomingPage}
                                            pageNumber={totalUpcomingPages}
                                        />
                                    </div>
                                </>
                            );
                        case "top-rated":
                            return (
                                <>
                                    <div className="movies-container">
                                        {topRatedMovies?.map((movie, index) => (
                                            <div>
                                                <MovieCard
                                                    key={index}
                                                    title={movie.title}
                                                    rating={movie.vote_average.toFixed(1)}
                                                    imgUrl={topRatedMoviesImages[index]}
                                                    movieId={movie.id}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="movies-pagination-container">
                                        <AppPagination
                                            setPage={setTopRatedPage}
                                            page={topRatedPage}
                                            pageNumber={totalTopRatedPages}
                                        />
                                    </div>
                                </>
                            );
                        case "popular":
                            return (
                                <>
                                    <div className="movies-container">
                                        {popularMovies?.map((movie, index) => (
                                            <MovieCard
                                                key={index}
                                                title={movie.title}
                                                rating={movie.vote_average.toFixed(1)}
                                                imgUrl={popularMoviesImages[index]}
                                                movieId={movie.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="movies-pagination-container">
                                        <AppPagination
                                            setPage={setPopularPage}
                                            page={popularPage}
                                            pageNumber={totalPopularPages}
                                        />
                                    </div>
                                </>
                            );

                        case "trending":
                        default:
                            return (
                                <>
                                    <div className="movies-container">
                                        {trendingMovies?.map((movie, index) => (
                                            <MovieCard
                                                key={index}
                                                title={movie.title}
                                                rating={movie.vote_average.toFixed(1)}
                                                imgUrl={trendingMoviesImages[index]}
                                                movieId={movie.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="movies-pagination-container">
                                        <AppPagination
                                            setPage={setTrendingPage}
                                            page={trendingPage}
                                            pageNumber={totalTrendingPages}
                                        />
                                    </div>
                                </>
                            );
                    }
                })()}
            </div>
        </>
    );
}

export default Movies;
