import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Serial Creator",
          "Software Enthusiast",
          "Data Enthusiast",
          "History Buff",
          "Movie Buff",
          "News Buff",
          "(Geo)Political Buff",
          "Society Buff",
          "Pop Culture Buff",
          "World Travler",
          "Social Media",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        delay: 50, // Adds delay between each character
        pauseFor: 2000, // Pauses for 2 seconds after each string
        cursor: "_", // Custom cursor
        cursorStyle: "|", // Custom cursor style
        cursorSpeed: 100, // Speed of cursor blinking
        wrapperClassName: "type-animation-wrapper", // Custom wrapper class
        cursorClassName: "type-animation-cursor", // Custom cursor class
        onComplete: () => console.log("Animation completed"), // Callback function on animation completion
      }}
    />
  );
};

export default TypeAnimation;