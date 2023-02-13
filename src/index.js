import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MovieContextProvider } from "./components/MovieProviders/MovieProviders";
import { GenreContext, GenreContextProviders } from "./services/GenreProviders";
import TvshowProviders from "./components/TvshowProviders/TvshowProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GenreContextProviders>
            <MovieContextProvider>
                <TvshowProviders>
                    <App />
                </TvshowProviders>
            </MovieContextProvider>
        </GenreContextProviders>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
