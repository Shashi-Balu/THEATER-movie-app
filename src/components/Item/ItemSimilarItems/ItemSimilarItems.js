import React from "react";
import TvshowCard from "../../TvshowsComponent/TvshowCard/TvshowCard";
import "../../../styles/ItemPage.css";
import "./ItemSimilarItems.css";
import {
    imgNotAvailablePortrait,
    imgNotAvailableLandscape,
} from "../../../services/imgNotAvailable";
import { Link, useParams } from "react-router-dom";
import AppPagination from "../../sections/AppPagination/AppPagination";
import MovieCard from "../../MoviesComponent/MovieCard/MovieCard";
import { useMediaQuery } from "react-responsive";

const ItemSimilarItems = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 800px)",
    });
    const params = useParams();
    const moreLikeThis = document.querySelector(".item-similar-heading");
    console.log(props.poster_path);

    // let imageToDisplay = ''
    // isDesktopOrLaptop ? imageToDisplay =  : imageToDisplay =

    return (
        <>
            <h2 className="item-similar-heading">More like this</h2>
            <div className="items-item-container">
                {Object.keys(params)[0] === "tvId" ? (
                    props.tvshowSimilar && props.tvshowSimilar.length !== 0 ? (
                        props.tvshowSimilar?.map((item) => {
                            return (
                                <div className="similar-item-card">
                                    <Link to={`/tv-shows/:${item.id}`}>
                                        <TvshowCard
                                            className="color"
                                            title={item.name}
                                            imgUrl={
                                                isDesktopOrLaptop
                                                    ? item.poster_path !== null
                                                        ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                                                        : imgNotAvailablePortrait
                                                    : item.backdrop_path !== null
                                                    ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                                                    : imgNotAvailableLandscape
                                            }
                                            rating={item?.vote_average.toFixed(1)}
                                            tvId={item.id}
                                        />
                                    </Link>
                                </div>
                            );
                        })
                    ) : (
                        <h2 className="similar-not-available">
                            Currently no Similar Tv shows available
                        </h2>
                    )
                ) : props.movieSimilar && props.movieSimilar.length !== 0 ? (
                    props.movieSimilar?.map((item) => {
                        return (
                            <div className="similar-item-card">
                                <Link to={`/movies/${item.id}`}>
                                    <MovieCard
                                        title={item.title}
                                        imgUrl={
                                            isDesktopOrLaptop
                                                ? item.poster_path !== null
                                                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                                                    : imgNotAvailablePortrait
                                                : item.backdrop_path !== null
                                                ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                                                : imgNotAvailableLandscape
                                        }
                                        rating={item?.vote_average.toFixed(1)}
                                        movieId={item.id}
                                    />
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <h2 className="similar-not-available">Currently no Similar Movies available</h2>
                )}
            </div>

            {(props.movieSimilar && props.movieSimilar.length !== 0) ||
            (props.tvshowSimilar && props.tvshowSimilar.length !== 0) ? (
                <div className="item-pagination-container">
                    <AppPagination
                        scrollToThis={moreLikeThis}
                        setPage={props.setSimilarPage}
                        page={props.tvshowSimilarPage}
                        pageNumbers={props.totalSimilarPages}
                    />
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default ItemSimilarItems;
