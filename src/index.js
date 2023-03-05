import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { MovieContextProvider } from "./services/MovieContextProviders";
import { GenreContextProviders } from "./services/GenreContextProviders";
import TvshowContextProviders from "./services/TvshowContextProviders";
import { TypeContextProviders } from "./services/TypeContextProviders";
import SearchProviders from "./services/SearchProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TypeContextProviders>
            <GenreContextProviders>
                <SearchProviders>
                    <MovieContextProvider>
                        <TvshowContextProviders>
                            <App />
                        </TvshowContextProviders>
                    </MovieContextProvider>
                </SearchProviders>
            </GenreContextProviders>
        </TypeContextProviders>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
