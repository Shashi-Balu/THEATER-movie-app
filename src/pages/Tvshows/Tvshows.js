import React, { useState, useContext } from "react";
import { TvshowContext } from "../../services/TvshowContextProviders";
import TvshowCard from "../../components/TvshowsComponent/TvshowCard/TvshowCard";
import Searchbar from "../../components/sections/Searchbar/Searchbar";
import "../../styles/ItemPage.css";
import AppPagination from "../../components/sections/AppPagination/AppPagination";

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
                                    <div className="items-item-container">
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
                                    <div className="items-item-container">
                                        {topRatedTvshows?.map((tv, index) => (
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
                                    <div className="items-item-container">
                                        {popularTvshows?.map((tv, index) => (
                                            <TvshowCard
                                                key={index}
                                                title={tv?.name}
                                                rating={tv.vote_average?.toFixed(1)}
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
                                    <div className="items-item-container">
                                        {trendingTvshows?.map((tv, index) => (
                                            <TvshowCard
                                                key={index}
                                                title={tv.name}
                                                rating={tv.vote_average.toFixed(1)}
                                                imgUrl={trendingTvshowsImages[index]}
                                                tvId={tv.id}
                                            />
                                        ))}
                                    </div>
                                    <div className="item-pagination-container">
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
