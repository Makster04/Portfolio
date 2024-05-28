import React from "react";
import avatar from "../../assets/IdidThat.png";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const resumeURL = "https://docs.google.com/document/d/1GYLeAw0znx4qqupsi1OFI1ZxOTX4fKPxvYo0yQh3eOE/edit";

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
              className="rounded w-100 h-100"
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

      <div className="timeline-section" style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textAlign: "center" }}>
          My Journey
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date="2024 - Present"
             iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
             icon={<FaGraduationCap />}
             contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }} // Changed textAlign to 'left'
             contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
             dateClassName="custom-date"
           >
             <h3 className="vertical-timeline-element-title" style={{ color: 'Red' }}>Code Fellows</h3>
             <h4 className="vertical-timeline-element-subtitle" style={{ color: '#333' }}>Seattle, WA</h4>
             <p style={{ color: '#555' }}>
               Learning Software Development with a focus on JavaScript.
               <ul>
                 <li><span style={{ color: "Red", fontWeight: "bold" }}>Certificate of Completion in Code 301:</span> Intermediate Software Development</li>
                 <li><span style={{ color: "Red", fontWeight: "bold" }}>Certificate of Completion in Code 201:</span> Foundations of Software Development</li>
                 <li><span style={{ color: "Red", fontWeight: "bold" }}>Certificate of Completion in Code 102:</span> Intro to Software Development</li>
               </ul>
             </p>
           </VerticalTimelineElement>
           <VerticalTimelineElement
             className="vertical-timeline-element--work"
             date="2022 - 2023"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
             icon={<FaBriefcase />}
             contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }} // Changed textAlign to 'left'
             contentArrowStyle={{ borderRight: '30px solid  #e0f7fa' }}
             dateClassName="custom-date"
           >
             <h3 className="vertical-timeline-element-title" style={{ color: 'Green' }}>Behavior Technician & Paraprofessional</h3>
             <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Seattle & Renton, WA</h4>
             <p style={{ color: '#004d40' }}>
               <ul>
                 <li>- Provided dedicated support to learners with disabilities across different educational settings in different schools.</li>
                 <li>- Adapted quickly to varying environments, showcasing flexibility and empathy in assisting students with diverse needs.</li>
               </ul>
             </p>
           </VerticalTimelineElement>
           <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date="2019 - 2022"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
             icon={<FaGraduationCap />}
             contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }} // Changed textAlign to 'left'
             contentArrowStyle={{ borderRight: '7px solid  #e0f7fa' }}
             dateClassName="custom-date"
           >
             <h3 className="vertical-timeline-element-title" style={{ color: 'Purple' }}>University of Washington</h3>
             <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Seattle, WA</h4>
             <p style={{ color: '#004d40' }}>
               <ul>
                 <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Bachelors Degree:</span> Political Science</li>
                 <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Minor:</span> International Studies</li>
                 <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Activies:</span> Model UN, Student Senate, West Coast Model EU, Unite UW</li>
               </ul>
             </p>
           </VerticalTimelineElement>
           <VerticalTimelineElement
             className="vertical-timeline-element--education"
             date="2016 - 2018"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
             icon={<FaGraduationCap />}
             contentStyle={{ background: '#e0f7fa', color: '#00796b', textAlign: 'left' }} // Changed textAlign to 'left'
             contentArrowStyle={{ borderRight: '30px solid  #e0f7fa' }}
             dateClassName="custom-date"
           >
             <h3 className="vertical-timeline-element-title" style={{ color: 'Blue' }}>Bellevue College</h3>
             <h4 className="vertical-timeline-element-subtitle" style={{ color: '#00796b' }}>Bellevue, WA</h4>
             <p style={{ color: '#004d40' }}>
               <ul>
                 <li><span style={{ color: "BLACK", fontWeight: "bold" }}>Associates Degree:</span> Sociology</li>
               </ul>
             </p>
           </VerticalTimelineElement>
         </VerticalTimeline>
      </div>
    </div>
  );
};

export default HomeBottomPage;