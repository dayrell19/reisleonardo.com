import React from "react";
import "./Profile.css";
import { ReactComponent as WorkIcon } from "../assets/workIcon.svg";
import { ReactComponent as AboutmeIcon } from "../assets/aboutmeIcon.svg";
import { ReactComponent as EducationIcon } from "../assets/educationIcon.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Profile() {
  return (
    <div class="timelineContainer">
      <h1>ABOUT ME</h1>

      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242424", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242424" }}
          iconStyle={{ background: "#fff", color: "#242424" }}
          icon={<AboutmeIcon />}
        >
          <h3 className="vertical-timeline-element-title">Profile</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Belo Horizonte, Brazil
          </h4>
          <p>
            My name is Leonardo Reis, a 21 year old electrical engineer
            undergrad at University of British Columbia. I'm a very energetic
            and dedicated person, with strong communication and collaborative
            skills.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242424", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242424" }}
          iconStyle={{ background: "#fff", color: "#242424" }}
          icon={<AboutmeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            A little about myself
          </h3>
          <p>
            I started programming in the end of 2019 when I took my first
            programming course in University. Ever since, my passion for it has
            only grown, keeping me on the lookout for new things to learn, new
            projects and ways to hone my skills by exposing myself to
            opportunities in software and web development.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242424", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242424" }}
          iconStyle={{ background: "#fff", color: "#242424" }}
          icon={<EducationIcon />}
          date="January 2016 -December 2018"
          dateClassName="dates"
        >
          <h3 className="vertical-timeline-element-title">High School</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Belo Horizonte, Brazil
          </h4>
          <p>
            I had my entire high school experience at Colegio Santo Antonio, one
            of the best high schools in Brazil. Even though the academic
            knowledge was important, the biggest lesson I learned there was that
            hard work always pays off.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242424", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242424" }}
          iconStyle={{ background: "#fff", color: "#242424" }}
          icon={<EducationIcon />}
          date="September 2019 - April 2023"
          dateClassName="dates"
        >
          <h3 className="vertical-timeline-element-title">College</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vancouver, Canada
          </h4>
          <p>
            I am an Electrical Engineer Undergraduate at University of British
            Columbia. Here is where I found my passion for programming and where
            I started dreaming about where I want to get to in my life. UBC has
            definately helped me realize the path I want to follow in my life
            and how to be successful in it.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242424", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242424" }}
          iconStyle={{ background: "#fff", color: "#242424" }}
          icon={<WorkIcon />}
          date="August 2020 - February 2021"
          dateClassName="dates"
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer Intern @ S.A. Run
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Belo Horizonte, Brazil
          </h4>
          <p>
            Developed, tested, and deployed front-end web application components
            with React Native and JavaScript. Implemented dynamic React Native
            web pages with JavaScript, HTML, CSS from concept through deployment
            and created REST API endpoints to interface front-end with backend
            MongoDB database.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#242424", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #242424" }}
          iconStyle={{ background: "#fff", color: "#242424" }}
          icon={<WorkIcon />}
          date="August 2021 - December 2021"
          dateClassName="dates"
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer @ C&C
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Belo Horizonte, Brazil
          </h4>
          <p>
            Developed a product management system from design to completion.
            Participated on the creation of the designs for the frontend using
            Figma and built them using React and TypeScript. Built the API to
            handle user role requests and manage multiple MySQL tables using
            Node.js, TypeScript and PrismaORM. Contributed to settling user
            authentication using Microsoft Azure's Oauth.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Profile;
