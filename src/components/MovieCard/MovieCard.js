import React from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const navigate = useNavigate();
    const movieDetail = () => {
        navigate(`movie/:${props.movieId}`);
        console.log(props.movieId);
        console.log(props.title);
    };
    return (
        <>
            <div className="movie-card-container" onClick={movieDetail}>
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
            </div>
        </>
    );
};

export default MovieCard;
