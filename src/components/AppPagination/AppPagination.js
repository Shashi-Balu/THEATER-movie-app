import React from "react";
import { Pagination } from "@mui/material";
import "./AppPagination.css";

const AppPagination = ({ pageNumber = 10, setPage }) => {
    const handleChange = (page) => {
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
                variant="outline"
                count={pageNumber}
            />
        </>
    );
};

export default AppPagination;
