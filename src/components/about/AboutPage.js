import React from "react";

import { NavLink } from "react-router-dom";
import { SkillItem } from "./SkillItem";

import { Projects } from "./Projects";
import { Blogs } from "./Blogs";

import SkillsData from "../../db/skills.json";

const { skills } = SkillsData;

export const AboutPage = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="about-me-section p-3 py-lg-5 px-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div className="col">
              <h2 className="name font-weight-bold mb-1">Pedro Valdivia</h2>
              <div className="tagline mb-3">
                Senior Full-Stack / Mobile Developer
              </div>
              <div className="bio mb-4">
                I am a software developer specialized in frontend and backend
                development of complex and scalable applications, always try to
                stay ahead with the different technologies, languages and
                frameworks.
                <br />
                <br />
                There are no limits to development.
                <br />
              </div>
              <div className="mb-3">
                <NavLink
                  className="btn btn-primary me-2 mb-3"
                  to={`${process.env.PUBLIC_URL}/portfolio`}
                >
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>
                  <span className="d-none d-md-inline">View</span> Portfolio
                </NavLink>
                <NavLink
                  className="btn btn-secondary mb-3"
                  to={`${process.env.PUBLIC_URL}/resume`}
                >
                  <i className="fas fa-file-alt me-2"></i>
                  <span className="d-none d-md-inline">View</span> Resume
                </NavLink>
              </div>
            </div>

            <div className="col-md-5 col-lg-5">
              <img
                className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                src="assets/images/profile-lg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overview-section p-3 py-lg-4 px-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">What I do</h2>

          <div className="section-intro mb-5">
            I have more than 8+ years of experience in creating software for
            different clients. Below is a quick overview of my main technical
            skill sets and technologies I use. Want to find out more about my
            experience? Check out my{" "}
            <NavLink
              className="text-link"
              to={`${process.env.PUBLIC_URL}/resume`}
            >
              online resume
            </NavLink>{" "}
            and{" "}
            <NavLink
              className="text-link"
              to={`${process.env.PUBLIC_URL}/portfolio`}
            >
              project portfolio
            </NavLink>
            .
          </div>

          <div className="row">
            {skills.map((skill, index) => (
              <SkillItem key={index} sk={skill} />
            ))}
          </div>
        </div>
      </section>

      <Projects />

      <Blogs />
    </div>
  );
};
