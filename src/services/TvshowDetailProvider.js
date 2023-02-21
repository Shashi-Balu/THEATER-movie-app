import React, { useEffect, useState } from "react";
import { url } from "./../services/apis/movieUrl";
import TvshowDetail from "../components/TvshowsComponent/TvshowDetail/TvshowDetail";

const TvshowDetailProvider = (props) => {
    console.log(props.id);
    const [tvshowTitle, setTvshowTitle] = useState();
    const [tvshowRating, setTvshowRating] = useState();
    const [tvshowGenres, setTvshowGenres] = useState();
    const [tvshowDescription, setTvshowDescription] = useState();
    const [tvshowImgUrl, setTvshowImgUrl] = useState();
    const [tvshowPoster, setTvshowPoster] = useState();
    // const [tvshowThumbnails, setTvshowThumbnails] = useState();
    // const [tvshowVideos, setTvshowVideos] = useState();
    // const [tvshowCast, setTvshowCast] = useState();
    // const [tvshowSimilar, setTvshowSimilar] = useState();
    const [tvshowLanguage, setTvshowLanguage] = useState();
    const [tvshowReleaseDate, setTvshowReleaseDate] = useState();

    async function callTvshowApi() {
        const tvshowApi = await (
            await fetch(`${url}/tv/${props.id}?api_key=${process.env.REACT_APP_API_KEY}`)
        ).json();

        console.log(tvshowApi);

        setTvshowTitle(tvshowApi?.name);
        setTvshowRating(tvshowApi?.vote_average.toFixed(1));
        setTvshowGenres(tvshowApi?.genres);
        setTvshowDescription(tvshowApi?.overview);
        setTvshowImgUrl(tvshowApi?.backdrop_path);
        setTvshowPoster(tvshowApi?.poster_path);
        // setTvshowThumbnails(tvshowApi?.title);
        // setTvshowVideos(tvshowApi?.title);
        // setTvshowSimilar(tvshowApi?.title);
        setTvshowLanguage(tvshowApi?.original_language);
        setTvshowReleaseDate(tvshowApi?.first_air_date);

        console.log(tvshowImgUrl);
    }

    useEffect(() => {
        callTvshowApi();
    }, []);
    return (
        <>
            <>
                <TvshowDetail
                    tvshowTitle={tvshowTitle}
                    tvshowImgUrl={tvshowImgUrl}
                    tvshowRating={tvshowRating}
                    tvshowGenres={tvshowGenres}
                    tvshowDescription={tvshowDescription}
                    tvshowPoster={tvshowPoster}
                    tvshowLanguage={tvshowLanguage}
                    tvshowReleaseDate={tvshowReleaseDate}
                />
            </>
        </>
    );
};

export default TvshowDetailProvider;
