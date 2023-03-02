import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TvshowCard from "../../components/TvshowsComponent/TvshowCard/TvshowCard";
import { GenreContext } from "../../services/GenreContextProviders";
import "./Genres.css";

function Genres() {
    const { movieGenreData, tvGenreData, setGenreIdMovieApp } = useContext(GenreContext);

    const handleClick = (genreid) => {
        console.log({ genreid });
        setGenreIdMovieApp(genreid);
    };
    return (
        <>
            <div className="genres-container">
                <div className="genres-movies">
                    <h3 className="genres-heading">movies</h3>
                    <p className="genres-data">
                        {movieGenreData.map((genre) => (
                            <Link
                                className="genre-name"
                                to={`/genres/:${genre.id}`}
                                onClick={() => handleClick(genre.id)}
                            >
                                <span>{genre.name}</span>
                            </Link>
                        ))}
                    </p>
                </div>

                <div className="genres-tvshows">
                    <h3 className="genres-heading">tvshow</h3>
                    <p className="genres-data">
                        {tvGenreData.map((genre) => (
                            <Link className="genre-name" to={`/genres/${genre.id}`}>
                                {genre.name}
                                {/* <TvshowCard
                                    title={genre.name}
                                    imgUrl={`https://image.tmdb.org/t/p/w500/${genre.poster_path}`}
                                    rating={genre?.vote_average.toFixed(1)}
                                    tvId={genre.id}
                                /> */}
                            </Link>
                        ))}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Genres;
