import React, { useContext, useEffect } from "react";
import TvshowCard from "../../TvshowsComponent/TvshowCard/TvshowCard";
import "../../../styles/ItemPage.css";
import "./ItemSimilarItems.css";
import { TvshowContext } from "../../../services/TvshowContextProviders";
import { Link, useNavigate } from "react-router-dom";
import TvshowDetailProvider from "../../../services/TvshowDetailProvider";
import AppPagination from "../../sections/AppPagination/AppPagination";
import { MovieContext } from "../../../services/MovieContextProviders";
import MovieCard from "../../MoviesComponent/MovieCard/MovieCard";

const ItemSimilarItems = (props) => {
    const navigate = useNavigate();
    const {
        tvshowIdApp,
        setTvshowIdApp,
        tvtitle,
        setTvtitle,
        tvshowSimilarPage,
        setTvshowSimilarPage,
        totalSimilarPages,
    } = useContext(TvshowContext);
    let tvshowDetail = (tvId) => {
        setTvshowIdApp(tvId);
    };
    let movieDetail = (movieId) => {
        setMovieIdApp(movieId);
    };

    const { movieIdApp, setMovieIdApp } = useContext(MovieContext);
    // console.log({ tvshowSimilarPage });

    useEffect(() => {
        tvshowDetail = (tvId) => {
            navigate(`/tv-shows/:${tvId}cxxgxvv`, { replace: true });
            console.log({ tvId });
        };
        movieDetail = (movieId) => {
            navigate(`/movies/:${movieId}cxxgxvv`, { replace: true });
            console.log({ movieId });
        };
    }, [tvshowIdApp, movieIdApp]);

    return (
        <>
            <h2 className="item-similar-heading">More like this</h2>

            <div className="items-item-container">
                {props.tvshowSimilar?.map((item) => {
                    return (
                        <div
                            onClick={() => {
                                tvshowDetail(item.id);
                                setTvshowIdApp(item.id);
                            }}
                        >
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
                })}
                {props.movieSimilar?.map((item) => {
                    return (
                        <div
                            onClick={() => {
                                movieDetail(item.id);
                                setMovieIdApp(item.id);
                            }}
                        >
                            <Link to={`/movies/:${item.id}cbbfbs`} className="color">
                                <MovieCard
                                    title={item.title}
                                    imgUrl={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    rating={item?.vote_average.toFixed(1)}
                                    tvId={item.id}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>

            <div className="item-pagination-container">
                <AppPagination
                    setPage={setTvshowSimilarPage}
                    page={tvshowSimilarPage}
                    pageNumbers={totalSimilarPages}
                />
            </div>
        </>
    );
};

export default ItemSimilarItems;
