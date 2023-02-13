import React, { createContext, useState, useEffect } from "react";
import { url } from "../../services/apis/movieUrl";

export const TvshowContext = createContext();

const TvshowProviders = () => {
    const [trendingTvshows, setTrendingTvshows] = useState([]);
    const [upcomingTvshows, setUpcomingTvshows] = useState([]);
    const [popularTvshows, setPopularTvshows] = useState([]);
    const [topRatedTvshows, setTopRatedTvshows] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [tvshows, setTvshows] = useState([]);

    async function callTvshowsApi() {
        const trendingTvshowsApi = await (
            await fetch(`${url}/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const trendingTvshowsApiData = trendingTvshowsApi.results;
        setTrendingTvshows(trendingTvshowsApiData);

        const upcomingTvshowsApi = await (
            await fetch(`${url}/tv/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const upcomingTvshowsApiData = upcomingTvshowsApi.results;
        setUpcomingTvshows(upcomingTvshowsApiData);

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
    const upcomingTvshowsImages = upcomingTvshows.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    const popularTvshowsImages = popularTvshows.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    const topRatedTvshowsImages = topRatedTvshows.map(
        (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    );
    // const latesttvsImages = latesttvs.map(
    //     (tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`
    // );
    const tvshowsImages = tvshows.map((tv) => `https://image.tmdb.org/t/p/w500${tv.backdrop_path}`);

    useEffect(() => {
        callTvshowsApi();
    }, []);
    return (
        <div>
            <TvshowContext.Provider>
                value =
                {{
                    trendingTvshows,
                    setTrendingTvshows,
                    upcomingTvshows,
                    setUpcomingTvshows,
                    popularTvshows,
                    setPopularTvshows,
                    topRatedTvshows,
                    setTopRatedTvshows,
                    tvshows,
                    setTvshows,
                    trendingTvshowsImages,
                    upcomingTvshowsImages,
                    popularTvshowsImages,
                    topRatedTvshowsImages,
                    tvshowsImages,
                }}
            </TvshowContext.Provider>
        </div>
    );
};

export default TvshowProviders;
