import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres/Genres";
import Tvshows from "./pages/Tvshows/Tvshows";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import { MovieContext } from "./components/MovieProviders/MovieProviders";
import MovieDetailContextProvider from "./components/MovieDetailProviders/MovieDetailProviders";
import Tvshow from "./components/Tvshow/Tvshow";
import { TvshowContext } from "./components/TvshowProviders/TvshowProviders";
import NotFound from "./pages/NotFound/NotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
    const { movieIdApp } = useContext(MovieContext);
    const { tvIdApp } = useContext(TvshowContext);
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
                        element={<MovieDetailContextProvider id={movieIdApp} />}
                    />
                    <Route path={`/tv-shows/:tvid`} element={<Tvshow id={tvIdApp} />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
