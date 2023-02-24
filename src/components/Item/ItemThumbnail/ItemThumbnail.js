import React from "react";
import "./ItemThumbnail.css";

const ItemThumbnail = (props) => {
    return (
        <>
            <div className="item-thumbnail-container">
                {props.thumbnails.length !== 0 ? (
                    props.thumbnails?.map((thumbnail) => (
                        <img
                            className="item-thumbnail"
                            src={`https://image.tmdb.org/t/p/w500/${thumbnail.file_path}`}
                        />
                    ))
                ) : (
                    <h2>Thumbnails are not available</h2>
                )}
            </div>
        </>
    );
};

export default ItemThumbnail;
