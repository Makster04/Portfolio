// src/components/Travel/Travel.jsx
import React from 'react';
import SingleTravelCard from './SingleTravelCard';
import travelData from './TravelData';
import './Travel.css';

const Travel = () => {
    return (
        <div className="app">
            <h1>My Travel Spots</h1>
            <div className="travel-cards-container">
                {travelData.map((spot, index) => (
                    <SingleTravelCard key={index} spot={spot} />
                ))}
            </div>
        </div>
    );
};

export default Travel;

