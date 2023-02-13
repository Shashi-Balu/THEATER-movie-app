import React, { useState, useContext } from "react";
import { TvshowContext } from "../TvshowProviders/TvshowProviders";
import TvshowCard from "../TvshowCard/TvshowCard";
import Searchbar from "../Searchbar/Searchbar";

function Tvshow() {
    const [displayType, setDisplayType] = useState("");
    const {
        trendingTvshows,
        upcomingTvshows,
        popularTvshows,
        topRatedTvshows,
        trendingTvshowsImages,
        upcomingTvshowsImages,
        popularTvshowsImages,
        topRatedTvshowsImages,
    } = useContext(TvshowContext);

    return (
        <>
            <Searchbar category="TV SHOWS" getType={setDisplayType} />

            <div>
                {(() => {
                    switch (displayType) {
                        case "upcoming":
                            return (
                                <div className="tvshow-container">
                                    {upcomingTvshows.map((tv, index) => (
                                        <TvshowCard
                                            key={index}
                                            title={tv.name}
                                            rating={tv.vote_average.toFixed(1)}
                                            imgUrl={upcomingTvshowsImages[index]}
                                        />
                                    ))}
                                </div>
                            );
                        case "top-rated":
                            return (
                                <div className="tvshow-container">
                                    {topRatedTvshows.map((tv, index) => (
                                        <TvshowCard
                                            key={index}
                                            title={tv.name}
                                            rating={tv.vote_average.toFixed(1)}
                                            imgUrl={topRatedTvshowsImages[index]}
                                        />
                                    ))}
                                </div>
                            );
                        case "popular":
                            return (
                                <div className="tvshow-container">
                                    {popularTvshows.map((tv, index) => (
                                        <TvshowCard
                                            key={index}
                                            title={tv.name}
                                            rating={tv.vote_average.toFixed(1)}
                                            imgUrl={popularTvshowsImages[index]}
                                        />
                                    ))}
                                </div>
                            );

                        case "trending":
                        default:
                            return (
                                <div className="tvshow-container">
                                    {trendingTvshows.map((tv, index) => (
                                        <TvshowCard
                                            key={index}
                                            title={tv.name}
                                            rating={tv.vote_average.toFixed(1)}
                                            imgUrl={trendingTvshowsImages[index]}
                                        />
                                    ))}
                                </div>
                            );
                    }
                })()}
            </div>
        </>
    );
}

export default Tvshow;
