import React, { useContext, useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { TypeContext } from "../../../services/TypeContextProviders";
import { SearchContext } from "../../../services/SearchProviders";
import { useParams } from "react-router-dom";

const Searchbar = (props) => {
    const { typeTrending, typeUpcoming, typeTopRated, typePopular, type, setType } =
        useContext(TypeContext);
    const { searchQuery, setSearchQuery, searchMovieQuery, searchTvshowQuery } =
        useContext(SearchContext);

    const params = useParams();
    const changeType = (event) => {
        setType(event.target.value);
    };
    const insertMovie = (event) => {
        event.preventefault();
    };
    props.getType(type);

    console.log({ type });

    return (
        <>
            <form onSubmit={insertMovie}>
                <div className="searchbar-container">
                    <SearchIcon className="search-icon" />
                    <input
                        type="text"
                        className="searchbar"
                        placeholder={`SEARCH ${props.category}`}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </div>
            </form>
            <div className="type-categories">
                {searchQuery?.length < 1 && (
                    <div className="input-type-radio-container">
                        <>
                            <input
                                type="radio"
                                label={typeTrending}
                                name="movie"
                                id={typeTrending}
                                value={typeTrending}
                                onChange={changeType}
                                // checked={type === { typeTrending }}
                                className="type-radio"
                                defaultChecked
                            />

                            <label className="type-label" htmlFor={typeTrending} for={typeTrending}>
                                {props.trending}
                            </label>
                        </>

                        <>
                            <input
                                type="radio"
                                label={typeUpcoming}
                                name="movie"
                                id={typeUpcoming}
                                value={typeUpcoming}
                                onChange={changeType}
                                // checked={type === { typeUpcoming }}
                                className="type-radio"
                            />
                            <label className="type-label" htmlFor={typeUpcoming} for={typeUpcoming}>
                                {props.upcoming}
                            </label>
                        </>

                        <>
                            <input
                                type="radio"
                                label={typeTopRated}
                                name="movie"
                                id={typeTopRated}
                                value={typeTopRated}
                                onChange={changeType}
                                // checked={type === { typeTopRated }}
                                className="type-radio"
                            />
                            <label className="type-label" htmlFor={typeTopRated} for={typeTopRated}>
                                {props.topRated}
                            </label>
                        </>
                        <>
                            <input
                                type="radio"
                                label={typePopular}
                                name="movie"
                                id={typePopular}
                                value={typePopular}
                                onChange={changeType}
                                // checked={type === { typePopular }}
                                className="type-radio"
                            />
                            <label className="type-label" htmlFor={typePopular} for={typePopular}>
                                {props.popular}
                            </label>
                        </>
                    </div>
                )}
            </div>
            {searchQuery !== "" && (
                <>
                    {Object.keys(params)[0] === "movies" && (
                        <>
                            <h2 className="search-results">
                                {searchMovieQuery.total_results} search results found
                            </h2>
                        </>
                    )}
                    {Object.keys(params)[0] === "tv" && (
                        <>
                            <h2 className="search-results">
                                {searchTvshowQuery.total_results} search results found
                            </h2>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Searchbar;
