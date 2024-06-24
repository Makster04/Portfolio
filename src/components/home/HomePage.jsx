import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";

const HomePage = () => {
  return (
    <div className="home" style={{ position: 'relative', zIndex: 2 }}>
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "3rem", // Corrected typo
                position: "relative",
                zIndex: 2, // Ensure text appears in front
              }}
            >
              Greetings, it's
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "Fira Code",
                fontSize: "4rem", // Corrected typo
                position: "relative",
                zIndex: 2, // Ensure text appears in front
              }}
            >
              <span
                style={{
                  color: "#000080",
                  fontFamily: "monospace",
                  position: "relative",
                  fontSize: "7rem", // Corrected typo
                  textDecoration: "",
                  textShadow: "0 0 10px white",
                  animation: "pulse 2s infinite",
                  zIndex: 2, // Ensure text appears in front
                }}
              >
                MAK TRNKA
              </span>
            </h1>
          </div>
          <div className="text-animation">
            <TypeAnimation />
          </div>
        </div>
      </div>
      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
