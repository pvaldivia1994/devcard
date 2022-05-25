import React from "react";
import BlogsData from "../../db/blogs.json";
import { BlogItem } from "./BlogItem";
const { blogs } = BlogsData;

export const BlogPage = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">
            A Blog About Software Development And Life
          </h2>
          <div className="intro">
            Welcome to my blog. Subscribe and get my latest blog post in your
            inbox.
          </div>
          <div className="single-form-max-width pt-3 mx-auto">
            <form className="signup-form row g-2 g-lg-2 align-items-center">
              <div className="col-12 col-md-9">
                <label className="sr-only" htmlFor="semail">
                  Your email
                </label>
                <input
                  type="email"
                  id="semail"
                  name="semail1"
                  className="form-control me-md-1 semail"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            {blogs.map((project, index) => (
              <BlogItem key={index} datos={project} />
            ))}
          </div>

          <nav className="blog-nav nav nav-justified my-5">
            <a
              className="nav-link-prev nav-item nav-link d-none rounded-left"
              href="#"
            >
              Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
            </a>
            <a className="nav-link-next nav-item nav-link rounded" href="#">
              Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};
