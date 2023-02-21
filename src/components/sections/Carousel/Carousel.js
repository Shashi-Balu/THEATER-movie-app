import React, { useEffect, useState } from "react";
import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";

import { url } from "../../../services/apis/movieUrl";

import "./Carousel.css";

function Carousel() {
    const [carouselData, setCarouselData] = useState([]);
    const [genreData, setGenreData] = useState([]);

    async function callCarouselApi() {
        const carouselApi = await (
            await fetch(`${url}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        const carouselApiData = carouselApi.results;
        setCarouselData(carouselApiData);
        // console.log(carouselApiData);
    }

    async function callGenreApi() {
        const genreApi = await (
            await fetch(`${url}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();
        // console.log(genreApi);
        const genreApiData = genreApi.genres;
        setGenreData(genreApiData);
        // console.log(genreData);
    }

    const imgUrl = carouselData.map(
        (movie) => `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    );
    let [index, setIndex] = useState(0);
    const title = carouselData.map((title) => title.title);
    const rating = carouselData.map((rating) => rating.vote_average.toFixed(1));
    const release_date = carouselData.map((release_date) => release_date.release_date);
    const genres = carouselData.map((genres) => genres.genre_ids);
    const description = carouselData.map((description) => description.overview);

    const genresToDisplay = genres[index]?.map((item) => {
        genreData?.map((item2) => {
            if (item === item2.id) {
                return item2.name;
                console.log(item2.name);
            }
        });
    });

    // const genreToDisplay = genres[index]?.map((item) => {
    //     genreData?.map((item1) => {
    //         if (item === item1.id) {
    //             console.log("hell");
    //         }
    //     });
    // });

    useEffect(() => {
        callCarouselApi();
        callGenreApi();
    }, [index]);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index++ % 20);
        }, 2500);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="carousel-container">
            <div className="carousel-image-container">
                <img src={imgUrl[index]} alt={title[index]} className="carousel-image" />
            </div>

            <div className="carousel-data-container">
                <p className="carousel-title">{title[index]}</p>

                <div className="carousel-data">
                    {rating[index] !== 0 ? (
                        <div className="carousel-rating">
                            <StarBorderSharpIcon className="carousel-star" />
                            <p className="carousel-rating-data">
                                {rating[index]}
                                <span>/10</span>
                            </p>
                        </div>
                    ) : null}
                    <p className="carousel-release-date">{release_date[index]}</p>
                </div>

                {/* <p>{genreData[index]}</p> */}

                <p className="carousel-genres">
                    {genres[index]?.map((item) => {
                        genreData?.map((item2) => {
                            if (item === item2.id) {
                                <p>{item2.name}</p>;
                            }
                        });
                    })}
                </p>

                <p className="carousel-description">{description[index]}</p>
            </div>
        </div>
    );
}

export default Carousel;
