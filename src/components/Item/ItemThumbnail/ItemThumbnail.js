import React from "react";
import "./ItemThumbnail.css";

const ItemThumbnail = (props) => {
    return (
        <>
            <div className="item-thumbnail-container">
                {props.movieThumbnails?.map((thumbnail) => (
                    <img
                        className="item-thumbnail"
                        src={`https://image.tmdb.org/t/p/w500/${thumbnail.file_path}`}
                    />
                ))}
            </div>
        </>
    );
};

export default ItemThumbnail;
