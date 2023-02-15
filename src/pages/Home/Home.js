import React, { useContext } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Explore from "../../components/Explore/Explore";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import { MovieContext } from "../../components/MovieProviders/MovieProviders";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import { TypeContext } from "../../services/TypeProviders";
import { useNavigate } from "react-router-dom";

function Home() {
    const {
        typeTrending,
        typeUpcoming,
        typeTopRated,
        typePopular,
        type,
        setType,
        activeComponentStyles,
    } = useContext(TypeContext);
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
        console.log("upcoming");
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
                <Carousel className="home-navbar" />
            </div>
            <div>
                <Explore className="home-explore"></Explore>
                <div className="home-cards">
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
                        <Card img={popularMoviesImages[0]} title="popular" className="card-image" />
                    </div>

                    <div onClick={tvshowsSection}>
                        <Card img={tvshowsImages[0]} title="tv shows" className="card-image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
