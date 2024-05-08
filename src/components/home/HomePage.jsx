import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "3rem", // Increased font size
                position: "static",
              }}
            >
              Greetings, it's
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "Fira Code",
                fontSize: "4rem", // Increased font size
                position: "static",
              }}
            >
            {" "}
              <span
                style={{
                  color: "Gold",
                  fontFamily: "Fira Code",
                  position: "static",
                  fontSize: "6rem", // Increased font size
                  textDecoration: "",
                  textShadow: "0 0 10px gold", // Added glow effect
                  animation: "pulse 2s infinite", // Added animation
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
