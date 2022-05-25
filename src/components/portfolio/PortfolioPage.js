import isotope from "isotope-layout";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import ProjectsData from "../../db/porfolio.json";
import { ProjectItem } from "./ProjectItem";
const { projects } = ProjectsData;

export const PortfolioPage = () => {
  const imagesLoaded = () => {
    const isotopeContainer = document.querySelector(".isotope");
    const filterItems = document.querySelectorAll("#filters .type");

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
        for (let siblingFilterItem of filterItem.parentNode.children) {
          siblingFilterItem.classList.remove("active");
        }
        filterItem.classList.add("active");
      });
    });
  };

  useEffect(() => {
    imagesLoaded();
  });

/*

{
    "title" : "Vanilla JavaScript",
    "desc" : " Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis disparturient montes.",
    "client" : "Afp Reservas",
    "image" : "assets/images/project/project-1.jpg",
    "Url" : "portfolio",
    "filters" : "webapp"
}

*/

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio. On this page you can find some of
              the projects I have carried out, the languages, frameworks used,
              curiosities and difficulties that their development has had.
            </p>
          </div>
          <NavLink
            className="btn btn-primary"
            to={`${process.env.PUBLIC_URL}/contact`}
            target="_blank"
          >
            <i className="fas fa-paper-plane me-2"></i>Hire Me
          </NavLink>
        </div>
      </section>

      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto   ps-0">
              <li className="type active mb-3 mb-lg-0" data-filter="*">
                All
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".webapp">
                We App
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">
                Mobile App
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".frontend">
                Frontend
              </li>
              <li className="type  mb-3 mb-lg-0" data-filter=".backend">
                Backend
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
            <h2 className="text-center">I will add this section coming soon ...  <br /> <br /> <br /> <br /> <br /> <br /></h2>
          )}
        </div>
      </section>
    </div>
  );
};
