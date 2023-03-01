import React, { createContext, useContext } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "../../../styles/ItemCard.css";
import { Link } from "react-router-dom";
import { TvshowContext } from "../../../services/TvshowContextProviders";
import { useParams } from "react-router-dom";

const TvshowCard = (props) => {
    const { tvshowIdApp, setTvshowIdApp } = useContext(TvshowContext);
    let { tvId } = useParams();
    // console.log("ddfbd", tvId);

    const tvshowDetail = (movied) => {
        setTvshowIdApp(movied);
    };
    return (
        <>
            <div
                className="item-card-container"
                onClick={() => {
                    tvshowDetail(props.tvId);
                    console.log(props.tvId);
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
                    </div>
                </Link>
            </div>
        </>
    );
};

export default TvshowCard;
