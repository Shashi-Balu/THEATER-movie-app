import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Genres from "./pages/Genres/Genres";
import Tvshows from "./pages/Tvshows/Tvshows";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";

import MovieDetailProvider from "./services/MovieDetailProviders";

import NotFound from "./pages/NotFound/NotFound";
import TvshowDetailProvider from "./services/TvshowDetailProvider";
import GenreDetailProviders from "./services/GenreDetailProviders";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/movies"} element={<Movies />} />
                    <Route path={"/:tv-shows"} element={<Tvshows />} />
                    <Route path={"/genres"} element={<Genres />} />
                    <Route path={`/movies/:movieId`} element={<MovieDetailProvider />} />
                    <Route path={`/tv-shows/:tvId`} element={<TvshowDetailProvider />} />

                    <Route path={`/genres/:genreId`} element={<GenreDetailProviders />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
