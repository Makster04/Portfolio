import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import SingleTravelCard from "./SingleTravelCard";
import GlobeComponent from "./GlobeComponent"; // Import the GlobeComponent
import travelData from "./TravelData";
import "./Travel.css"; // Assuming you have defined styles for .travels

const Travel = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="travels">
      <div className="background-image"> {/* or use className="background-color" */}
        {/* Content inside the background */}
        <h1
          style={{
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
            color: "white",
            position: "relative", // Ensure content is above background
            zIndex: 1, // Ensure content is above background
          }}
        >
          <span style={{ position: "relative", zIndex: 2 }}>My Recent</span>{" "}
          <span style={{ color: "yellow", position: "relative", zIndex: 2 }}>
            Trips
          </span>
        </h1>
        <p>
          <span style={{ position: "relative", zIndex: 2 }}>
            A page showing all the nations and places I went on the globe, along with an album of pics from certain spots I began photography in! 
            </span>
        </p>
      </div>
      
      {/* Render the GlobeComponent with width passed as prop */}
      <GlobeComponent width={width} />

      <div className="travel-cards-container">
        <Card.Group itemsPerRow={width > 786 ? 3 : 1}>
          {travelData.map((spot, index) => (
            <SingleTravelCard className="card" key={index} spot={spot} />
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

export default Travel;
