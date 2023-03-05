import React from "react";
import { Pagination } from "@mui/material";
import "./AppPagination.css";
import { useParams } from "react-router-dom";

const AppPagination = ({ pageNumbers = 10, setPage, scrollToThis }) => {
    const params = useParams();
    console.log({ params });

    const handleChange = (page = 1) => {
        setPage(page);
        console.log({ page });
        console.log(Object.keys(params)[0]);

        if (
            Object.keys(params)[0] === "movieId" ||
            (Object.keys(params)[0] === "tvId" && scrollToThis)
        ) {
            console.log("i am movie id");
            scrollToThis.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scroll({ top: 0, behavior: "smooth" });
        }
    };
    return (
        <>
            <Pagination
                siblingCount={3}
                boundaryCount={2}
                className="app-pagination-container"
                onChange={(event) => {
                    handleChange(event.target.textContent);
                }}
                count={pageNumbers}
            />
        </>
    );
};

export default AppPagination;
