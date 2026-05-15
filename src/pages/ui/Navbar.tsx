import { NavLink } from "react-router-dom";
import Links from "../../db/links.json";

import React, { useEffect, useState } from "react";
import { useI18n } from "../../i18n/I18nContext";

const { links } = Links;

export const Navbar = () => {
  const { t, toggleLanguage } = useI18n();
    
  const documentBody = document.getElementsByTagName("body")[0];
  const dMode = JSON.parse(localStorage.getItem("dark-mode")) === true;

  const [darkMode, setDarkMode] = useState( !dMode );
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleDarkMode = () => {

    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    localStorage.setItem("dark-mode", JSON.stringify(nextDarkMode));
  };

  useEffect(() => {

    if (darkMode) {
        documentBody.classList.add("dark-mode");
      } else {
        documentBody.classList.remove("dark-mode");
      }
      
  }, [darkMode]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            aria-controls="navigation"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            id="navigation"
            className={`collapse navbar-collapse flex-column ${isMenuOpen ? "show" : ""}`}
          >
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-3 rounded-circle mx-auto"
                src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
                alt="image"
              />

              <div className="bio mb-3">
                {t("nav.bio").split("<br />").map((line, index) => (
                  <React.Fragment key={line}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
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
                <NavLink onClick={closeMenu} className={({isActive}) => "nav-link " + (isActive ? " active": " " )}  to={`${process.env.PUBLIC_URL}/`}>
                  <i className="fas fa-user fa-fw me-2"></i>{t("nav.about")}
                  <span className="sr-only">({t("nav.current")})</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/portfolio`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-laptop-code fa-fw me-2"></i> {t("common.portfolio")}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/resume`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-file-alt fa-fw me-2"></i> {t("common.resume")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                   className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/blog`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-blog fa-fw me-2"></i> {t("common.blog")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({isActive}) => "nav-link " + (isActive ? " active": " " )} 
                  to={`${process.env.PUBLIC_URL}/contact`}
                  onClick={closeMenu}
                >
                  <i className="fas fa-envelope-open-text fa-fw me-2"></i>{" "}
                  {t("common.contact")}
                </NavLink>
              </li>
            </ul>

            <div className="my-2 mt-4">
              <a
                className="btn btn-primary"
                href={`${process.env.PUBLIC_URL}/contact`}
                target="_blank"
              >
                <i className="fas fa-paper-plane me-2"></i>{t("common.hireMe")}
              </a>
            </div>

            <div className="my-2">
              <button
                type="button"
                className="language-toggle"
                onClick={toggleLanguage}
                aria-label={t("nav.language")}
              >
                <i className="fas fa-language"></i>
                {t("nav.languageToggle")}
              </button>
            </div>

            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <i className="fas fa-adjust me-1"></i>{t("nav.darkMode")}
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
