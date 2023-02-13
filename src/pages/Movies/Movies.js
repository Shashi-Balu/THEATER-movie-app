import React from "react";
import Movie from "../../components/Movie/Movie";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Tvshow from "../../components/Tvshow/Tvshow";

function Movies() {
    return (
        <>
            <Navbar />
            <Movie />
            <Tvshow />
        </>
    );
}

export default Movies;
