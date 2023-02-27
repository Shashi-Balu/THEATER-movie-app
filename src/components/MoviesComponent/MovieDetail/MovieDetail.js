import React from "react";
import Item from "../../Item/Item";
import "../../Item/Item.css";

const MovieDetail = (props) => {
    console.log(props.similar);
    return (
        <>
            <Item
                title={props.movieTitle}
                imgUrl={props.movieImgUrl}
                rating={props.movieRating}
                release_date={props.movieReleaseDate}
                description={props.movieDescription}
                genres={props.movieGenres}
                poster={props.moviePoster}
                language={props.movieLanguage}
                revenue={props.movieRevenue}
                budget={props.movieBudget}
                duration={props.movieDuration}
                status={props.movieStatus}
                videos={props.movieVideos}
                thumbnails={props.movieThumbnails}
                cast={props.movieCast}
                movieSimilar={props.movieSimilar}
            />
        </>
    );
};

export default MovieDetail;
