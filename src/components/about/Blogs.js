import React from "react";
import { NavLink } from "react-router-dom";
import { BlogItem } from "./BlogItem";

import BlogsData from "../../db/blogs.json";
const { blogs } = BlogsData;

export const Blogs = () => {
  return (
    <section className="latest-blog-section p-3 py-lg-4 px-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">
          Latest Blog Posts
        </h2>
        <div className="row">
          {
			blogs.map((project, index) => (
				<BlogItem key={index} datos={project} />
			))
		  }
        </div>
        <div className="text-center py-3">
          <NavLink to={`${process.env.PUBLIC_URL}/blog`} className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right me-2"></i>View Blog
          </NavLink>
        </div>
      </div>
    </section>
  );
};
