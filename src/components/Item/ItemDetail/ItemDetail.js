import React from "react";
import "./ItemDetail.css";
import { imgNotAvailablePortrait } from "../../../services/imgNotAvailable";

const ItemDetail = (props) => {
    console.log(props.poster);
    return (
        <>
            <div className="item-detail-content-container">
                <div className="item-detail-poster">
                    <img
                        className="item-detail-poster-img"
                        src={
                            props.poster !== null
                                ? `https://image.tmdb.org/t/p/original/${props.poster}`
                                : imgNotAvailablePortrait
                        }
                        loading="lazy"
                    />
                </div>
                <div className="item-detail-content-data-container">
                    <p className="item-detail-data-description">{props.description}</p>

                    <div className="item-detail-data-para">
                        <div className="item-detail-data-heading">
                            {props.release_date ? <p>Release Date:</p> : ""}
                            {props.language ? <p>Available Language:</p> : ""}
                            {props.revenue ? <p>Revenue:</p> : ""}
                            {props.duration ? <p> Duration:</p> : ""}
                            {props.status ? <p> Status:</p> : ""}
                            {props.genres ? <p> Genres:</p> : ""}
                            {props.tagline ? <p>Tagline:</p> : ""}
                        </div>

                        <div className="item-detail-data-content">
                            {props.release_date ? <p>{props.release_date}</p> : ""}
                            {props.language ? (
                                <p className="item-detail-language">{props.language}</p>
                            ) : (
                                ""
                            )}

                            {props.revenue ? <p>${props.revenue}</p> : ""}
                            {props.duration ? <p>{props.duration}mins</p> : ""}

                            <p>{props.status}</p>
                            {props.genres?.map((genre) => (
                                <span className="item-detail-data-para-genres">
                                    {genre.name}&emsp;
                                </span>
                            ))}
                            {props.tagline ? <p>{props.tagline}</p> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
