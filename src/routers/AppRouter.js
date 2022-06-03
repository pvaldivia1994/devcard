import React, { useEffect } from "react";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import "../styles/theme-7.scss";
import "animate.css";
import ScrollToTop from "../helpers/ScrollToTop";
import ReactGA from "react-ga";

import {
  PortfolioPage,
  ResumePage,
  BlogPage,
  ContactPage,
  AboutPage,
  Navbar,
  Footer,
  ProjectPage,
} from "../pages";

const TRACKING_ID = "UA-229981826-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

export const AppRouter = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-wrapper">
        <ScrollToTop />
        <Routes>
          <Route path={"portfolio"} element={<PortfolioPage />}></Route>
          <Route path="/portfolio/:pageId" element={<ProjectPage />} />
          <Route path={"resume"} element={<ResumePage />} />
          <Route path={"blog"} element={<BlogPage />} />
          <Route path={"contact"} element={<ContactPage />} />
          <Route path={"/"} element={<AboutPage />} />
          <Route
            path="*"
            element={<Navigate to={"/"} replace />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
