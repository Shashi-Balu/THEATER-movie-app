import React, { useEffect, useState } from "react";
import { url } from "./apis/movieUrl";
import MovieDetail from "../components/MoviesComponent/MovieDetail/MovieDetail";

const MovieDetailProvider = (props) => {
    console.log(props.id);
    const [movieTitle, setMovieTitle] = useState();
    const [movieRating, setMovieRating] = useState();
    const [movieGenres, setMovieGenres] = useState();
    const [movieDescription, setMovieDescription] = useState();
    const [movieImgUrl, setMovieImgUrl] = useState();
    const [moviePoster, setMoviePoster] = useState();
    const [movieThumbnails, setMovieThumbnails] = useState();
    const [movieVideos, setMovieVideos] = useState();
    const [movieCast, setMovieCast] = useState();
    const [movieSimilar, setMovieSimilar] = useState();
    const [movieLanguage, setMovieLanguage] = useState();
    const [movieReleaseDate, setMovieReleaseDate] = useState();
    const [movieRevenue, setMovieRevenue] = useState();
    const [movieBudget, setMovieBudget] = useState();
    const [movieDuration, setMovieDuration] = useState();
    const [movieStatus, setMovieStatus] = useState();
    const [movieSimilarPage, setMovieSimilarPage] = useState(1);
    const [totalMovieSimilarPages, setTotalMovieSimilarPages] = useState([]);
    async function callMovieApi() {
        const movieApi = await (
            await fetch(`${url}/movie/${props.id}?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        setMovieTitle(movieApi?.title);
        setMovieRating(movieApi?.vote_average.toFixed(1));
        setMovieGenres(movieApi?.genres);
        setMovieDescription(movieApi?.overview);
        setMovieImgUrl(movieApi?.backdrop_path);
        setMoviePoster(movieApi?.poster_path);
        setMovieLanguage(movieApi?.original_language);
        setMovieReleaseDate(movieApi?.release_date);
        setMovieRevenue(movieApi?.revenue);
        setMovieBudget(movieApi?.budget);
        setMovieDuration(movieApi?.runtime);
        setMovieStatus(movieApi?.status);
    }

    async function callMovieVideoApi() {
        const movieVideoApi = await (
            await fetch(`${url}/movie/${props.id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const movieVideoApiData = movieVideoApi?.results;
        setMovieVideos(movieVideoApiData);
    }

    async function callMovieThumbnailApi() {
        const movieThumbnailApi = await (
            await fetch(`${url}/movie/${props.id}/images?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const movieThumbnailApiData = movieThumbnailApi?.backdrops;
        setMovieThumbnails(movieThumbnailApiData);
    }

    async function callMovieCastApi() {
        const movieCastApi = await (
            await fetch(`${url}/movie/${props.id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        const movieCastApiData = movieCastApi?.cast;
        setMovieCast(movieCastApiData);
    }

    async function callMovieSimilarApi() {
        const movieSimilarApi = await (
            await fetch(
                `${url}/movie/${props.id}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=${movieSimilarPage}`
            )
        ).json();
        const movieSimilarApiData = movieSimilarApi?.results;
        setMovieSimilar(movieSimilarApiData);
        setTotalMovieSimilarPages(movieSimilarApi?.total_pages);
    }

    useEffect(() => {
        callMovieApi();
        callMovieVideoApi();
        callMovieThumbnailApi();
        callMovieCastApi();
    }, []);

    useEffect(() => {
        callMovieSimilarApi();
    }, [movieSimilarPage]);

    console.log({ movieSimilarPage });
    return (
        <>
            <>
                <MovieDetail
                    movieTitle={movieTitle}
                    movieImgUrl={movieImgUrl}
                    movieRating={movieRating}
                    movieGenres={movieGenres}
                    movieDescription={movieDescription}
                    moviePoster={moviePoster}
                    movieLanguage={movieLanguage}
                    movieReleaseDate={movieReleaseDate}
                    movieRevenue={movieRevenue}
                    movieBudget={movieBudget}
                    movieDuration={movieDuration}
                    movieStatus={movieStatus}
                    movieVideos={movieVideos}
                    movieThumbnails={movieThumbnails}
                    movieCast={movieCast}
                    movieSimilar={movieSimilar}
                    movieSimilarPage={movieSimilarPage}
                    setMovieSimilarPage={setMovieSimilarPage}
                    totalMovieSimilarPages={totalMovieSimilarPages}
                />
            </>
        </>
    );
};

export default MovieDetailProvider;
