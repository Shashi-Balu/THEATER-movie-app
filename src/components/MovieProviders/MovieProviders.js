import React, { createContext, useState, useEffect } from "react";
import { url } from "../../services/apis/movieUrl";

export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
    const [trendingPage, setTrendingPage] = useState(1);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [topRatedPage, setTopRatedPage] = useState(1);
    const [popularPage, setPopularPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(10);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);
    const [totalTrendingPages, setTotalTrendingPages] = useState([]);
    const [totalUpcomingPages, setTotalUpcomingPages] = useState([]);
    const [totalTopRatedPages, setTotalTopRatedPages] = useState([]);
    const [totalPopularPages, setTotalPopularPages] = useState([]);

    async function callMovieApi() {
        const trendingMoviesApi = await (
            await fetch(
                `${url}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${trendingPage}`
            )
        ).json();
        const trendingMoviesApiData = trendingMoviesApi?.results;
        setTrendingMovies(trendingMoviesApiData);
        console.log(trendingMoviesApi);
        setTotalTrendingPages(trendingMoviesApi?.total_pages);

        const upcomingMoviesApi = await (
            await fetch(
                `${url}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${upcomingPage}`
            )
        ).json();
        const upcomingMoviesApiData = upcomingMoviesApi?.results;
        setUpcomingMovies(upcomingMoviesApiData);
        setTotalUpcomingPages(upcomingMoviesApi?.total_pages);

        const popularMoviesApi = await (
            await fetch(
                `${url}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${popularPage}`
            )
        ).json();
        const popularMoviesApiData = popularMoviesApi?.results;
        setPopularMovies(popularMoviesApiData);
        setTotalTopRatedPages(popularMoviesApi?.total_pages);

        const topRatedMoviesApi = await (
            await fetch(
                `${url}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${topRatedPage}`
            )
        ).json();
        const topRatedMoviesApiData = topRatedMoviesApi?.results;
        setTopRatedMovies(topRatedMoviesApiData);
        setTotalPopularPages(topRatedMoviesApi?.total_pages);

        const tvshowsApi = await (
            await fetch(
                `${url}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${trendingPage}`
            )
        ).json();
        const tvshowsApiData = tvshowsApi?.results;
        setTvshows(tvshowsApiData);
    }

    const trendingMoviesImages = trendingMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const upcomingMoviesImages = upcomingMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const popularMoviesImages = popularMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const topRatedMoviesImages = topRatedMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const latestMoviesImages = latestMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const tvshowsImages = tvshows?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );

    useEffect(() => {
        callMovieApi();
    }, [trendingPage, upcomingPage, topRatedPage, popularPage]);

    return (
        <MovieContext.Provider
            value={{
                totalTrendingPages,
                totalUpcomingPages,
                totalTopRatedPages,
                totalPopularPages,
                trendingPage,
                setTrendingPage,
                upcomingPage,
                setUpcomingPage,
                topRatedPage,
                setTopRatedPage,
                popularPage,
                setPopularPage,
                numberOfPages,
                setNumberOfPages,
                trendingMovies,
                setTrendingMovies,
                upcomingMovies,
                setUpcomingMovies,
                popularMovies,
                setPopularMovies,
                topRatedMovies,
                setTopRatedMovies,
                tvshows,
                setTvshows,
                trendingMoviesImages,
                upcomingMoviesImages,
                popularMoviesImages,
                topRatedMoviesImages,
                tvshowsImages,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
