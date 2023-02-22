import React, { createContext, useContext } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "../../../styles/ItemCard.css";
import { Link } from "react-router-dom";
import { TvshowContext } from "../../../services/TvshowContextProviders";

const TvshowCard = (props) => {
    const { tvshowIdApp, setTvshowIdApp, tvtitle, setTvtitle } = useContext(TvshowContext);
    const tvshowDetail = (movied, mtitle) => {
        setTvshowIdApp(movied);
        setTvtitle(mtitle);
        console.log(movied);
    };
    return (
        <>
            <div
                className="item-card-container"
                onClick={() => {
                    tvshowDetail(props.tvId, props.title);
                    console.log(props.movieId);
                }}
            >
                <Link to={`/tv-shows/:${props.tvId}`}>
                    <div className="item-card-image-container">
                        <img src={props.imgUrl} alt={props.title} className="item-card-image" />
                    </div>

                    <div className="item-card-text-container">
                        <h4 className="item-card-title">{props.title}</h4>
                        <div className="item-card-rating-data">
                            <StarBorderSharpIcon className="item-card-star" />
                            <p className="item-card-rating">{props.rating}/10</p>
                        </div>

                        {/* <h4 className="item-card-title">
                            {props.title.length >= 25
                                ? `${props.title.slice(0, 18)}...`
                                : props.title}
                        </h4> */}
                    </div>
                </Link>
            </div>
        </>
    );
};

export default TvshowCard;
