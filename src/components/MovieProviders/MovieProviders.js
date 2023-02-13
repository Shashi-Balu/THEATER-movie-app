import React, { createContext, useState, useEffect } from "react";
import { url } from "../../services/apis/movieUrl";

export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);

    async function callMovieApi() {
        const trendingMoviesApi = await (
            await fetch(`${url}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const trendingMoviesApiData = trendingMoviesApi.results;
        setTrendingMovies(trendingMoviesApiData);

        const upcomingMoviesApi = await (
            await fetch(`${url}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const upcomingMoviesApiData = upcomingMoviesApi.results;
        setUpcomingMovies(upcomingMoviesApiData);

        const popularMoviesApi = await (
            await fetch(`${url}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
        ).json();
        const popularMoviesApiData = popularMoviesApi.results;
        setPopularMovies(popularMoviesApiData);

        const topRatedMoviesApi = await (
            await fetch(`${url}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const topRatedMoviesApiData = topRatedMoviesApi.results;
        setTopRatedMovies(topRatedMoviesApiData);

        const tvshowsApi = await (
            await fetch(`${url}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const tvshowsApiData = tvshowsApi.results;
        setTvshows(tvshowsApiData);
    }

    const trendingMoviesImages = trendingMovies.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const upcomingMoviesImages = upcomingMovies.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const popularMoviesImages = popularMovies.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const topRatedMoviesImages = topRatedMovies.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const latestMoviesImages = latestMovies.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );
    const tvshowsImages = tvshows.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    );

    useEffect(() => {
        callMovieApi();
    }, []);

    return (
        <MovieContext.Provider
            value={{
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
