import React, { useContext } from "react";
import { MovieContext } from "../MovieProviders/MovieProviders";

const Movie = (props) => {
    return <div>{props.movieId} hi</div>;
};

export default Movie;
