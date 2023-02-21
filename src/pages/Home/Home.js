import React from "react";
import Carousel from "../../components/sections/Carousel/Carousel";
import Explore from "../../components/sections/Explore/Explore";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="home-topbar">
                <Carousel className="home-navbar" />
            </div>
            <div>
                <Explore className="home-explore" />
            </div>
        </>
    );
}

export default Home;
