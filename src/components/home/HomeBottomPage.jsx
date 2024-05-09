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
      <h1 style={{ fontSize: "3.5rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "#000080" }}>About Me</span>
      </h1>


      <div className="introduction">
        <div className="intro-text">
          <p>
          I'm Mak Trnka, enrolled in <span style={{ color: "red" }}>CODE FELLOWS</span> learning Software Development for the first time. My enthusiasm lies at the intersection of technology and creativity. Currently, I'm adept in JavaScript, CSS, React, and the MERN stack, with a newfound interest in mastering AWS and TypeScript. Beyond that, I aspire to delve into the realm of Data Science.
          </p>
          <br />
          <p>
          Outside the realm of technology, I'm an <span style={{ color: "Plum" }}>AVID TRAVELER</span>, having explored 25 countries to date. My interests span across the world data, history, (geo)politics, diverse cultures, and societal dynamics. Therefore, Traveling will always be one of my major talents and hobbies.
          </p>
          <br />
          <p>
          I've been described by many as <span style={{ color: "Pink" }}>OMNILEGENT</span>. In addition to the other topics mentioned, my interest also span across other topics such as Movies, Pop Culture, Personal Life, Basketball, Wildlife, Food, Breaking News, other Data, and such. I harbor aspirations of starting a podcast to discuss these eclectic topics or even start a youtube channel.
          </p>
          <br />
          <p>
          I'm also a <span style={{ color: "Orange" }}>SERIAL CREATOR</span>. I possess a knack for ideation and enjoy crafting visually engaging presentations and data-driven reports in tools like Word, Excel, and PowerPoint. What also makes me a serial creator is the fact I have many Business ideas, App ideas, Legislative ideas, and creating content for several different topics (Positive effects come from having ADHD and being on the Spectrum as well as you can see).
          </p>
          <br />
          <p>
          So stick around, take a look, and feel free to reach out if you ever want to meet up or begin a new journey in life! For a comprehensive overview, feel free to peruse my <span style={{ color: "#89dc88" }}>RESUME</span>. 
          </p>
        </div>
        

        <div className="intro-image" style={{ marginTop: '80px' }}>
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
            style={{ marginBottom: "75px" }}
          >
            Resume
          </Button>
          </a>
      </div>

    </div>
  );
};

// Export Component

export default HomeBottomPage;
