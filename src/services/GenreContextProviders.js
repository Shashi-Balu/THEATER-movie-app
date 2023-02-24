import React, { createContext, useEffect, useState } from "react";
import { url } from "./apis/movieUrl";

export const GenreContext = createContext();

export const GenreContextProviders = ({ children }) => {
    const [movieGenreData, setMovieGenreData] = useState([]);
    const [tvGenreData, setTvGenreData] = useState([]);

    async function callMovieGenreApi() {
        const movieGenreApi = await (
            await fetch(`${url}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        const movieGenreApiData = movieGenreApi.genres;
        setMovieGenreData(movieGenreApiData);
        // console.log(movieGenreData);
    }
    async function callTvGenreApi() {
        const tvGenreApi = await (
            await fetch(`${url}/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        const tvGenreApiData = tvGenreApi.genres;
        setTvGenreData(tvGenreApiData);
        // console.log(tvGenreData);
    }

    useEffect(() => {
        callMovieGenreApi();
        callTvGenreApi();
    }, []);
    return (
        <div>
            <GenreContext.Provider
                value={{
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
