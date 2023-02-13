import React, { createContext, useEffect, useState } from "react";
import "./Searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Movie from "../Movie/Movie";
import Tvshow from "../Tvshow/Tvshow";

const Searchbar = (props) => {
    let [type, setType] = useState("trending");
    const changeType = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    };

    props.getType(type);

    return (
        <>
            <div className="searchbar-container">
                <SearchIcon className="search-icon" />
                {/* <input className="searchbar" placeholder={`SEARCH ${props.category}`} /> */}
                <input className="searchbar" placeholder="" />
            </div>
            <div className="type-categories">
                <input
                    type="radio"
                    label="trending"
                    name="movie"
                    id="trending"
                    value="trending"
                    onChange={changeType}
                    checked={type === "trending"}
                    className="type-radio"
                />
                <label className="type-label" for="trending">
                    Trending
                </label>

                <input
                    type="radio"
                    label="upcoming"
                    name="movie"
                    id="upcoming"
                    value="upcoming"
                    onChange={changeType}
                    checked={type === "upcoming"}
                    className="type-radio"
                />
                <label className="type-label" for="upcoming">
                    Upcoming
                </label>

                <input
                    type="radio"
                    label="top-rated"
                    name="movie"
                    id="top-rated"
                    value="top-rated"
                    onChange={changeType}
                    checked={type === "top-rated"}
                    className="type-radio"
                />
                <label className="type-label" for="top-rated">
                    Top Rated
                </label>

                <input
                    type="radio"
                    label="popular"
                    name="movie"
                    id="popular"
                    value="popular"
                    onChange={changeType}
                    checked={type === "popular"}
                    className="type-radio"
                />
                <label className="type-label" for="popular">
                    Popular
                </label>
            </div>
        </>
    );
};

export default Searchbar;
