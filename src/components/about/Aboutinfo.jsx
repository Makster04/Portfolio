// Import Statements

import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

// Component Definition

const AboutInfo = () => {
  return (
    <div className="about">
      
      

      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#32CD30" }}>ABOUT</span> ME
      </h1>
      
      

      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hello Fellow Comrades, I am{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              Mak Trnka
            </span>{" "}
            I live in the United States and am a Bosnian Descendent, Second Generation. I went to college at
            {" "}
            <span style={{ color: "pink", fontWeight: "bold" }}>
              UNIVERSITY OF WASHINGTON, 2019-2022
            </span>{" "}
            and currently I'm learning Software Engineering at{" "}
            <span style={{ color: "RED", fontWeight: "bold" }}>
              CODE FELLOWS
            </span>
            .
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Apart from development, some things I like are<br></br>
            <br></br>
            


            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Creating
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Traveling
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Talking
              </li>
            </ul>
          </p>
        </div>
        


        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      


      <TechStack />
      


      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "70px" }}
          username="Makster04"
          blockMargin={6}
          blockSize={12}
          fontSize={16}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

// Export Component

export default AboutInfo;