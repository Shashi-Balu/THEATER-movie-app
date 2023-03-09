import React from "react";
import { useParams } from "react-router-dom";
import Item from "../../Item/Item";
import "../../Item/Item.css";

const MovieDetail = (props) => {
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
                similarPage={props.movieSimilarPage}
                setSimilarPage={props.setMovieSimilarPage}
                totalSimilarPages={props.totalMovieSimilarPages}
            />
        </>
    );
};

export default MovieDetail;
