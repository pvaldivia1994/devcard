import React from "react";

import { NavLink } from "react-router-dom";
import { SkillItem } from "./SkillItem";

import { Projects } from "./Projects";
import { Blogs } from "./Blogs";

import SkillsData from "../../db/skills.json";
import { useI18n } from "../../i18n/I18nContext";

const { skills } = SkillsData;

export const AboutPage = () => {
  const { t } = useI18n();

  document.title = "Pedro Valdivia";
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="about-me-section p-3 py-lg-5 px-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div className="col">
              <h2 className="name font-weight-bold mb-1">Pedro Valdivia</h2>
              <div className="tagline mb-3">
                {t("common.tagline")}
              </div>
              <div className="bio mb-4">
                {t("about.bio")}
                <br />
                <br />
                {t("about.bioClosing")}
                <br />
              </div>
              <div className="mb-3">
                <NavLink
                  className="btn btn-primary me-2 mb-3"
                  to={`${process.env.PUBLIC_URL}/portfolio`}
                >
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>
                  <span className="d-none d-md-inline">{t("common.view")}</span> {t("common.portfolio")}
                </NavLink>
                <NavLink
                  className="btn btn-secondary mb-3"
                  to={`${process.env.PUBLIC_URL}/resume`}
                >
                  <i className="fas fa-file-alt me-2"></i>
                  <span className="d-none d-md-inline">{t("common.view")}</span> {t("common.resume")}
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
          <h2 className="section-title font-weight-bold mb-3">{t("about.whatIDo")}</h2>

          <div className="section-intro mb-5">
            {t("about.introBeforeResume")}{" "}
            <NavLink
              className="text-link"
              to={`${process.env.PUBLIC_URL}/resume`}
            >
              {t("about.onlineResume")}
            </NavLink>{" "}
            {t("about.introBetweenLinks")}{" "}
            <NavLink
              className="text-link"
              to={`${process.env.PUBLIC_URL}/portfolio`}
            >
              {t("about.projectPortfolio")}
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
