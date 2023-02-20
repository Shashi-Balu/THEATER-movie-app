import React, { createContext, useContext, useEffect, useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Movie from "../MovieDetailProviders/MovieDetailProviders";
import Tvshow from "../Tvshow/Tvshow";
import { TypeContext } from "../../services/TypeProviders";

const Searchbar = (props) => {
    const { typeTrending, typeUpcoming, typeTopRated, typePopular, type, setType } =
        useContext(TypeContext);
    // let [type, setType] = useState("trending");
    const changeType = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    };

    props.getType(type);
    // props.getTvType(type);

    const trendingSection = () => {};

    return (
        <>
            <div className="searchbar-container">
                <SearchIcon className="search-icon" />
                <input className="searchbar" placeholder={`SEARCH ${props.category}`} />
            </div>

            <div className="type-categories">
                <input
                    type="radio"
                    label={typeTrending}
                    name="movie"
                    id={typeTrending}
                    value={typeTrending}
                    onChange={changeType}
                    checked={type === { typeTrending }}
                    className="type-radio"
                />

                <label className="type-label" for={typeTrending}>
                    {props.trending}
                </label>

                <input
                    type="radio"
                    label={typeUpcoming}
                    name="movie"
                    id={typeUpcoming}
                    value={typeUpcoming}
                    onChange={changeType}
                    checked={type === { typeUpcoming }}
                    className="type-radio"
                />
                <label className="type-label" for={typeUpcoming}>
                    {props.upcoming}
                </label>

                <input
                    type="radio"
                    label={typeTopRated}
                    name="movie"
                    id={typeTopRated}
                    value={typeTopRated}
                    onChange={changeType}
                    checked={type === { typeTopRated }}
                    className="type-radio"
                />
                <label className="type-label" for={typeTopRated}>
                    {props.topRated}
                </label>

                <input
                    type="radio"
                    label={typePopular}
                    name="movie"
                    id={typePopular}
                    value={typePopular}
                    onChange={changeType}
                    checked={type === { typePopular }}
                    className="type-radio"
                />
                <label className="type-label" for={typePopular}>
                    {props.popular}
                </label>
            </div>
        </>
    );
};

export default Searchbar;
