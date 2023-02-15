import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres/Genres";
import Tvshows from "./pages/Tvshows/Tvshows";
import Movies from "./pages/Movies/Movies";
import Home from "./pages/Home/Home";
import { GenreContextProviders } from "./services/GenreProviders";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
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
