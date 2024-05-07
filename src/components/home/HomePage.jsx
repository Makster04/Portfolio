// Import Statements

import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";
import gifGif from "../../assets/giphy.gif"; // Importing Flag.gif

// Component Definition

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-content">
          

          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              Greetings,
            </h1>
            <h1
              style={{
                color: "white",
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              I'm{" "}
              <span
                style={{
                  color: "Gold",
                  fontFamily: "Fira Code",
                  position: "static",
                  textDecoration: "",
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
        

        <img
          className="rounded"
          src={gifGif} //
          alt="Avatar"
          style={{ width: "300px", height: "300px", margin: "300px" }} // Adjusting width, height, and margin inline
        />
      </div>
      

      <HomeBottomPage />
    </div>
  );
};

// Export Component

export default HomePage;


