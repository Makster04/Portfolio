import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/bosnianparrot.gif";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
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
              <span style={{ color: "yellow", fontWeight: "bold" }}>
                Mak Trnka
              </span>{" "}
              I live in the United States and am a Bosnian Descendent, Second Generation. I went to two colleges{" "}
              and currently I'm learning Software Engineering at a Bootcamp named{" "}
              <span style={{ color: "RED", fontWeight: "bold" }}>
                CODE FELLOWS
              </span>
              .
            </p>
            <br />
            <p style={{ textAlign: "justify"}}>
              Apart from my current life, here are some of the facts about me:<br /><br />
              <ul>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Blue" }}>DATE & PLACE OF BIRTH:</span> April 12, 1998 (Richmond, VA, USA)
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Yellow" }}>FAMILY PLACE OF BIRTH:</span> Bosnia & Herzegovina
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Blue" }}>ASTROLOGICAL SIGN:</span> Aries
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Yellow" }}>HOME:</span> Seattle, WA, USA
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Blue" }}>EDUCATION:</span> Bellevue College (2016-19), University of Washington (2019-22)
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Yellow" }}>DEGREE:</span> Associates (Sociology), Bachelors (Poli Sci & International Studies)
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Blue" }}>LANGUAGES:</span> English, Bosnian/Serban/Croatian/Montenegrian
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Yellow" }}>HOBBIES:</span> Talking (Movies, Pop Culture, Basketball, (GEO)Politics, Movies, World Cultures, Hisory, Personal Life, Society, Food, News, etc.), Gym, Hooping, Traveling, Photography, Playing Videogames, Watching Movies, Creating Data Sets & Powerpoints, Comparing & Contrasting, Helping.
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Blue" }}>DREAMS:</span> Start a Podcast, Create a Business (I already have a Tech Business Plan layed out), Start a Youtube Channel.
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Yellow" }}>POSITIVE TRAITS:</span> Goofy, Outgoing, Sympathetic, Caring, Energetic, Curious, Open-Minded, Creative, Unintentionally Funny, Dramatic, Generous, Hospitable.
                </li>
              </ul>
            </p>
          </div>
          <img
            className="rounded about-image"
            src={codeImage}
            alt="Extra large avatar"
            style={{ width: "700px", marginBottom: "50px"}} // Set width of the image
          />
        </div>
        
        <div style={{ marginTop: '7rem', padding: '5rem', borderRadius: '10px' }}>
          <TechStack />
        </div>        
        <h1
          style={{
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
        </h1>
        <br />
        <div className="github-graph">
          <GitHubCalendar
            style={{ marginBottom: "90px" }}
            username="Makster04"
            blockMargin={6}
            blockSize={12}
            fontSize={16}
            color={"#32CD30"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
