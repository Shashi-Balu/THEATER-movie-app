import React from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import "./Item.css";
const Item = (props) => {
    // const rating = props.rating.toFixed(1);

    console.log(props.imgUrl);
    return (
        <>
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
                                <p className="item-detail-rating">
                                    {props.rating}
                                    <span>/10</span>
                                </p>
                            </div>
                        ) : null}
                        <p className="item-detail-release-date">{props.release_date}</p>
                        <p>{props.genreData}</p>
                    </div>
                    <div>
                        <p className="item-detail-description">{props.description}</p>
                    </div>
                </div>
            </div>
            {/* <p className="carousel-genres">
                        {props.genres?.map((item) => {
                            props.genreData?.map((item2) => {
                                if (item === item2.id) {
                                    <p>{item2.name}</p>;
                                }
                            });
                        })}
                    </p>

                    <p className="carousel-description">{props.description}</p>
                </div>
            </div> */}
        </>
    );
};

export default Item;
