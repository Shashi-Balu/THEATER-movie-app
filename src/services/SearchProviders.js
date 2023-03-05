import React, { createContext, useEffect, useState } from "react";
import { url } from "./apis/movieUrl";

export const SearchContext = createContext();
const SearchProviders = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchMovieQuery, setSearchMovieQuery] = useState("");
    const [searchMovieQueryData, setSearchMovieQueryData] = useState("");

    const [searchTvshowQuery, setSearchTvshowQuery] = useState("");
    const [searchTvshowQueryData, setSearchTvshowQueryData] = useState("");

    const [searchQueryPage, setSearchQueryPage] = useState(1);
    const [totalSearchQueryPages, setTotalSearchQueryPages] = useState(10);

    console.log("context", searchQuery);

    const callsearchMovieQueryApi = async () => {
        const searchMovieQueryApi = await (
            await fetch(
                `${url}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&include_adult=false&page=${searchQueryPage}`
            )
        ).json();
        console.log({ searchMovieQueryApi });
        setSearchMovieQuery(searchMovieQueryApi);
        setSearchMovieQueryData(searchMovieQueryApi.results);
        setTotalSearchQueryPages(searchMovieQueryApi.total_pages);
    };

    const callsearchTvshowQueryApi = async () => {
        const searchTvshowQueryApi = await (
            await fetch(
                `${url}/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}&include_adult=false&page=${searchQueryPage}`
            )
        ).json();
        console.log({ searchTvshowQueryApi });
        setSearchTvshowQuery(searchTvshowQueryApi);
        setSearchTvshowQueryData(searchTvshowQueryApi.results);
        setTotalSearchQueryPages(searchTvshowQueryApi.total_pages);
    };

    useEffect(() => {
        callsearchMovieQueryApi();
        callsearchTvshowQueryApi();
    }, [searchQuery, searchQueryPage]);
    return (
        <div>
            <SearchContext.Provider
                value={{
                    searchQueryPage,
                    setSearchQueryPage,
                    searchQuery,
                    setSearchQuery,
                    searchMovieQuery,
                    searchMovieQueryData,
                    searchTvshowQuery,
                    searchTvshowQueryData,
                    totalSearchQueryPages,
                    searchQueryPage,
                }}
            >
                {children}
            </SearchContext.Provider>
        </div>
    );
};

export default SearchProviders;
