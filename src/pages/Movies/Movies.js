import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";

function Movies() {
    return (
        <>
            <Navbar />
            <Searchbar category="MOVIES" />
        </>
    );
}

export default Movies;
