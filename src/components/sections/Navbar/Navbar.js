import React, { useState } from "react";
import logo from "../../../assets/THEATER.svg";
import NightlightRoundTwoToneIcon from "@mui/icons-material/NightlightRoundTwoTone";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Navbar() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 800px)",
    });

    const [menu, setMenu] = useState(false);
    const handleHamburger = () => {
        setMenu(!menu);
    };
    return (
        <>
            <div className="navbar-container">
                {isDesktopOrLaptop ? (
                    <>
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
                                {/*🌕 */}
                                <NightlightRoundTwoToneIcon className="nav-logo-mode" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navbar">
                            <div className="nav-logo">
                                <img className="nav-logo-image" src={logo} alt="LOGO" />
                            </div>

                            <input
                                type="checkbox"
                                id="hamburger"
                                onChange={handleHamburger}
                                checked={menu}
                                className="navbar-hamburger-input"
                            />

                            <label for="hamburger">
                                <div className="navbar-hamburger">
                                    {menu ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                                </div>
                            </label>

                            {menu && (
                                <div className="hamburger-container">
                                    <div className="nav-menu">
                                        <NavLink to="/" className="navbar-nav navbar-nav-link">
                                            <nav className="navbar-nav">HOME</nav>
                                        </NavLink>
                                        <NavLink
                                            to="/movies"
                                            className="navbar-nav navbar-nav-link"
                                        >
                                            <nav className="navbar-nav">MOVIES</nav>
                                        </NavLink>

                                        <NavLink
                                            to="/tv-shows"
                                            className="navbar-nav navbar-nav-link"
                                        >
                                            <nav className="navbar-nav">TV SHOWS</nav>
                                        </NavLink>

                                        <NavLink
                                            to="/genres"
                                            className="navbar-nav navbar-nav-link"
                                        >
                                            <nav className="navbar-nav">GENRES</nav>
                                        </NavLink>
                                    </div>
                                    <div className="navbar-mode">
                                        <NightlightRoundTwoToneIcon className="nav-logo-mode" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Navbar;
