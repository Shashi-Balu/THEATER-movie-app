import React, { useState } from "react";
import logo from "../../../assets/cinematrix-1.png";
import NightlightRoundTwoToneIcon from "@mui/icons-material/NightlightRoundTwoTone";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LanguageIcon from "@mui/icons-material/Language";

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
            <div className="navbar">
                <div className="nav-logo">
                    <img className="nav-logo-image" src={logo} alt="LOGO" />
                </div>
                <div className="nav-menu">
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/"
                        className="navbar-nav navbar-nav-link"
                    >
                        <nav className="navbar-nav">HOME</nav>
                    </NavLink>
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/movies"
                        className="navbar-nav navbar-nav-link"
                    >
                        <nav className="navbar-nav">MOVIES</nav>
                    </NavLink>

                    <NavLink
                        exact
                        activeClassName="active"
                        to="/tv-shows"
                        className="navbar-nav navbar-nav-link"
                    >
                        <nav className="navbar-nav">TV SHOWS</nav>
                    </NavLink>

                    <NavLink
                        exact
                        activeClassName="active"
                        to="/genres"
                        className="navbar-nav navbar-nav-link"
                    >
                        <nav className="navbar-nav">GENRES</nav>
                    </NavLink>
                </div>
                {/* <div>
                    <label for="language">
                        <LanguageIcon className="language-icon" />
                    </label>
                    <select name="language" id="languages">
                        <option value="fr"> French</option>
                        <option value="en"> English</option>
                    </select>
                </div> */}
                {/* <div className="navbar-mode">
               
                    <NightlightRoundTwoToneIcon className="nav-logo-mode" />
                </div> */}
            </div>
        </>
        // <>
        //     <div className="navbar-container">
        //         {isDesktopOrLaptop ? (
        //             <>
        //                 <div className="navbar">
        //                     <div className="nav-logo">
        //                         <img className="nav-logo-image" src={logo} alt="LOGO" />
        //                     </div>
        //                     <div className="nav-menu">
        //                         <NavLink exact activeClassName="active" to="/" className="navbar-nav navbar-nav-link">
        //                             <nav className="navbar-nav">HOME</nav>
        //                         </NavLink>
        //                         <NavLink exact activeClassName="active" to="/movies" className="navbar-nav navbar-nav-link">
        //                             <nav className="navbar-nav">MOVIES</nav>
        //                         </NavLink>

        //                         <NavLink exact activeClassName="active" to="/tv-shows" className="navbar-nav navbar-nav-link">
        //                             <nav className="navbar-nav">TV SHOWS</nav>
        //                         </NavLink>

        //                         <NavLink exact activeClassName="active" to="/genres" className="navbar-nav navbar-nav-link">
        //                             <nav className="navbar-nav">GENRES</nav>
        //                         </NavLink>
        //                     </div>

        //                     <div className="navbar-mode">
        //                         {/*🌕 */}
        //                         <NightlightRoundTwoToneIcon className="nav-logo-mode" />
        //                     </div>
        //                 </div>
        //             </>
        //         ) : (
        //             <>
        //                 <div className="navbar">
        //                     <div className="nav-logo">
        //                         <img className="nav-logo-image" src={logo} alt="LOGO" />
        //                     </div>

        //                     <input
        //                         type="checkbox"
        //                         id="hamburger"
        //                         onChange={handleHamburger}
        //                         checked={menu}
        //                         className="navbar-hamburger-input"
        //                     />

        //                     <label for="hamburger">
        //                         <div className="navbar-hamburger">
        //                             {menu ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        //                         </div>
        //                     </label>

        //                     {menu && (
        //                         <div className="hamburger-container">
        //                             <div className="nav-menu">
        //                                 <NavLink exact activeClassName="active" to="/" className="navbar-nav navbar-nav-link">
        //                                     <nav className="navbar-nav">HOME</nav>
        //                                 </NavLink>
        //                                 <NavLink exact activeClassName="active"
        //                                     to="/movies"
        //                                     className="navbar-nav navbar-nav-link"
        //                                 >
        //                                     <nav className="navbar-nav">MOVIES</nav>
        //                                 </NavLink>

        //                                 <NavLink exact activeClassName="active"
        //                                     to="/tv-shows"
        //                                     className="navbar-nav navbar-nav-link"
        //                                 >
        //                                     <nav className="navbar-nav">TV SHOWS</nav>
        //                                 </NavLink>

        //                                 <NavLink exact activeClassName="active"
        //                                     to="/genres"
        //                                     className="navbar-nav navbar-nav-link"
        //                                 >
        //                                     <nav className="navbar-nav">GENRES</nav>
        //                                 </NavLink>
        //                             </div>
        //                             <div className="navbar-mode">
        //                                 <NightlightRoundTwoToneIcon className="nav-logo-mode" />
        //                             </div>
        //                         </div>
        //                     )}
        //                 </div>
        //             </>
        //         )}
        //     </div>
        // </>
    );
}

export default Navbar;
