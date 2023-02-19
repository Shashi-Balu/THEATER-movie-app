import React, { createContext, useContext, useState } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./MovieCard.css";
import {
    useNavigate,
    Link,
    Outlet,
    BrowserRouter,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import Movie from "../Movie/Movie";
import { MovieContext } from "../MovieProviders/MovieProviders";

export const MovieIdContext = createContext();

const MovieCard = (props, { children }) => {
    const { movieIdApp, setMovieIdApp, title, setTitle } = useContext(MovieContext);

    // const { id } = useParams();
    // console.log(id);

    const navigate = useNavigate();
    const movieDetail = (movied, mtitle) => {
        // navigate(`movie/:move`);
        setMovieIdApp(movied);
        setTitle(mtitle);
        console.log(movied);
        // console.log(props.title);
    };
    return (
        <>
            <div
                className="movie-card-container"
                onClick={() => {
                    movieDetail(props.movieId, props.title);
                    console.log(props.movieId);
                }}
            >
                <Link to={`/movies/:${props.movieId}`}>
                    <div className="movie-card-image-container">
                        <img src={props.imgUrl} alt={props.title} className="movie-card-image" />
                    </div>

                    <div className="movie-card-rating-data">
                        <StarBorderSharpIcon className="movie-card-star" />

                        <p className="movie-card-rating">{props.rating}/10</p>
                    </div>
                    <h4 className="movie-card-title">
                        {props.title.length >= 25 ? `${props.title.slice(0, 18)}...` : props.title}
                    </h4>
                </Link>
                {/* <Outlet /> */}
            </div>

            <>
                <MovieIdContext.Provider value={{ movieIdApp, setMovieIdApp, title, setTitle }}>
                    {children}
                </MovieIdContext.Provider>
            </>
        </>
    );
};

export default MovieCard;
