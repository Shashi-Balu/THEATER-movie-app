import React, { useContext } from "react";
import { MovieContext } from "../../../services/MovieContextProviders";
import { TypeContext } from "../../../services/TypeContextProviders";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./Explore.css";
import { TvshowContext } from "../../../services/TvshowContextProviders";
import { useMediaQuery } from "react-responsive";

function Explore() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 630px)",
    });

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
        trendingMoviesLandscapeImages,
        upcomingMoviesLandscapeImages,
        popularMoviesLandscapeImages,
        topRatedMoviesLandscapeImages,
    } = useContext(MovieContext);

    const { tvshowsImages, tvshowsLandscapeImages } = useContext(TvshowContext);
    return (
        <>
            <div className="explore-container">
                <p className="explore-title">explore</p>
            </div>
            <div className="explore-cards">
                {isDesktopOrLaptop ? (
                    <>
                        <div onClick={() => trendingSection()}>
                            <Card
                                img={trendingMoviesImages[0]}
                                title="trending"
                                className="card-image"
                            />
                        </div>
                        <div onClick={upcomingSection}>
                            <Card
                                img={upcomingMoviesImages[0]}
                                title="upcoming"
                                className="card-image"
                            />
                        </div>
                        <div onClick={topRatedSection}>
                            <Card
                                img={topRatedMoviesImages[0]}
                                title="top rated"
                                className="card-image"
                            />
                        </div>
                        <div onClick={popularSection}>
                            <Card
                                img={popularMoviesImages[0]}
                                title="popular"
                                className="card-image"
                            />
                        </div>
                        <div onClick={tvshowsSection}>
                            <Card img={tvshowsImages[0]} title="tv shows" className="card-image" />
                        </div>
                    </>
                ) : (
                    <>
                        <div onClick={() => trendingSection()}>
                            <Card
                                img={trendingMoviesLandscapeImages[0]}
                                title="trending"
                                className="card-image"
                            />
                        </div>
                        <div onClick={upcomingSection}>
                            <Card
                                img={upcomingMoviesLandscapeImages[0]}
                                title="upcoming"
                                className="card-image"
                            />
                        </div>
                        <div onClick={topRatedSection}>
                            <Card
                                img={topRatedMoviesLandscapeImages[0]}
                                title="top rated"
                                className="card-image"
                            />
                        </div>
                        <div onClick={popularSection}>
                            <Card
                                img={popularMoviesLandscapeImages[0]}
                                title="popular"
                                className="card-image"
                            />
                        </div>
                        <div onClick={tvshowsSection}>
                            <Card
                                img={tvshowsLandscapeImages[0]}
                                title="tv shows"
                                className="card-image"
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Explore;
