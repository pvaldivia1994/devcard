import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutPage } from "../components/about/AboutPage";
import { BlogPage } from "../components/blog/BlogPage";
import { ContactPage } from "../components/contact/ContactPage";
import { PortfolioPage } from "../components/portfolio/PortfolioPage";
import { ResumePage } from "../components/resume/ResumePage";
import Footer from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";

import "../styles/theme-4.scss";

export const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-wrapper">

        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/portfolio`} element={<PortfolioPage />} />
          <Route path={`${process.env.PUBLIC_URL}/resume`} element={<ResumePage />} />
          <Route path={`${process.env.PUBLIC_URL}/blog`} element={<BlogPage />} />
          <Route path={`${process.env.PUBLIC_URL}/contact`} element={<ContactPage />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
};
