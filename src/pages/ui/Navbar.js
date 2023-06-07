import { NavLink } from "react-router-dom";
import Links from "../../db/links.json";

import React, { useEffect, useState } from "react";

const { links } = Links;

export const Navbar = () => {
    
  const documentBody = document.getElementsByTagName("body")[0];
  const dMode = JSON.parse(localStorage.getItem("dark-mode")) === true;

  const [darkMode, setDarkMode] = useState( !dMode );


  const handleDarkMode = (e) => {

    setDarkMode(!darkMode);
    localStorage.setItem("dark-mode", darkMode);
  };

  useEffect(() => {

    if (darkMode) {
        documentBody.classList.add("dark-mode");
      } else {
        documentBody.classList.remove("dark-mode");
      }
      
  }, [darkMode]);

//TODO:  Arreglar la navegacion en celulares

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <NavLink
            className="no-text-decoration"
            to={`${process.env.PUBLIC_URL}/`}
          >
            Pedro Valdivia
          </NavLink>
        </h1>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-3 rounded-circle mx-auto"
                src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
                alt="image"
              />

              <div className="bio mb-3">
                Hi, my name is Pedro Valdivia <br /> Senior Full-Stack / Mobile
                Developer. <br /> Welcome to my personal website!
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href={links.linkedin} target="_blank">
                    <i className="fab fa-linkedin-in fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.github} target="_blank">
                    <i className="fab fa-github-alt fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.instagram} target="_blank">
                    <i className="fab fa-instagram fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.stackoverflow} target="_blank">
                    <i className="fab fa-stack-overflow fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={links.codepen} target="_blank">
                    <i className="fab fa-codepen fa-fw"></i>
                  </a>
                </li>
              </ul>
              <hr />
            </div>

            <ul className="navbar-nav flex-column text-start">
              <li className="nav-item">
                <NavLink  className={({isActive}) => "nav-link " + (isActive ? " active": " " )}  to={`${process.env.PUBLIC_URL}/`}>
                  <i className="fas fa-user fa-fw me-2"></i>About Me
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/portfolio`}
                >
                  <i className="fas fa-laptop-code fa-fw me-2"></i> Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/resume`}
                >
                  <i className="fas fa-file-alt fa-fw me-2"></i> Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                   className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/blog`}
                >
                  <i className="fas fa-blog fa-fw me-2"></i> Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/contact`}
                >
                  <i className="fas fa-envelope-open-text fa-fw me-2"></i>{" "}
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="my-2 mt-4">
              <a
                className="btn btn-primary"
                href={`${process.env.PUBLIC_URL}/contact`}
                target="_blank"
              >
                <i className="fas fa-paper-plane me-2"></i>Hire Me
              </a>
            </div>

            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <i className="fas fa-adjust me-1"></i>Dark Mode
              </h4>

              <input
                className="toggle"
                id="darkmode"
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkMode}
              />
              <label
                className="toggle-btn mx-auto mb-0"
                htmlFor="darkmode"
              ></label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
