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
import Movie from "./components/Movie/Movie";
import Tvshow from "./components/Tvshow/Tvshow";
import { TvshowContext } from "./components/TvshowProviders/TvshowProviders";
import MovieCard from "./components/MovieCard/MovieCard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    const { movieIdApp, title } = useContext(MovieContext);
    const { tvIdApp, tvtitle } = useContext(TvshowContext);
    console.log(title);
    console.log(tvtitle);
    // const id = ;
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
                        element={<Movie id={movieIdApp} title={title} />}
                    />
                    <Route
                        path={`/tv-shows/:tvid`}
                        element={<Tvshow id={tvIdApp} title={tvtitle} />}
                    />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
