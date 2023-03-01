import React, { useEffect, useState } from "react";
import MovieCard from "../components/MoviesComponent/MovieCard/MovieCard";
import AppPagination from "../components/sections/AppPagination/AppPagination";
import TvshowCard from "../components/TvshowsComponent/TvshowCard/TvshowCard";
import { url } from "./apis/movieUrl";

const GenreDetailProviders = (props) => {
    console.log("genreid", props.genreMovieId);
    const [genrePage, setGenrePage] = useState(1);
    const [totalGenrePages, setTotalGenrePages] = useState(5);
    const [genreMovies, setGenreMovies] = useState();
    const [genreTvshows, setGenreTvshows] = useState();

    async function callGenreMoviesApi() {
        const movieGenreApi = await (
            await fetch(
                `${url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.genreIdMovieApp}&page=${genrePage}`
            )
        ).json();

        console.log(movieGenreApi);
        const movieGenreApiData = movieGenreApi.results;
        setGenreMovies(movieGenreApiData);
        setTotalGenrePages(movieGenreApi?.total_pages);
    }

    async function callGenreTvshowsApi() {
        const tvshowGenreApi = await (
            await fetch(
                `${url}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.genreMovieId}&page=${genrePage}`
            )
        ).json();

        const tvshowGenreApiData = tvshowGenreApi.results;
        setGenreTvshows(tvshowGenreApiData);
        setTotalGenrePages(tvshowGenreApi?.total_pages);
        console.log(totalGenrePages);
    }

    useEffect(() => {
        callGenreMoviesApi();
        callGenreTvshowsApi();
    }, []);
    return (
        <>
            <div className="items-item-container">
                {genreMovies?.map((genre) => {
                    return (
                        <>
                            <MovieCard
                                title={genre.title}
                                imgUrl={`https://image.tmdb.org/t/p/w500/${genre.poster_path}`}
                                rating={genre?.vote_average.toFixed(1)}
                                genreIdMovieApp={genre.id}
                            />
                        </>
                    );
                })}
            </div>

            <div className="item-pagination-container">
                {genrePage},{totalGenrePages}
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
