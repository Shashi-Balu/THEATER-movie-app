import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GenreContext } from "../../services/GenreContextProviders";
import "./Genres.css";

function Genres() {
    const { movieGenreData, tvGenreData } = useContext(GenreContext);

    console.log(movieGenreData);
    console.log(tvGenreData);
    return (
        <>
            <div className="genres-container">
                <div className="genres-movies">
                    <h3 className="genres-heading">movies</h3>
                    <p className="genres-data">
                        {movieGenreData.map((genre) => (
                            <p className="genre-elements">
                                <Link to={"/movies/:id"}>
                                    <p> {genre.name}</p>
                                </Link>
                            </p>
                        ))}
                    </p>
                </div>

                <div className="genres-tvshows">
                    <h3 className="genres-heading">tvshow</h3>
                    <p className="genres-data">
                        {tvGenreData.map((genre) => (
                            <p className="genre-elements">{genre.name}</p>
                        ))}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Genres;
