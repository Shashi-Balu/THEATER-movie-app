import { Card } from "@mui/material";
import React, { useContext } from "react";
import { MovieContext } from "../MovieProviders/MovieProviders";
import Carousel from "../Carousel/Carousel";
import "./Explore.css";

function Explore() {
    const {
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMoviesImages,
        topRatedMoviesImages,
        popularMoviesImages,
        topRatedTvshowsImages,
        trendingMoviesImages,
        setTrendingMovies,
        setUpcomingMovies,
        setPopularMovies,
        setTopRatedMovies,
        tvshowsImages,
    } = useContext(MovieContext);
    return (
        <>
            <div className="explore-container">
                <p className="explore-title">Explore</p>
            </div>
            <div className="explore-cards">
                <Card img={trendingMoviesImages[0]} title="trending" />
                <Card img={upcomingMoviesImages[0]} title="upcoming" />
                <Card img={topRatedTvshowsImages[0]} title="top rated" />
                <Card img={popularMoviesImages[0]} title="popular" />
                <Card img={tvshowsImages[0]} title="tv shows" />
            </div>
        </>
    );
}

export default Explore;
