import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <>
            <div className={`card-container ${props.className}`}>
                <p className="card-heading">{props.title}</p>
                <p className="card-plus">+</p>
                <div className="card-image-container">
                    <img className="card-images" src={props.img} />
                </div>
            </div>
        </>
    );
}

export default Card;
