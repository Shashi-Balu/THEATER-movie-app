import React, { createContext, useEffect, useState } from "react";
import { url } from "./apis/movieUrl";

export const GenreContext = createContext();

export const GenreContextProviders = ({ children }) => {
    const [genreIdMovieApp, setGenreIdMovieApp] = useState();
    const [genreIdTvApp, setGenreIdTvApp] = useState();
    const [movieGenreData, setMovieGenreData] = useState([]);
    const [tvGenreData, setTvGenreData] = useState([]);

    // console.log({ genreIdMovieApp });

    async function callMovieGenreApi() {
        const movieGenreApi = await (
            await fetch(`${url}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        const movieGenreApiData = movieGenreApi.genres;
        setMovieGenreData(movieGenreApiData);
        setGenreIdMovieApp(movieGenreApi?.id);
        console.log({ genreIdMovieApp });
    }
    async function callTvGenreApi() {
        const tvGenreApi = await (
            await fetch(`${url}/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        const tvGenreApiData = tvGenreApi.genres;
        setTvGenreData(tvGenreApiData);
    }

    useEffect(() => {
        callMovieGenreApi();
        callTvGenreApi();
    }, [genreIdMovieApp, genreIdTvApp]);

    // console.log({ genreIdMovieApp });
    return (
        <div>
            <GenreContext.Provider
                value={{
                    genreIdMovieApp,
                    setGenreIdMovieApp,
                    genreIdTvApp,
                    setGenreIdTvApp,
                    movieGenreData,
                    tvGenreData,
                    setMovieGenreData,
                    setTvGenreData,
                }}
            >
                {children}
            </GenreContext.Provider>
        </div>
    );
};
