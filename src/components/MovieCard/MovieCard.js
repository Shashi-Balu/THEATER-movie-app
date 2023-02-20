import React, { useContext } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { MovieContext } from "../MovieProviders/MovieProviders";

const MovieCard = (props) => {
    const { setMovieIdApp, setTitle } = useContext(MovieContext);

    const movieDetail = (movied, mtitle) => {
        setMovieIdApp(movied);
        setTitle(mtitle);
        console.log(movied);
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
            </div>

            <></>
        </>
    );
};

export default MovieCard;
