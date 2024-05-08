// Import Statements

import React from "react";
import avatar from "../../assets/IdidThat.png";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";
import Timeline from "./Timeline"; // Importing the Timeline component

// Constant Declaration

const resumeURL = "https://docs.google.com/document/d/1GYLeAw0znx4qqupsi1OFI1ZxOTX4fKPxvYo0yQh3eOE/edit";

// Component Definition

const HomeBottomPage = () => {

  return (
    <div className="homeBottom" >
      <h1 style={{ fontSize: "2.6rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "Black" }}>About Me</span>
      </h1>


      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Mak Trnka, currently studying at{" "}
            <span style={{ color: "#32CD30" }}>CODE FELLOWS</span> for
            Software Development.
          </p>
          <br />
          <p>
            I have huge passion in <span style={{ color: "#32CD30" }}>Tech & Creativity</span> and my top tech skills currently include
            using Javascript, CSS, React, & the MERN stack. I am starting to go further learning AWS and TypeScript now. Later I want to learn Data Science.
          </p>
          <br />
          <p>
            I am also a huge <span style={{ color: "#32CD30" }}>Travel Buff</span>, traveled to 25 countries so far. In addition, I am a nerd about history, pop culture, movies, NBA, politics, cultures, & society. I wish to start a podcast at some point.
          </p>
          <br />
          <p>
            I have huge talent in creating ideas, creating word excel graphs, and word powerpoints just for fun.{" "}
            <span style={{ color: "#32CD30" }}>SERIAL CREATOR</span>.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>resume</span> for more about me.{" "}
          </p>
        </div>
        

        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-100 h-100"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
      

      <div className="downloadPdf">
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<FiDownloadCloud />}
            style={{ marginBottom: "50px" }}
          >
            Resume
          </Button>
          </a>
      </div>

      Adding the Timeline component
      {/* <Timeline /> */}
    </div>
  );
};

// Export Component

export default HomeBottomPage;
