import React, { useState } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./Item.css";
import ItemDetail from "./ItemDetail/ItemDetail";
import ItemEmbedVideo from "./ItemEmbedVideo/ItemEmbedVideo";
import ItemThumbnail from "./ItemThumbnail/ItemThumbnail";
import ItemCast from "./ItemCast/ItemCast";
import ItemSimilarItems from "./ItemSimilarItems/ItemSimilarItems";
import TvshowCard from "../TvshowsComponent/TvshowCard/TvshowCard";
const Item = (props) => {
    const [itemType, setItemType] = useState("itemTypeDetail");
    const [itemTypeDetail, setItemTypeDetail] = useState("itemTypeDetail");
    const [itemTypeVideos, setItemTypeVideos] = useState("itemTypeVideos");
    const [itemTypeThumbnails, setItemTypeThumbnails] = useState("itemTypeThumbnails");
    const handleItemType = (event) => {
        setItemType(event.target.value);
        console.log(event.target.value);
    };

    return (
        <>
            <div className="item-container">
                <div className="item-detail-container">
                    <img
                        className="item-detail-img"
                        src={`https://image.tmdb.org/t/p/original/${props.imgUrl}`}
                    />
                    <div className="item-detail-data-container">
                        <h2 className="item-detail-title">{props.title}</h2>

                        <div className="item-detail-data">
                            {props.rating !== 0 ? (
                                <div className="item-detail-rating-data">
                                    <StarBorderSharpIcon className="item-detail-star" />
                                    <p className="item-detail-rating">{props.rating}/10</p>
                                </div>
                            ) : null}
                            <p className="item-detail-release-date">{props.release_date}</p>
                            <div className="item-detail-data-genres-container">
                                {props.genres?.map((genre) => (
                                    <span className="item-detail-data-genres">
                                        {genre.name}&emsp;
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="item-detail-description">{props.description}</p>
                        </div>
                    </div>
                </div>
                <>
                    <div className="item-choose-detail">
                        <input
                            type="radio"
                            name="itemType"
                            label={itemTypeDetail}
                            id={itemTypeDetail}
                            value={itemTypeDetail}
                            onChange={handleItemType}
                            className="item-type-radio"
                        />
                        <label
                            className="item-choose-label item-choose-label-first"
                            htmlFor={itemTypeDetail}
                        >
                            Details
                        </label>

                        <input
                            type="radio"
                            name="itemType"
                            label={itemTypeVideos}
                            id={itemTypeVideos}
                            value={itemTypeVideos}
                            onChange={handleItemType}
                            className="item-type-radio"
                        />
                        <label className="item-choose-label" htmlFor={itemTypeVideos}>
                            Videos
                        </label>

                        <input
                            type="radio"
                            name="itemType"
                            label={itemTypeThumbnails}
                            id={itemTypeThumbnails}
                            value={itemTypeThumbnails}
                            onChange={handleItemType}
                            className="item-type-radio"
                        />
                        <label className="item-choose-label" htmlFor={itemTypeThumbnails}>
                            Thumbnails
                        </label>
                    </div>
                    <>
                        {(() => {
                            switch (itemType) {
                                case "itemTypeDetail":
                                    return (
                                        <ItemDetail
                                            imgUrl={props.imgUrl}
                                            poster={props.poster}
                                            language={props.language}
                                            revenue={props.revenue}
                                            duration={props.duration}
                                            status={props.status}
                                            title={props.title}
                                            rating={props.rating}
                                            release_date={props.release_date}
                                            tagline={props.tagline}
                                            genres={props.genres}
                                            description={props.description}
                                        />
                                    );
                                case "itemTypeVideos":
                                    return (
                                        <ItemEmbedVideo videos={props.videos} />

                                        // <iframe src={`https://www.youtube.com/watch?v=-${key.key}`}></iframe>
                                        // <p>{props.movieVideos?.map((key) => console.log(key.key))}</p>
                                    );
                                case "itemTypeThumbnails":
                                    return <ItemThumbnail thumbnails={props.thumbnails} />;
                            }
                        })()}
                    </>
                </>
            </div>
            <>
                <div className="item-cast">
                    <ItemCast cast={props.cast} />
                </div>
            </>

            <>
                <ItemSimilarItems
                    tvshowSimilar={props.tvshowSimilar}
                    movieSimilar={props.movieSimilar}
                    tvshowSimilarPage={props.tvshowSimilarPage}
                    // totalSimilarPages={props.totalSimilarPages}
                    setTvshowSimilarPage={props.setTvshowSimilarPage}
                    similarPage={props.similarPage}
                    setSimilarPage={props.setSimilarPage}
                    totalSimilarPages={props.totalSimilarPages}
                />
            </>
        </>
    );
};

export default Item;
