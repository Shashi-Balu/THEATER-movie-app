import React, { useContext } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Explore from "../../components/Explore/Explore";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { MovieContext } from "../../components/MovieProviders/MovieProviders";
import "./Home.css";

function Home() {
    const {
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMoviesImages,
        topRatedMoviesImages,
        popularMoviesImages,
        topRatedImages,
        trendingMoviesImages,
        setTrendingMovies,
        setUpcomingMovies,
        setPopularMovies,
        setTopRatedMovies,
        tvshowsImages,
    } = useContext(MovieContext);
    return (
        <>
            <div className="home-topbar">
                <Navbar className="home-navbar" />
                <Carousel className="home-navbar" />
            </div>
            <div>
                <Explore className="home-explore"></Explore>
                {/* <Card /> */}
                <div className="home-cards">
                    <Card img={trendingMoviesImages[0]} title="trending" className="card-image" />
                    <Card img={upcomingMoviesImages[0]} title="upcoming" className="card-image" />
                    <Card img={topRatedMoviesImages[0]} title="top rated" className="card-image" />
                    <Card img={popularMoviesImages[0]} title="popular" className="card-image" />
                    <Card img={tvshowsImages[0]} title="tv shows" className="card-image" />
                </div>
            </div>
        </>
    );
}

export default Home;
