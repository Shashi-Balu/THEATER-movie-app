import React from "react";
import logo from "../../assets/THEATER.svg";
import NightlightRoundTwoToneIcon from "@mui/icons-material/NightlightRoundTwoTone";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="nav-logo">
                        <img className="nav-logo-image" src={logo} alt="LOGO" />
                    </div>
                    <div className="nav-menu">
                        <Link to="/" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">HOME</nav>
                        </Link>
                        <Link to="/movies" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">MOVIES</nav>
                        </Link>

                        <Link to="/tv-shows" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">TV SHOWS</nav>
                        </Link>

                        <Link to="/genres" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">GENRES</nav>
                        </Link>
                    </div>

                    <div className="navbar-mode">
                        <NightlightRoundTwoToneIcon className="nav-logo-mode" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
