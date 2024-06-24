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
                Mak Trnka</span>. As a Bosnian-American... if I can survive RAKIJA & CEVAPI, then I can survive CODING & PROGRAMMING.
            </p>
            <br />
            <p style={{ textAlign: "justify"}}>
              Apart from my current life, here are some of the facts about me:<br /><br />
              <ul>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "BLacK", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>DATE & PLACE OF BIRTH:</span> April 12, 1998 (Richmond, VA, USA)
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>FAMILY PLACE OF BIRTH:</span> Bosnia & Herzegovina
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>ASTROLOGICAL SIGN:</span> Aries
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>HOME:</span> Seattle, WA, USA
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>EDUCATION:</span> Bellevue College (2016-19), University of Washington (2019-22)
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>DEGREE:</span> Associates (Sociology), Bachelors (Poli Sci & International Studies)
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>LANGUAGES:</span> English, Bosnian/Serban/Croatian/Montenegrian
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>HOBBIES:</span> Talking (Movies, Pop Culture, Basketball, (GEO)Politics, Movies, World Cultures, Hisory, Personal Life, Society, Food, News, etc.), Gym, Hooping, Traveling, Photography, Playing Videogames, Watching Movies, Creating Data Sets & Powerpoints, Comparing & Contrasting, Helping.
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>DREAMS:</span> Start a Podcast, Create a Business (I already have a Tech Business Plan layed out), Start a Youtube Channel.
                </li>
                <li>
                  <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                  <span style={{ color: "Black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"}}>POSITIVE TRAITS:</span> Goofy, Outgoing, Sympathetic, Caring, Energetic, Curious, Open-Minded, Creative, Unintentionally Funny, Dramatic, Generous, Hospitable.
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
