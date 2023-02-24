import React from "react";
import "./ItemEmbedVideo.css";

const ItemEmbedVideo = (props) => {
    return (
        <>
            <div className="item-video-container">
                {props.videos.length !== 0 ? (
                    props.videos?.map((key) => (
                        <iframe
                            // width="500px"
                            // height="600px"
                            frameborder="0"
                            border="0"
                            cellspacing="0"
                            className="item-video"
                            src={`https://www.youtube.com/embed/${key.key}`}
                        ></iframe>
                    ))
                ) : (
                    <h2>Videos are not available</h2>
                )}
            </div>
        </>
    );
};

export default ItemEmbedVideo;
