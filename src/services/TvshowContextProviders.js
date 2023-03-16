import React, { createContext, useState, useEffect } from "react";
import { url } from "./apis/movieUrl";

export const TvshowContext = createContext();
const TvshowContextProviders = ({ children }) => {
    const [tvshowIdApp, setTvshowIdApp] = useState();
    const [tvtitle, setTvtitle] = useState();
    const [trendingPage, setTrendingPage] = useState(1);
    const [upcomingPage, setUpcomingPage] = useState(1);
    const [topRatedPage, setTopRatedPage] = useState(1);
    const [popularPage, setPopularPage] = useState(1);
    const [trendingTvshows, setTrendingTvshows] = useState([]);
    const [airingTodayTvshows, setAiringTodayTvshows] = useState([]);
    const [popularTvshows, setPopularTvshows] = useState([]);
    const [topRatedTvshows, setTopRatedTvshows] = useState([]);
    const [tvshows, setTvshows] = useState([]);
    const [totalTrendingPages, setTotalTrendingPages] = useState([]);
    const [totalUpcomingPages, setTotalUpcomingPages] = useState([]);
    const [totalTopRatedPages, setTotalTopRatedPages] = useState([]);
    const [totalPopularPages, setTotalPopularPages] = useState([]);

    async function callTvshowsApi() {
        const trendingTvshowsApi = await (
            await fetch(
                `${url}/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&page=${trendingPage}&adult=false`
            )
        ).json();
        const trendingTvshowsApiData = trendingTvshowsApi?.results;
        setTrendingTvshows(trendingTvshowsApiData);
        setTotalTrendingPages(trendingTvshowsApi?.total_pages);

        const airingTodayTvshowsApi = await (
            await fetch(
                `${url}/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&page=${upcomingPage}&adult=false`
            )
        ).json();
        const airingTodayTvshowsApiData = airingTodayTvshowsApi?.results;
        setAiringTodayTvshows(airingTodayTvshowsApiData);
        setTotalUpcomingPages(airingTodayTvshows?.total_pages);

        const popularTvshowsApi = await (
            await fetch(
                `${url}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${popularPage}&adult=false`
            )
        ).json();
        const popularTvshowsApiData = popularTvshowsApi?.results;
        setPopularTvshows(popularTvshowsApiData);
        setTotalTopRatedPages(popularTvshowsApi?.total_pages);

        const topRatedTvshowsApi = await (
            await fetch(
                `${url}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${topRatedPage}&adult=false`
            )
        ).json();
        const topRatedTvshowsApiData = topRatedTvshowsApi?.results;
        setTopRatedTvshows(topRatedTvshowsApiData);
        setTotalPopularPages(topRatedTvshowsApi?.total_pages);

        const tvshowsApi = await (
            await fetch(
                `${url}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${trendingPage}&adult=false`
            )
        ).json();
        const tvshowsApiData = tvshowsApi?.results;
        setTvshows(tvshowsApiData);
    }

    const trendingTvshowsImages = trendingTvshows?.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    );
    const airingTodayTvshowsImages = airingTodayTvshows?.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    );
    const popularTvshowsImages = popularTvshows?.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    );
    const topRatedTvshowsImages = topRatedTvshows?.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.poster_path}`
    );
    const tvshowsImages = tvshows?.map((tv) => `https://image.tmdb.org/t/p/w500${tv.poster_path}`);

    const tvshowsLandscapeImages = tvshows?.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );

    useEffect(() => {
        callTvshowsApi();
    }, [trendingPage, upcomingPage, topRatedPage, popularPage]);
    return (
        <div>
            <TvshowContext.Provider
                value={{
                    tvtitle,
                    setTvtitle,
                    tvshowIdApp,
                    setTvshowIdApp,
                    totalTrendingPages,
                    totalUpcomingPages,
                    totalTopRatedPages,
                    totalPopularPages,
                    trendingPage,
                    setTrendingPage,
                    upcomingPage,
                    setUpcomingPage,
                    topRatedPage,
                    setTopRatedPage,
                    popularPage,
                    setPopularPage,
                    trendingTvshows,
                    setTrendingTvshows,
                    airingTodayTvshows,
                    setAiringTodayTvshows,
                    popularTvshows,
                    setPopularTvshows,
                    topRatedTvshows,
                    setTopRatedTvshows,
                    tvshows,
                    setTvshows,
                    trendingTvshowsImages,
                    airingTodayTvshowsImages,
                    popularTvshowsImages,
                    topRatedTvshowsImages,
                    tvshowsImages,
                    tvshowsLandscapeImages,
                }}
            >
                {children}
            </TvshowContext.Provider>
        </div>
    );
};

export default TvshowContextProviders;
