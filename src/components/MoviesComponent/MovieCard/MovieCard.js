import React, { useContext } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "../../../styles/ItemCard.css";
import { Link } from "react-router-dom";

import { imgNotAvailablePortrait } from "../../../services/imgNotAvailable";

const MovieCard = (props) => {
    return (
        <>
            <div className="item-card-container">
                <Link
                    to={`/movies/${props.movieId}`}
                    onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
                >
                    <div className="item-card-image-container">
                        <img
                            src={props.imgUrl !== "" ? props.imgUrl : imgNotAvailablePortrait}
                            alt={props.title}
                            className="item-card-image"
                            loading="lazy"
                        />
                    </div>

                    <div className="item-card-text-container">
                        <h4 className="item-card-title">{props.title}</h4>

                        <div className="item-card-rating-data">
                            <StarBorderSharpIcon className="item-card-star" />

                            <p className="item-card-rating">{props.rating}/10</p>
                        </div>
                    </div>
                    {/* <h4 className="item-card-title">
                        {props.title.length >= 25 ? `${props.title.slice(0, 18)}...` : props.title}
                    </h4> */}
                </Link>
            </div>
        </>
    );
};

export default MovieCard;
