import React, { createContext, useState, useEffect } from "react";
import { url } from "../../services/apis/movieUrl";

export const TvshowContext = createContext();

const TvshowProviders = ({ children }) => {
    const [trendingTvshows, setTrendingTvshows] = useState([]);
    const [airingTodayTvshows, setAiringTodayTvshows] = useState([]);
    const [popularTvshows, setPopularTvshows] = useState([]);
    const [topRatedTvshows, setTopRatedTvshows] = useState([]);
    const [tvshows, setTvshows] = useState([]);

    async function callTvshowsApi() {
        const trendingTvshowsApi = await (
            await fetch(`${url}/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const trendingTvshowsApiData = trendingTvshowsApi.results;
        setTrendingTvshows(trendingTvshowsApiData);

        const airingTodayTvshowsApi = await (
            await fetch(`${url}/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const airingTodayTvshowsApiData = airingTodayTvshowsApi.results;
        setAiringTodayTvshows(airingTodayTvshowsApiData);

        const popularTvshowsApi = await (
            await fetch(`${url}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=3`)
        ).json();
        const popularTvshowsApiData = popularTvshowsApi.results;
        setPopularTvshows(popularTvshowsApiData);

        const topRatedTvshowsApi = await (
            await fetch(`${url}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const topRatedTvshowsApiData = topRatedTvshowsApi.results;
        setTopRatedTvshows(topRatedTvshowsApiData);

        const tvshowsApi = await (
            await fetch(`${url}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const tvshowsApiData = tvshowsApi.results;
        setTvshows(tvshowsApiData);
    }

    const trendingTvshowsImages = trendingTvshows.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    const airingTodayTvshowsImages = airingTodayTvshows?.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    const popularTvshowsImages = popularTvshows.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    const topRatedTvshowsImages = topRatedTvshows.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    const tvshowsImages = tvshows.map((tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`);

    useEffect(() => {
        callTvshowsApi();
    }, []);
    return (
        <div>
            <TvshowContext.Provider
                value={{
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
                }}
            >
                {children}
            </TvshowContext.Provider>
        </div>
    );
};

export default TvshowProviders;
