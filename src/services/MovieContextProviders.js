import React, { createContext, useState, useEffect } from "react";
import { url } from "./apis/movieUrl";

export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
    const [movieIdApp, setMovieIdApp] = useState();
    const [title, setTitle] = useState();
    const [trendingPage, setTrendingPage] = useState(1);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [topRatedPage, setTopRatedPage] = useState(1);
    const [popularPage, setPopularPage] = useState(1);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [totalTrendingPages, setTotalTrendingPages] = useState([]);
    const [totalUpcomingPages, setTotalUpcomingPages] = useState([]);
    const [totalTopRatedPages, setTotalTopRatedPages] = useState([]);
    const [totalPopularPages, setTotalPopularPages] = useState([]);

    async function callMovieApi() {
        const trendingMoviesApi = await (
            await fetch(
                `${url}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${trendingPage}&adult=false`
            )
        ).json();
        const trendingMoviesApiData = trendingMoviesApi?.results;
        setTrendingMovies(trendingMoviesApiData);
        setTotalTrendingPages(trendingMoviesApi?.total_pages);

        const upcomingMoviesApi = await (
            await fetch(
                `${url}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${upcomingPage}&adult=false`
            )
        ).json();
        const upcomingMoviesApiData = upcomingMoviesApi?.results;
        setUpcomingMovies(upcomingMoviesApiData);
        setTotalUpcomingPages(upcomingMoviesApi?.total_pages);

        const popularMoviesApi = await (
            await fetch(
                `${url}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${popularPage}&adult=false`
            )
        ).json();
        const popularMoviesApiData = popularMoviesApi?.results;
        setPopularMovies(popularMoviesApiData);
        setTotalPopularPages(popularMoviesApi?.total_pages);

        const topRatedMoviesApi = await (
            await fetch(
                `${url}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${topRatedPage}&adult=false`
            )
        ).json();
        const topRatedMoviesApiData = topRatedMoviesApi?.results;
        setTopRatedMovies(topRatedMoviesApiData);
        setTotalTopRatedPages(topRatedMoviesApi?.total_pages);
    }

    const trendingMoviesImages = trendingMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    const upcomingMoviesImages = upcomingMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );
    const popularMoviesImages = popularMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );
    const topRatedMoviesImages = topRatedMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    );

    const trendingMoviesLandscapeImages = trendingMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );

    const upcomingMoviesLandscapeImages = upcomingMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const popularMoviesLandscapeImages = popularMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const topRatedMoviesLandscapeImages = topRatedMovies?.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    console.log(trendingMoviesImages);
    useEffect(() => {
        callMovieApi();
    }, [trendingPage, upcomingPage, topRatedPage, popularPage]);

    return (
        <MovieContext.Provider
            value={{
                title,
                setTitle,
                movieIdApp,
                setMovieIdApp,
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
                trendingMovies,
                setTrendingMovies,
                upcomingMovies,
                setUpcomingMovies,
                popularMovies,
                setPopularMovies,
                topRatedMovies,
                setTopRatedMovies,
                trendingMoviesImages,
                upcomingMoviesImages,
                popularMoviesImages,
                topRatedMoviesImages,
                trendingMoviesLandscapeImages,
                upcomingMoviesLandscapeImages,
                popularMoviesLandscapeImages,
                topRatedMoviesLandscapeImages,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
