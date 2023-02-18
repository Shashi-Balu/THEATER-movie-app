import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres/Genres";
import Tvshows from "./pages/Tvshows/Tvshows";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import { GenreContextProviders } from "./services/GenreProviders";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import { MovieContext } from "./components/MovieProviders/MovieProviders";
import Movie from "./components/Movie/Movie";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
    const { movieIdApp, setMovieIdApp } = useContext(MovieContext);

    console.log(movieIdApp);
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/movies"} element={<Movies />} />
                    <Route path={"/tv-shows"} element={<Tvshows />} />
                    <Route path={"/genres"} element={<Genres />} />
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;
