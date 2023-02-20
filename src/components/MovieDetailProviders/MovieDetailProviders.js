import React, { createContext, useContext, useEffect, useState } from "react";
import { url } from "../../services/apis/movieUrl";
import MovieDetail from "../MovieDetail/MovieDetail";

const MovieDetailContextProvider = (props) => {
    console.log(props.id);
    const [movieTitle, setMovieTitle] = useState();
    const [movieRating, setMovieRating] = useState();
    const [movieGenres, setMovieGenres] = useState();
    const [movieDescription, setMovieDescription] = useState();
    const [movieImgUrl, setMovieImgUrl] = useState();
    const [moviePoster, setMoviePoster] = useState();
    // const [movieThumbnails, setMovieThumbnails] = useState();
    // const [movieVideos, setMovieVideos] = useState();
    // const [movieCast, setMovieCast] = useState();
    // const [movieSimilar, setMovieSimilar] = useState();
    const [movieLanguage, setMovieLanguage] = useState();
    const [movieReleaseDate, setMovieReleaseDate] = useState();
    const [movieRevenue, setMovieRevenue] = useState();
    const [movieBudget, setMovieBudget] = useState();
    const [movieDuration, setMovieDuration] = useState();
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
        // setMovieThumbnails(movieApi?.title);
        // setMovieVideos(movieApi?.title);
        // setMovieSimilar(movieApi?.title);
        setMovieLanguage(movieApi?.spoken_language);
        setMovieReleaseDate(movieApi?.release_date);
        setMovieRevenue(movieApi?.revenue);
        setMovieBudget(movieApi?.budget);
        setMovieDuration(movieApi?.runtime);

        console.log(movieImgUrl);
    }

    useEffect(() => {
        callMovieApi();
    }, []);
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
                />
            </>
        </>
    );
};

export default MovieDetailContextProvider;
