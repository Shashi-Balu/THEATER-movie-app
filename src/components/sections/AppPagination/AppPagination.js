import React from "react";
import { Pagination } from "@mui/material";
import "./AppPagination.css";
import { useParams } from "react-router-dom";

const AppPagination = ({ pageNumbers = 10, setPage, scrollToThis }) => {
    const params = useParams();
    const handleChange = (page = 1) => {
        setPage(page);

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
                siblingCount={2}
                boundaryCount={2}
                className="app-pagination-container"
                onChange={(event) => {
                    handleChange(event.target.textContent);
                }}
                count={pageNumbers}
                color="primary"
            />
        </>
    );
};

export default AppPagination;
