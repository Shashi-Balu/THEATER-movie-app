import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
    return (
        <>
            <div className="item-detail-content-container">
                <div className="item-detail-poster">
                    <img
                        className="item-detail-poster-img"
                        src={`https://image.tmdb.org/t/p/original/${props.poster}`}
                    />
                </div>
                <div className="item-detail-content-data-container">
                    <p className="item-detail-data-description">{props.description}</p>

                    <div className="item-detail-data-para">
                        <div className="item-detail-data-heading">
                            <p>Release Date:</p>
                            <p>Available Language:</p>
                            <p>Revenue:</p>
                            <p> Duration:</p>
                            <p> Status:</p>
                            <p> Genres:</p>
                        </div>

                        <div className="item-detail-data-content">
                            <p>{props.release_date}</p>
                            <p className="item-detail-language">{props.language}</p>
                            <p>${props.revenue}</p>
                            <p>{props.duration}mins</p>
                            <p>{props.status}</p>
                            {props.genres?.map((genre) => (
                                <span className="item-detail-data-para-genres">
                                    {genre.name}&emsp;
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
