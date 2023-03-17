import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TvshowCard from "../../components/TvshowsComponent/TvshowCard/TvshowCard";
import { GenreContext } from "../../services/GenreContextProviders";
import "./Genres.css";

function Genres() {
    const { movieGenreData, tvGenreData } = useContext(GenreContext);

    return (
        <>
            <div className="genres-container">
                <div className="genres-movies">
                    <h3 className="genres-heading">movies</h3>
                    <p className="genres-data">
                        {movieGenreData.map((genre) => (
                            <Link className="genre-name" to={`/genres/movies/${genre.id}`}>
                                <span>{genre.name}</span>
                            </Link>
                        ))}
                    </p>
                </div>
                <div className="genres-tvshows">
                    <h3 className="genres-heading">tv shows</h3>
                    <p className="genres-data">
                        {tvGenreData.map((genre) => (
                            <Link className="genre-name" to={`/genres/tv-shows/${genre.id}`}>
                                {genre.name}
                            </Link>
                        ))}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Genres;
