import React from "react";
import './Card.scss';


const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt="Avatar" style={{ width: '100%' }} />
            <div className="stars">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="rating">4.5 (1015)</span>
            </div>
            <div className="container">
                <h4><b>{title}</b></h4>
                <hr />
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;