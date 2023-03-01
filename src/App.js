import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";

import React, { useContext, useEffect } from "react";
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
import { GenreContext, GenreContextProviders } from "./services/GenreContextProviders";
import GenreDetailProviders from "./services/GenreDetailProviders";

function App() {
    const { movieIdApp, setMovieIdApp } = useContext(MovieContext);
    const { tvshowIdApp, setTvshowIdApp } = useContext(TvshowContext);
    const { genreIdMovieApp, setGenreIdMovieApp, genreIdTvApp, setGenreIdTvApp } =
        useContext(GenreContext);

    // const navigate = useNavigate();

    useEffect(() => {
        setTvshowIdApp(tvshowIdApp);
        console.log("refresh", tvshowIdApp);
    });

    console.log("genreidapp", genreIdMovieApp);
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
                        path={`/movies/:movieId`}
                        element={<MovieDetailProvider id={movieIdApp} />}
                    />
                    <Route
                        path={`/tv-shows/:tvid`}
                        element={<TvshowDetailProvider id={tvshowIdApp} />}
                    />

                    <Route
                        path={`/genres/:genreid`}
                        element={
                            <GenreDetailProviders
                                genreIdMovieApp={genreIdMovieApp}
                                genreIdTvApp={genreIdTvApp}
                            />
                        }
                    />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
