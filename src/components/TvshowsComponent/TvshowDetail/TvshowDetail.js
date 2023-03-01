import React, { useEffect } from "react";
import "../../Item/Item.css";
import Item from "../../Item/Item";

const TvshowDetail = (props) => {
    useEffect(() => {
        props.setTvshowId(props.tvshowId);
    }, []);
    console.log(props.tvshowId);
    return (
        <div>
            <Item
                id={props.tvshowId}
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
                cast={props.tvshowCast}
                tvshowSimilar={props.tvshowSimilar}
                similarPage={props.tvshowSimilarPage}
                totalSimilarPages={props.totalSimilarPages}
                setSimilarPage={props.setTvshowSimilarPage}
            />
        </div>
    );
};

export default TvshowDetail;
