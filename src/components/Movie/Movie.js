import React, { useContext } from "react";
import { MovieContext } from "../MovieProviders/MovieProviders";

const Movie = (props) => {
    return (
        <div>
            {props.id} name {props.title}
        </div>
    );
};

export default Movie;
