import React from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./TvshowCard.css";

const TvshowCard = (props) => {
    return (
        <>
            <div className="tvshow-card-container">
                <div className="tvshow-card-image-container">
                    <img src={props.imgUrl} alt={props.title} className="tvshow-card-image" />
                </div>

                <div className="tvshow-card-rating-data">
                    <StarBorderSharpIcon className="tvshow-card-star" />
                    <p className="tvshow-card-rating">{props.rating}/10</p>
                </div>
                <h4 className="tvshow-card-title">
                    {props.title.length >= 25 ? `${props.title.slice(0, 18)}...` : props.title}
                </h4>
            </div>
        </>
    );
};

export default TvshowCard;
