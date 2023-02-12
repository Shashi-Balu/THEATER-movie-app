import React, { createContext, useEffect, useState } from "react";
import { url } from "./apis/movieUrl";

export const GenreContext = createContext();

export const GenreContextProviders = ({ children }) => {
    const [genreData, setGenreData] = useState([]);

    async function callGenreApi() {
        const genreApi = await (
            await fetch(`${url}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        const genreApiData = genreApi.genres;
        setGenreData(genreApiData);
        console.log(genreData);
    }

    useEffect(() => {
        callGenreApi();
    });
    return (
        <div>
            <GenreContext.Provider
                value={{
                    genreData,
                    setGenreData,
                }}
            >
                {children}
            </GenreContext.Provider>
        </div>
    );
};
