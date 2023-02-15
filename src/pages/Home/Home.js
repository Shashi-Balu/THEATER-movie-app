import React, { useContext } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Explore from "../../components/Explore/Explore";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { MovieContext } from "../../components/MovieProviders/MovieProviders";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const trendingSection = () => {
        navigate("/movies");
        window.scroll(0, 0);
        console.log("trending");
    };
    const upcomingSection = () => {
        navigate("/movies");
        window.scroll(0, 0);
        console.log("trending");
    };
    const topRatedSection = () => {
        navigate("/movies");
        window.scroll(0, 0);
        console.log("trending");
    };
    const popularSection = () => {
        navigate("/movies");
        window.scroll(0, 0);
        console.log("trending");
    };
    const tvshowsSection = () => {
        navigate("/movies");
        window.scroll(0, 0);
        console.log("trending");
    };
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
                    <Card
                        img={trendingMoviesImages[0]}
                        title="trending"
                        className="card-image"
                        onClick={() => trendingSection()}
                    />

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
