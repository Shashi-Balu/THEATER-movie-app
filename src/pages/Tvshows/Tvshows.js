import React, { useState, useContext } from "react";
import { TvshowContext } from "../../components/TvshowProviders/TvshowProviders";
import TvshowCard from "../../components/TvshowCard/TvshowCard";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Tvshows.css";
import AppPagination from "../../components/AppPagination/AppPagination";

function Tvshows() {
    const [displayType, setDisplayType] = useState("");
    const {
        trendingPage,
        setTrendingPage,
        upcomingPage,
        setUpcomingPage,
        topRatedPage,
        setTopRatedPage,
        popularPage,
        setPopularPage,
        totalTrendingPages,
        totalPopularPages,
        totalTopRatedPages,
        totalUpcomingPages,
        trendingTvshows,
        airingTodayTvshows,
        popularTvshows,
        topRatedTvshows,
        trendingTvshowsImages,
        airingTodayTvshowsImages,
        popularTvshowsImages,
        topRatedTvshowsImages,
    } = useContext(TvshowContext);
    return (
        <>
            <Searchbar
                category="TV SHOWS"
                getType={setDisplayType}
                trending="trending"
                upcoming="airing today"
                topRated="top rated"
                popular="popular"
            />

            <div>
                {(() => {
                    switch (displayType) {
                        case "upcoming":
                            return (
                                <>
                                    <div className="tvshow-container">
                                        {airingTodayTvshows?.map((tv, index) => (
                                            <TvshowCard
                                                key={index}
                                                title={tv.name}
                                                rating={tv.vote_average.toFixed(1)}
                                                imgUrl={airingTodayTvshowsImages[index]}
                                                tvId={tv.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="">
                                        <AppPagination
                                            setPage={setUpcomingPage}
                                            page={upcomingPage}
                                            pageNumbers={totalUpcomingPages}
                                        />
                                    </div>
                                </>
                            );
                        case "top-rated":
                            return (
                                <>
                                    <div className="tvshow-container">
                                        {topRatedTvshows.map((tv, index) => (
                                            <TvshowCard
                                                key={index}
                                                title={tv.name}
                                                rating={tv.vote_average.toFixed(1)}
                                                imgUrl={topRatedTvshowsImages[index]}
                                                tvId={tv.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="">
                                        <AppPagination
                                            setPage={setTopRatedPage}
                                            page={topRatedPage}
                                            pageNumbers={totalTopRatedPages}
                                        />
                                    </div>
                                </>
                            );
                        case "popular":
                            return (
                                <>
                                    <div className="tvshow-container">
                                        {popularTvshows.map((tv, index) => (
                                            <TvshowCard
                                                key={index}
                                                title={tv.name}
                                                rating={tv.vote_average.toFixed(1)}
                                                imgUrl={popularTvshowsImages[index]}
                                                tvId={tv.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="">
                                        <AppPagination
                                            setPage={setPopularPage}
                                            page={popularPage}
                                            pageNumbers={totalPopularPages}
                                        />
                                    </div>
                                </>
                            );

                        case "trending":
                        default:
                            return (
                                <>
                                    <div className="tvshow-container">
                                        {trendingTvshows.map((tv, index) => (
                                            <TvshowCard
                                                key={index}
                                                title={tv.name}
                                                rating={tv.vote_average.toFixed(1)}
                                                imgUrl={trendingTvshowsImages[index]}
                                                tvId={tv.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="">
                                        <AppPagination
                                            setPage={setTrendingPage}
                                            page={trendingPage}
                                            pageNumbers={totalTrendingPages}
                                        />
                                    </div>
                                </>
                            );
                    }
                })()}
            </div>
        </>
    );
}

export default Tvshows;
