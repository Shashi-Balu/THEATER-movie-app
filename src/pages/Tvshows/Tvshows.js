import React, { useState, useContext } from "react";
import { TvshowContext } from "../../services/TvshowContextProviders";
import TvshowCard from "../../components/TvshowsComponent/TvshowCard/TvshowCard";
import Searchbar from "../../components/sections/Searchbar/Searchbar";
import "../../styles/ItemPage.css";
import AppPagination from "../../components/sections/AppPagination/AppPagination";
import { SearchContext } from "../../services/SearchProviders";
import { imgNotAvailablePortrait, imgNotAvailableLandscape } from "../../services/imgNotAvailable";
import { useMediaQuery } from "react-responsive";

function Tvshows() {
    const {
        searchQuery,
        searchTvshowQueryData,
        searchQueryPage,
        setSearchQueryPage,
        totalSearchQueryPages,
    } = useContext(SearchContext);
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
        trendingTvshowsLandscapeImages,
        airingTodayTvshowsLandscapeImages,
        popularTvshowsLandscapeImages,
        topRatedTvshowsLandscapeImages,
    } = useContext(TvshowContext);

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 610px)",
    });
    let trendingTvshowsDisplay = "";
    let airingTodayTvshowsDisplay = "";
    let popularTvshowsDisplay = "";
    let topRatedTvshowsDisplay = "";
    isDesktopOrLaptop
        ? (trendingTvshowsDisplay = trendingTvshowsImages)
        : (trendingTvshowsDisplay = trendingTvshowsLandscapeImages);
    isDesktopOrLaptop
        ? (airingTodayTvshowsDisplay = airingTodayTvshowsImages)
        : (airingTodayTvshowsDisplay = airingTodayTvshowsLandscapeImages);
    isDesktopOrLaptop
        ? (popularTvshowsDisplay = popularTvshowsImages)
        : (popularTvshowsDisplay = popularTvshowsLandscapeImages);
    isDesktopOrLaptop
        ? (topRatedTvshowsDisplay = topRatedTvshowsImages)
        : (topRatedTvshowsDisplay = topRatedTvshowsLandscapeImages);

    const searchTvshowQueryImages =
        searchTvshowQueryData &&
        searchTvshowQueryData?.map((tvshow) =>
            tvshow.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`
                : imgNotAvailablePortrait
        );
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
                <>
                    {searchQuery === "" ? (
                        (() => {
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
                                                        imgUrl={
                                                            isDesktopOrLaptop
                                                                ? tv.poster_path !== null
                                                                    ? airingTodayTvshowsImages[
                                                                          index
                                                                      ]
                                                                    : imgNotAvailablePortrait
                                                                : tv.backdrop_path !== null
                                                                ? airingTodayTvshowsLandscapeImages[
                                                                      index
                                                                  ]
                                                                : imgNotAvailableLandscape
                                                        }
                                                        tvId={tv.id}
                                                    />
                                                ))}
                                            </div>
                                            <div className="item-pagination-container">
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
                                                        imgUrl={
                                                            isDesktopOrLaptop
                                                                ? tv.poster_path !== null
                                                                    ? topRatedTvshowsImages[index]
                                                                    : imgNotAvailablePortrait
                                                                : tv.backdrop_path !== null
                                                                ? topRatedTvshowsLandscapeImages[
                                                                      index
                                                                  ]
                                                                : imgNotAvailableLandscape
                                                        }
                                                        tvId={tv.id}
                                                    />
                                                ))}
                                            </div>
                                            <div className="item-pagination-container">
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
                                                        imgUrl={
                                                            isDesktopOrLaptop
                                                                ? tv.poster_path !== null
                                                                    ? popularTvshowsImages[index]
                                                                    : imgNotAvailablePortrait
                                                                : tv.backdrop_path !== null
                                                                ? popularTvshowsLandscapeImages[
                                                                      index
                                                                  ]
                                                                : imgNotAvailableLandscape
                                                        }
                                                        tvId={tv.id}
                                                    />
                                                ))}
                                            </div>
                                            <div className="item-pagination-container">
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
                                                        imgUrl={
                                                            isDesktopOrLaptop
                                                                ? tv.poster_path !== null
                                                                    ? trendingTvshowsImages[index]
                                                                    : imgNotAvailablePortrait
                                                                : tv.backdrop_path !== null
                                                                ? trendingTvshowsLandscapeImages[
                                                                      index
                                                                  ]
                                                                : imgNotAvailableLandscape
                                                        }
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
                        })()
                    ) : (
                        <>
                            <div className="items-item-container">
                                {searchTvshowQueryData?.map((tv, index) => {
                                    return (
                                        <>
                                            <TvshowCard
                                                key={index}
                                                title={tv.name}
                                                rating={tv.vote_average.toFixed(1)}
                                                imgUrl={searchTvshowQueryImages[index]}
                                                tvId={tv.id}
                                            />
                                        </>
                                    );
                                })}
                            </div>
                            <div className="item-pagination-container">
                                <AppPagination
                                    setPage={setSearchQueryPage}
                                    page={searchQueryPage}
                                    pageNumbers={totalSearchQueryPages}
                                />
                            </div>
                        </>
                    )}
                </>
            </div>
        </>
    );
}

export default Tvshows;
