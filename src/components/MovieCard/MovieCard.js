import React from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./MovieCard.css";

const MovieCard = (props) => {
    return (
        <>
            <div className="movie-card-container">
                <div className="movie-card-image-container">
                    <img src={props.imgUrl} alt={props.title} className="movie-card-image" />
                </div>

                <div className="movie-card-rating-data">
                    <StarBorderSharpIcon className="movie-card-star" />
                    <p className="movie-card-rating">{props.rating}/10</p>
                </div>
                <h4 className="movie-card-title">
                    {props.title.length >= 25 ? `${props.title.slice(0, 20)}...` : props.title}
                </h4>
            </div>
        </>
    );
};

export default MovieCard;
