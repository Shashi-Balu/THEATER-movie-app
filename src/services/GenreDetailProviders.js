import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MoviesComponent/MovieCard/MovieCard";
import AppPagination from "../components/sections/AppPagination/AppPagination";
import TvshowCard from "../components/TvshowsComponent/TvshowCard/TvshowCard";
import { url } from "./apis/movieUrl";
import { GenreContext } from "./GenreContextProviders";

const GenreDetailProviders = (props) => {
    const { movieGenreData, tvGenreData, setGenreIdMovieApp } = useContext(GenreContext);
    const [genrePage, setGenrePage] = useState(1);
    const [totalGenrePages, setTotalGenrePages] = useState(5);
    const [genreMovies, setGenreMovies] = useState();
    const [genreTvshows, setGenreTvshows] = useState();
    const [display, setDisplay] = useState();

    const callGenreMoviesApi = async () => {
        const movieGenreDetailApi = await (
            await fetch(
                `${url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.genreIdMovieApp}&page=${genrePage}`
            )
        ).json();

        // console.log(props.genreIdMovieApp);
        console.log({ movieGenreDetailApi });
        const movieGenreDetailApiData = movieGenreDetailApi.results;
        setGenreMovies(movieGenreDetailApiData);
        setTotalGenrePages(movieGenreDetailApi?.total_pages);
        console.log("movie pages", movieGenreDetailApi?.total_pages);
    };

    const callGenreTvshowsApi = async () => {
        const tvshowGenreDetailApi = await (
            await fetch(
                `${url}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${props.genreIdTvApp}&page=${genrePage}`
            )
        ).json();
        console.log({ tvshowGenreDetailApi });
        // const tvshowGenreDetailApiData = tvshowGenreDetailApi.results;
        // setGenreTvshows(tvshowGenreDetailApiData);
        // console.log({ tvshowGenreDetailApi });
        // setTotalGenrePages(tvshowGenreDetailApi?.total_pages);
        // console.log(totalGenrePages);
    };

    useEffect(() => {
        callGenreMoviesApi();
    }, [genrePage]);

    useEffect(() => {
        callGenreTvshowsApi();
    }, [genrePage]);
    return (
        <>
            {display}
            {callGenreMoviesApi ? (
                <>
                    {/* Movie */}
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
                        {genrePage},{totalGenrePages}
                        <AppPagination
                            setPage={setGenrePage}
                            page={genrePage}
                            pageNumbers={totalGenrePages > 500 ? 500 : totalGenrePages}
                        />
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};

export default GenreDetailProviders;
