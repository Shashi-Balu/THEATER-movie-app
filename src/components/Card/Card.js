import React, { useContext } from "react";
import { MovieContext } from "../MovieProviders/MovieProviders";
import "./Card.css";

function Card(props) {
    const {
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        trendingMoviesImages,
        upcomingMoviesImages,
        popularMoviesImages,
        topRatedMovieImages,
        setTrendingMovies,
        setUpcomingMovies,
        setPopularMovies,
        setTopRatedMovies,
    } = useContext(MovieContext);
    return (
        <>
            <div className={`card-container ${props.className}`}>
                <p className="card-heading">{props.title}</p>
                <p className="card-plus">+</p>
                <div className="card-image-container">
                    <img className="card-images" src={props.img} />
                </div>
            </div>
        </>
    );
}

export default Card;
