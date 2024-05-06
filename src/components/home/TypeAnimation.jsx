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
          "Social Mediator",
          "Chatterbox",
          "Goofball"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
};

export default TypeAnimation;