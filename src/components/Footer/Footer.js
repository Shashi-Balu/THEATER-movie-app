import React from "react";
import "./Footer.css";
import logo from "../../assets/THEATER.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <>
            <hr className="footer-hr" />

            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="THEATER" className="footer-logo" />
                    <p className="footer-img-content">watch latest movies and tv shows</p>
                </div>
                <div className="footer-center">
                    <p className="footer-center-content">
                        developed by <span className="developer-name">shashi balu</span>
                    </p>
                </div>
                <div className="footer-right">
                    <div>
                        <GitHubIcon />
                    </div>
                    <div>
                        <LinkedInIcon />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
