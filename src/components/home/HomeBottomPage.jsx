// Import Statements

import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";

// Constant Declaration

const resumeURL = "https://drive.google.com/file/d/1ahsxf-lCTFqqF5amadW83EXtsNSWt8G5/view?usp=sharing";

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
              class="rounded w-36 h-36"
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
          </Button>
        </a>
      </div>
    </div>
  );
};

// Export Component

export default HomeBottomPage;
