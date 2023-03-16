import React, { useContext } from "react";
import { MovieContext } from "../../../services/MovieContextProviders";
import { TypeContext } from "../../../services/TypeContextProviders";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./Explore.css";
import { TvshowContext } from "../../../services/TvshowContextProviders";

function Explore() {
    const { typeTrending, typeUpcoming, typeTopRated, typePopular, setType } =
        useContext(TypeContext);
    const navigate = useNavigate();

    const trendingSection = () => {
        navigate("/movies");
        window.scroll(0, 0);
        setType(typeTrending);
    };
    const upcomingSection = () => {
        navigate("/movies");
        setType(typeUpcoming);
        window.scroll(0, 0);
    };
    const topRatedSection = () => {
        navigate("/movies");
        setType(typeTopRated);
        window.scroll(0, 0);
    };
    const popularSection = () => {
        navigate("/movies");
        setType(typePopular);
        window.scroll(0, 0);
    };
    const tvshowsSection = () => {
        navigate("/tv-shows");
        setType(typeTrending);
        window.scroll(0, 0);
    };
    const {
        upcomingMoviesImages,
        topRatedMoviesImages,
        popularMoviesImages,
        trendingMoviesImages,
    } = useContext(MovieContext);

    const { tvshowsImages } = useContext(TvshowContext);
    return (
        <>
            <div className="explore-container">
                <p className="explore-title">explore</p>
            </div>
            <div className="explore-cards">
                <div onClick={() => trendingSection()}>
                    <Card img={trendingMoviesImages[0]} title="trending" className="card-image" />
                </div>

                <div onClick={upcomingSection}>
                    <Card img={upcomingMoviesImages[0]} title="upcoming" className="card-image" />
                </div>

                <div onClick={topRatedSection}>
                    <Card img={topRatedMoviesImages[0]} title="top rated" className="card-image" />
                </div>

                <div onClick={popularSection}>
                    <Card img={popularMoviesImages[0]} title="popular" className="card-image" />
                </div>

                <div onClick={tvshowsSection}>
                    <Card img={tvshowsImages[0]} title="tv shows" className="card-image" />
                </div>
            </div>
        </>
    );
}

export default Explore;
