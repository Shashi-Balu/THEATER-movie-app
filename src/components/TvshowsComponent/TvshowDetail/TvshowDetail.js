import React from "react";
import "../../Item/Item.css";
import Item from "../../Item/Item";

const TvshowDetail = (props) => {
    return (
        <div>
            <Item
                title={props.tvshowTitle}
                imgUrl={props.tvshowImgUrl}
                rating={props.tvshowRating}
                release_date={props.tvshowReleaseDate}
                description={props.tvshowDescription}
                genres={props.tvshowGenres}
                poster={props.tvshowPoster}
                language={props.tvshowLanguage}
                tagline={props.tvshowTagline}
                duration={props.tvshowDuration}
                status={props.tvshowStatus}
                videos={props.tvshowVideos}
                thumbnails={props.tvshowThumbnails}
            />
        </div>
    );
};

export default TvshowDetail;
