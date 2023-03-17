import React from "react";
import { useMediaQuery } from "react-responsive";
import "./ItemCast.css";

const ItemCast = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1100px)",
    });
    return (
        <>
            <h2 className="item-cast-heading">Cast</h2>
            <div className="item-cast-container">
                {props.cast && props.cast.length !== 0 ? (
                    props.cast?.map((profile) => (
                        <>
                            <div className="item-cast-img-container">
                                <>
                                    {profile.profile_path !== null ? (
                                        <img
                                            className="item-profile-img"
                                            src={`https://image.tmdb.org/t/p/w342/${profile.profile_path}`}
                                        />
                                    ) : (
                                        <div className="item-profile-img item-img-not-available">
                                            <p>Image not available</p>
                                        </div>
                                    )}
                                </>
                                <p className="item-cast-name">{profile.original_name}</p>

                                {isDesktopOrLaptop && (
                                    <div className="item-cast-overflow">
                                        <div className="item-cast-fiction">
                                            <p className="item-cast-character">
                                                Character: <span>{profile.character}</span>
                                            </p>
                                            <p className="item-cast-profession">
                                                Profession:{" "}
                                                <span>{profile.known_for_department}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ))
                ) : (
                    <h2 className="cast-not-available">Cast Data not available</h2>
                )}
            </div>
        </>
    );
};

export default ItemCast;
