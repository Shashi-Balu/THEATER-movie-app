import React from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";

const TvshowCard = (props) => {
    return (
        <div>
            <div className="tvshow-card-container">
                <div className="tvshow-card-image-container">
                    <img src={props.imgUrl} alt={props.name} className="tvshow-card-image" />
                </div>

                <div className="tvshow-card-rating-data">
                    <StarBorderSharpIcon className="tvshow-card-star" />
                    <p className="tvshow-card-rating">{props.rating}/10</p>
                </div>
                <h4 className="tvshow-card-title">
                    {props.name.length >= 25 ? `${props.name.slice(0, 20)}...` : props.name}
                </h4>
            </div>
        </div>
    );
};

export default TvshowCard;
