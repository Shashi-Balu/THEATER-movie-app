import React from "react";
import "./ItemCast.css";

const ItemCast = (props) => {
    return (
        <>
            <h2 className="item-cast-heading">Cast</h2>
            <div className="item-cast-container">
                {props.cast?.map((profile) => (
                    <div className="item-cast-img-container">
                        <>
                            {profile.profile_path !== null ? (
                                <img
                                    className="item-profile-img"
                                    src={`https://image.tmdb.org/t/p/w342/${profile.profile_path}`}
                                />
                            ) : (
                                <div className="item-profile-img item-img-not-available">
                                    Image not available
                                </div>
                            )}
                        </>

                        <p>{profile.original_name}</p>
                        <p>-{profile.character}-</p>
                        <p>-{profile.known_for_department}-</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ItemCast;
