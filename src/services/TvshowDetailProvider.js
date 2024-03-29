import React, { useEffect, useState } from "react";
import { url } from "./../services/apis/movieUrl";
import TvshowDetail from "../components/TvshowsComponent/TvshowDetail/TvshowDetail";
import { useParams } from "react-router-dom";

const TvshowDetailProvider = (props) => {
    const params = useParams();

    // console.log({ params });

    const [tvshowSimilarPage, setTvshowSimilarPage] = useState(1);
    const [totalSimilarPages, setTotalSimilarPages] = useState([]);
    const [tvshowId, setTvshowId] = useState();
    const [tvshowTitle, setTvshowTitle] = useState();
    const [tvshowRating, setTvshowRating] = useState();
    const [tvshowGenres, setTvshowGenres] = useState();
    const [tvshowDescription, setTvshowDescription] = useState();
    const [tvshowImgUrl, setTvshowImgUrl] = useState();
    const [tvshowPoster, setTvshowPoster] = useState();
    const [tvshowRevenue, setTvshowRevenue] = useState();
    const [tvshowTagline, setTvshowTagline] = useState();
    const [tvshowStatus, setTvshowStatus] = useState();
    const [tvshowThumbnails, setTvshowThumbnails] = useState();
    const [tvshowVideos, setTvshowVideos] = useState();
    const [tvshowCast, setTvshowCast] = useState();
    const [tvshowSimilar, setTvshowSimilar] = useState();
    const [tvshowLanguage, setTvshowLanguage] = useState();
    const [tvshowReleaseDate, setTvshowReleaseDate] = useState();

    async function callTvshowApi() {
        const tvshowApi = await (
            await fetch(
                `${url}/tv/${params.tvId}?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
            )
        ).json();

        setTvshowId(tvshowApi?.id);
        setTvshowTitle(tvshowApi?.name);
        setTvshowRating(tvshowApi?.vote_average.toFixed(1));
        setTvshowGenres(tvshowApi?.genres);
        setTvshowDescription(tvshowApi?.overview);
        setTvshowImgUrl(tvshowApi?.backdrop_path);
        setTvshowPoster(tvshowApi?.poster_path);
        setTvshowRevenue(tvshowApi?.revenue);
        setTvshowTagline(tvshowApi?.tagline);
        setTvshowStatus(tvshowApi?.status);
        setTvshowLanguage(tvshowApi?.original_language);
        setTvshowReleaseDate(tvshowApi?.first_air_date);
    }

    async function callTvshowVideoApi() {
        const tvshowVideoApi = await (
            await fetch(
                `${url}/tv/${params.tvId}/videos?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
            )
        ).json();
        setTvshowVideos(tvshowVideoApi?.results);
    }

    async function callTvshowThumbnailApi() {
        const tvshowThumbnailApi = await (
            await fetch(
                `${url}/tv/${params.tvId}/images?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
            )
        ).json();
        setTvshowThumbnails(tvshowThumbnailApi?.backdrops);
    }

    async function callTvshowCastApi() {
        const tvshowCastApi = await (
            await fetch(
                `${url}/tv/${params.tvId}/credits?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
            )
        ).json();
        setTvshowCast(tvshowCastApi?.cast);
    }

    async function callTvshowSimilarApi() {
        const tvshowSimilarApi = await (
            await fetch(
                `${url}/tv/${params.tvId}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=${tvshowSimilarPage}&adult=false`
            )
        ).json();
        setTvshowSimilar(tvshowSimilarApi?.results);
        setTotalSimilarPages(tvshowSimilarApi?.total_pages);
    }

    useEffect(() => {
        callTvshowApi();
        callTvshowVideoApi();
        callTvshowThumbnailApi();
        callTvshowCastApi();
        callTvshowSimilarApi();
    }, [tvshowSimilarPage, params.tvId]);

    return (
        <>
            <>
                <TvshowDetail
                    tvshowId={tvshowId}
                    tvshowTitle={tvshowTitle}
                    tvshowImgUrl={tvshowImgUrl}
                    tvshowRating={tvshowRating}
                    tvshowGenres={tvshowGenres}
                    tvshowDescription={tvshowDescription}
                    tvshowPoster={tvshowPoster}
                    tvshowLanguage={tvshowLanguage}
                    tvshowReleaseDate={tvshowReleaseDate}
                    tvshowTagline={tvshowTagline}
                    tvshowStatus={tvshowStatus}
                    tvshowVideos={tvshowVideos}
                    tvshowThumbnails={tvshowThumbnails}
                    tvshowCast={tvshowCast}
                    tvshowSimilar={tvshowSimilar}
                    setTvshowId={setTvshowId}
                    tvshowSimilarPage={tvshowSimilarPage}
                    setTvshowSimilarPage={setTvshowSimilarPage}
                    totalSimilarPages={totalSimilarPages}
                />
            </>
        </>
    );
};

export default TvshowDetailProvider;
