import React from "react";
import { Pagination } from "@mui/material";
import "./AppPagination.css";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = (theme) => ({
    root: {
        width: "300px",
    },
    selected: {
        backgroundColor: "turquoise !important",
        color: "white",
        fontWeight: 600,
    },
});

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

    // .... rest of code
    const classes = useStyles();
    return (
        <>
            <Pagination
                siblingCount={2}
                boundaryCount={2}
                className={`app-pagination-container ${classes.root}`}
                onChange={(event) => {
                    handleChange(event.target.textContent);
                }}
                count={pageNumbers}
                color="secondary"
                // className={}
                // variant="outlined"
                // classes={{ ul: classes.ul }}
            />
        </>
    );
};

export default AppPagination;
