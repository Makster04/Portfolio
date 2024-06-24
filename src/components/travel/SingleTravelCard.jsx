// src/components/Travel/SingleTravelCard.jsx
import React from 'react';
import './Travel.css';

const SingleTravelCard = ({ spot }) => {
    if (!spot) {
        return null;
    }

    const { name, image, place, description } = spot;

    return (
        
        <div className="single-travel-card">
            <img src={image} alt={name} />
            <div className="travel-card-content">
                <h2>{name}</h2>
                <p><strong>Places:</strong> {place}</p>
                <p><strong>Description:</strong> {description}</p>
            </div>
        </div>
    );
};

export default SingleTravelCard;


