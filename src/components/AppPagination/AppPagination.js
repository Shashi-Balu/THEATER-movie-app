import React from "react";
import { Pagination } from "@mui/material";
import "./AppPagination.css";

const AppPagination = ({ pageNumbers = 10, setPage }) => {
    const handleChange = (page = 1) => {
        setPage(page);
        // window.scroll(0, 0);
    };
    return (
        <>
            <Pagination
                siblingCount={3}
                boundaryCount={2}
                className="app-pagination-container"
                onChange={(event) => handleChange(event.target.textContent)}
                count={pageNumbers}
            />
        </>
    );
};

export default AppPagination;
