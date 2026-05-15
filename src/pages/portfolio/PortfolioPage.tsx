import isotope from "isotope-layout";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import ProjectsData from "../../db/porfolio.json";
import { ProjectItem } from "./ProjectItem";
import { useI18n } from "../../i18n/I18nContext";
const { projects } = ProjectsData;

export const PortfolioPage = () => {
  const { t } = useI18n();

  document.title = `Pedro Valdivia - ${t("common.portfolio")}`;

  const imagesLoaded = () => {
    const isotopeContainer = document.querySelector<HTMLElement>(".isotope");
    const filterItems = document.querySelectorAll<HTMLElement>("#filters .type");

    if (!isotopeContainer) {
      return;
    }

    var iso = new isotope(isotopeContainer, {
      // options
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
    });

    // filter items on click
    filterItems.forEach((filterItem) => {
      filterItem.addEventListener("click", (e) => {
        let filterValue = filterItem.getAttribute("data-filter");

        // arrange - https://isotope.metafizzy.co/methods.html
        iso.arrange({ filter: filterValue });

        //toggle active class
        if (!filterItem.parentElement) {
          return;
        }

        for (let siblingFilterItem of Array.from(filterItem.parentElement.children)) {
          siblingFilterItem.classList.remove("active");
        }
        filterItem.classList.add("active");
      });
    });
  };

  useEffect(() => {
    imagesLoaded();
  });


  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">{t("portfolio.title")}</h2>
          <div className="intro">
            <p>
              {t("portfolio.intro")}
            </p>
          </div>
          <NavLink
            className="btn btn-primary"
            to={`${process.env.PUBLIC_URL}/contact`}
            target="_blank"
          >
            <i className="fas fa-paper-plane me-2"></i>{t("common.hireMe")}
          </NavLink>
        </div>
      </section>

      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto   ps-0">
              <li className="type active mb-3 mb-lg-0" data-filter="*">
                {t("portfolio.filters.all")}
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".webapp">
                {t("portfolio.filters.webapp")}
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">
                {t("portfolio.filters.mobileapp")}
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".frontend">
                {t("portfolio.filters.frontend")}
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".backend">
                {t("portfolio.filters.backend")}
              </li>
            </ul>
          </div>
          {projects.length > 0 ? (
            <div className="project-cards row isotope">
              {projects.map((project, index) => (
                <ProjectItem key={index} datos={project} />
              ))}
            </div>
          ) : (
            <h2 className="text-center">{t("common.comingSoon")}  <br /> <br /> <br /> <br /> <br /> <br /></h2>
          )}
        </div>
      </section>
    </div>
  );
};
