import React, { createContext, useContext } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./TvshowCard.css";
import { Link } from "react-router-dom";

import { TvshowContext } from "../../../services/TvshowContextProviders";
export const TvshowIdContext = createContext();

const TvshowCard = (props, { children }) => {
    const { tvshowIdApp, setTvshowIdApp, tvtitle, setTvtitle } = useContext(TvshowContext);
    const tvshowDetail = (movied, mtitle) => {
        setTvshowIdApp(movied);
        setTvtitle(mtitle);
        console.log(movied);
    };
    return (
        <>
            <div
                className="tvshow-card-container"
                onClick={() => {
                    tvshowDetail(props.tvId, props.title);
                    console.log(props.movieId);
                }}
            >
                <Link to={`/tv-shows/:${props.tvId}`}>
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
                </Link>
            </div>

            <>
                <TvshowIdContext.Provider
                    value={{ tvshowIdApp, setTvshowIdApp, tvtitle, setTvtitle }}
                >
                    {children}
                </TvshowIdContext.Provider>
            </>
        </>
    );
};

export default TvshowCard;
