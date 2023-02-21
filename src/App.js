import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useContext } from "react";
import Genres from "./pages/Genres/Genres";
import Tvshows from "./pages/Tvshows/Tvshows";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";
import { MovieContext } from "./services/MovieContextProviders";
import MovieDetailProvider from "./services/MovieDetailProviders";
import { TvshowContext } from "./services/TvshowContextProviders";
import NotFound from "./pages/NotFound/NotFound";
import TvshowDetailProvider from "./services/TvshowDetailProvider";

function App() {
    const { movieIdApp } = useContext(MovieContext);
    const { tvshowIdApp } = useContext(TvshowContext);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/movies"} element={<Movies />} />
                    <Route path={"/tv-shows"} element={<Tvshows />} />
                    <Route path={"/genres"} element={<Genres />} />
                    <Route
                        path={`/movies/:movieid`}
                        element={<MovieDetailProvider id={movieIdApp} />}
                    />
                    <Route
                        path={`/tv-shows/:tvid`}
                        element={<TvshowDetailProvider id={tvshowIdApp} />}
                    />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
