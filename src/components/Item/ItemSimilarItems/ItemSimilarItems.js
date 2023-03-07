import React from "react";
import TvshowCard from "../../TvshowsComponent/TvshowCard/TvshowCard";
import "../../../styles/ItemPage.css";
import "./ItemSimilarItems.css";

import { Link, useParams } from "react-router-dom";

import AppPagination from "../../sections/AppPagination/AppPagination";

import MovieCard from "../../MoviesComponent/MovieCard/MovieCard";

const ItemSimilarItems = (props) => {
    const params = useParams();
    const moreLikeThis = document.querySelector(".item-similar-heading");

    return (
        <>
            <h2 className="item-similar-heading">More like this</h2>
            <div className="items-item-container">
                {Object.keys(params)[0] === "tvId" ? (
                    props.tvshowSimilar && props.tvshowSimilar.length !== 0 ? (
                        props.tvshowSimilar?.map((item) => {
                            return (
                                <div>
                                    <Link to={`/tv-shows/:${item.id}cbbfbs`} className="color">
                                        <TvshowCard
                                            title={item.name}
                                            imgUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
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
                            <div>
                                <Link to={`/similar-movies/movieId`} className="color">
                                    <MovieCard
                                        title={item.title}
                                        imgUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
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
