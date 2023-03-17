import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MoviesComponent/MovieCard/MovieCard";
import AppPagination from "../components/sections/AppPagination/AppPagination";
import TvshowCard from "../components/TvshowsComponent/TvshowCard/TvshowCard";
import { url } from "./apis/movieUrl";

const GenreDetailProviders = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 800px)",
    });

    const params = useParams();
    // console.log("params", params);
    // console.log("object params", Object.values(params)[0]);
    const [genrePage, setGenrePage] = useState(1);
    const [totalGenrePages, setTotalGenrePages] = useState(10);
    const [genreMovies, setGenreMovies] = useState();
    const [genreTvshows, setGenreTvshows] = useState();

    const callGenreMoviesApi = async () => {
        const movieGenreDetailApi = await (
            await fetch(
                `${url}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${params.genreId}&page=${genrePage}&adult=false`
            )
        ).json();

        // console.log(params.genreIdMovieApp);

        const movieGenreDetailApiData = movieGenreDetailApi.results;
        setGenreMovies(movieGenreDetailApiData);
        setTotalGenrePages(movieGenreDetailApi?.total_pages);
    };

    const callGenreTvshowsApi = async () => {
        const tvshowGenreDetailApi = await (
            await fetch(
                `${url}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${params.genreId}&page=${genrePage}&adult=false`
            )
        ).json();

        const tvshowGenreDetailApiData = tvshowGenreDetailApi.results;
        setGenreTvshows(tvshowGenreDetailApiData);
        // console.log({ tvshowGenreDetailApi });
        setTotalGenrePages(tvshowGenreDetailApi?.total_pages);
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
            {Object.values(params)[0] === "movies" && (
                <>
                    <div className="items-item-container">
                        {genreMovies?.map((genre) => {
                            return (
                                <>
                                    <MovieCard
                                        title={genre.title}
                                        imgUrl={
                                            isDesktopOrLaptop
                                                ? `https://image.tmdb.org/t/p/w500/${genre.poster_path}`
                                                : `https://image.tmdb.org/t/p/w500/${genre.backdrop_path}`
                                        }
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
            )}

            {Object.values(params)[0] === "tv-shows" && (
                <>
                    <div className="items-item-container">
                        {genreTvshows?.map((genre) => {
                            return (
                                <>
                                    <TvshowCard
                                        title={genre.name}
                                        imgUrl={
                                            isDesktopOrLaptop
                                                ? `https://image.tmdb.org/t/p/w500/${genre.poster_path}`
                                                : `https://image.tmdb.org/t/p/w500/${genre.backdrop_path}`
                                        }
                                        rating={genre?.vote_average.toFixed(1)}
                                        tvId={genre.id}
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
            )}
        </>
    );
};

export default GenreDetailProviders;

{
    /* <TvshowCard
                                    title={genre.name}
                                    imgUrl={`https://image.tmdb.org/t/p/w500/${genre.poster_path}`}
                                    rating={genre?.vote_average.toFixed(1)}
                                    tvId={genre.id}
                                /> */
}
