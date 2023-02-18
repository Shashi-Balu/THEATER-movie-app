import React, { createContext, useContext, useState } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./MovieCard.css";
import { useNavigate, Link, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "../Movie/Movie";

export const MovieIdContext = createContext();
const MovieCard = (props, { children }) => {
    const [movieIdApp, setMovieIdApp] = useState(438148);
    const navigate = useNavigate();
    const movieDetail = (movieId) => {
        // let {movieUrl} = useParams();

        navigate(`/movies/:${movieId}`);
        setMovieIdApp(movieId);
    };
    return (
        <>
            <div
                className="movie-card-container"
                onClick={() => {
                    <Routes>
                        <Route
                            path={`/movies/:${props.movieId}`}
                            element={<Movie movieId={props.movieId} />}
                        />
                        {console.log(props.movieId)}
                    </Routes>;
                    movieDetail(props.movieId);
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
                <Outlet />
            </div>

            <>
                <MovieIdContext.Provider value={{ movieIdApp, setMovieIdApp }}>
                    {children}
                </MovieIdContext.Provider>
            </>
        </>
    );
};

export default MovieCard;
