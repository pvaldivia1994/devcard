import React, {useEffect} from "react";

import { Routes, Route, BrowserRouter , Navigate} from "react-router-dom";
import { AboutPage } from "../components/about/AboutPage";
import { BlogPage } from "../components/blog/BlogPage";
import { ContactPage } from "../components/contact/ContactPage";
import { PortfolioPage } from "../components/portfolio/PortfolioPage";
import { ResumePage } from "../components/resume/ResumePage";
import Footer from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import { Page404 } from "../components/ui/Page404";

import "../styles/theme-4.scss";
import 'animate.css';
import ScrollToTop from "../helpers/ScrollToTop";
import ReactGA from 'react-ga';

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
          <Route path={`${process.env.PUBLIC_URL}/portfolio`} element={<PortfolioPage />} />
          <Route path={`${process.env.PUBLIC_URL}/resume`} element={<ResumePage />} />
          <Route path={`${process.env.PUBLIC_URL}/blog`} element={<BlogPage />} />
          <Route path={`${process.env.PUBLIC_URL}/contact`} element={<ContactPage />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<AboutPage />} />
          <Route  path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
};
