import React, { useEffect, useState } from "react";
import MovieCard from "../components/MoviesComponent/MovieCard/MovieCard";
import AppPagination from "../components/sections/AppPagination/AppPagination";
import TvshowCard from "../components/TvshowsComponent/TvshowCard/TvshowCard";
import { url } from "./apis/movieUrl";

const GenreDetailProviders = (props) => {
    const [genrePage, setGenrePage] = useState(1);
    const [totalGenrePages, setTotalGenrePages] = useState(10);
    const [genreType, setGenreType] = useState();
    const [genreMovies, setGenreMovies] = useState();
    const [genreTvshows, setGenreTvshows] = useState();

    async function callGenreMoviesApi() {
        const movieGenreApi = await (
            await fetch(
                `${url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.genreMovieId}&page=${genrePage}`
            )
        ).json();
        const type = "movie";
        setGenreType(type);
        console.log(movieGenreApi);
        const movieGenreApiData = movieGenreApi.results;
        setGenreMovies(movieGenreApiData);
    }

    async function callGenreTvshowsApi() {
        const tvshowGenreApi = await (
            await fetch(
                `${url}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.genreMovieId}&page=${genrePage}`
            )
        ).json();
        const type = "tv";
        setGenreType(type);
        const tvshowGenreApiData = tvshowGenreApi.results;
        setGenreTvshows(tvshowGenreApiData);
    }

    useEffect(() => {
        callGenreMoviesApi();
        callGenreTvshowsApi();
    }, []);
    return (
        <>
            {genreType}
            <div className="items-item-container">
                {genreMovies?.map((genre) => {
                    return (
                        <>
                            <MovieCard
                                title={genre.title}
                                imgUrl={`https://image.tmdb.org/t/p/w500/${genre.poster_path}`}
                                rating={genre?.vote_average.toFixed(1)}
                                movieId={genre.id}
                            />
                        </>
                    );
                })}
            </div>

            <div className="item-pagination-container">
                {genrePage}
                <AppPagination
                    setPage={setGenrePage}
                    page={genrePage}
                    pageNumbers={totalGenrePages}
                />
            </div>
        </>
    );
};

export default GenreDetailProviders;
