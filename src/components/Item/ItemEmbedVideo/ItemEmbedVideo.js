import React from "react";
import "./ItemEmbedVideo.css";

const ItemEmbedVideo = (props) => {
    return (
        <>
            <div className="item-video-container">
                {props.movieVideos?.map((key) => (
                    <iframe
                        // width="500px"
                        // height="600px"
                        frameborder="0"
                        border="0"
                        cellspacing="0"
                        className="item-video"
                        src={`https://www.youtube.com/embed/${key.key}`}
                    ></iframe>
                ))}
            </div>
        </>
    );
};

export default ItemEmbedVideo;
