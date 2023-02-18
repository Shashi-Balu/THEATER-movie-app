import React from "react";
import logo from "../../assets/THEATER.svg";
import NightlightRoundTwoToneIcon from "@mui/icons-material/NightlightRoundTwoTone";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="nav-logo">
                        <img className="nav-logo-image" src={logo} alt="LOGO" />
                    </div>
                    <div className="nav-menu">
                        <NavLink to="/" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">HOME</nav>
                        </NavLink>
                        <NavLink to="/movies" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">MOVIES</nav>
                        </NavLink>

                        <NavLink to="/tv-shows" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">TV SHOWS</nav>
                        </NavLink>

                        <NavLink to="/genres" className="navbar-nav navbar-nav-link">
                            <nav className="navbar-nav">GENRES</nav>
                        </NavLink>
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
