import React, { useContext, useState } from "react";
import { MovieContext } from "../../services/MovieContextProviders";
import MovieCard from "../../components/MoviesComponent/MovieCard/MovieCard";
import "../../styles/ItemPage.css";
import Searchbar from "../../components/sections/Searchbar/Searchbar";
import AppPagination from "../../components/sections/AppPagination/AppPagination";
import { SearchContext } from "../../services/SearchProviders";
import { imgNotAvailablePortrait } from "../../services/imgNotAvailable";
function Movies() {
    const {
        searchQuery,
        searchMovieQueryData,
        searchQueryPage,
        setSearchQueryPage,
        totalSearchQueryPages,
    } = useContext(SearchContext);
    const [displayType, setDisplayType] = useState("");
    const searchMovieQueryImages =
        searchMovieQueryData &&
        searchMovieQueryData?.map((movie) =>
            movie.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : imgNotAvailablePortrait
        );
    const {
        trendingPage,
        setTrendingPage,
        upcomingPage,
        setUpcomingPage,
        topRatedPage,
        setTopRatedPage,
        popularPage,
        setPopularPage,
        totalTrendingPages,
        totalUpcomingPages,
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
            <div>
                <>
                    <Searchbar
                        category="MOVIES"
                        getType={setDisplayType}
                        trending="trending"
                        upcoming="upcoming"
                        topRated="top rated"
                        popular="popular"
                    />
                </>
            </div>

            <div>
                <>
                    {searchQuery === "" ? (
                        (() => {
                            switch (displayType) {
                                case "upcoming":
                                    return (
                                        <>
                                            <div className="items-item-container">
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
                                            <div className="item-pagination-container">
                                                <AppPagination
                                                    setPage={setUpcomingPage}
                                                    page={upcomingPage}
                                                    pageNumbers={totalUpcomingPages}
                                                />
                                            </div>
                                        </>
                                    );
                                case "top-rated":
                                    return (
                                        <>
                                            <div className="items-item-container">
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
                                            <div className="item-pagination-container">
                                                <AppPagination
                                                    setPage={setTopRatedPage}
                                                    page={topRatedPage}
                                                    pageNumbers={500}
                                                />
                                            </div>
                                        </>
                                    );
                                case "popular":
                                    return (
                                        <>
                                            <div className="items-item-container">
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
                                            <div className="item-pagination-container">
                                                <AppPagination
                                                    setPage={setPopularPage}
                                                    page={popularPage}
                                                    pageNumbers={500}
                                                />
                                            </div>
                                        </>
                                    );

                                case "trending":
                                default:
                                    return (
                                        <>
                                            <div className="items-item-container">
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
                                            <div className="item-pagination-container">
                                                <AppPagination
                                                    setPage={setTrendingPage}
                                                    page={trendingPage}
                                                    pageNumbers={totalTrendingPages}
                                                />
                                            </div>
                                        </>
                                    );
                            }
                        })()
                    ) : (
                        <>
                            <div className="items-item-container">
                                {searchMovieQueryData?.map((movie, index) => {
                                    return (
                                        <>
                                            <MovieCard
                                                key={index}
                                                title={movie.title}
                                                rating={movie.vote_average.toFixed(1)}
                                                imgUrl={searchMovieQueryImages[index]}
                                                movieId={movie.id}
                                            />
                                        </>
                                    );
                                })}
                            </div>

                            <div className="item-pagination-container">
                                <AppPagination
                                    setPage={setSearchQueryPage}
                                    page={searchQueryPage}
                                    pageNumbers={totalSearchQueryPages}
                                />
                            </div>
                        </>
                    )}
                </>
            </div>
        </>
    );
}

export default Movies;
