import React from "react";
import { NavLink } from "react-router-dom";

export const ProjectItem = ({ datos }) => {
  const { title, desc, client, image, Url , filters} = datos;

  return (
    <div className={`isotope-item col-md-6 mb-5 ${filters}`}>
      <div className="card project-card">
        <div className="row">
          <div className="col-12 col-xl-5 card-img-holder">
            <img
              src={image}
              className="card-img"
            />
          </div>
          <div className="col-12 col-xl-7">
            <div className="card-body">
              <h5 className="card-title">
                <a href="project.html" className="theme-link">
                  {title}
                </a>
              </h5>
              <p className="card-text">
               {desc}
              </p>
              <p className="card-text">
                <small className="text-muted">Client: {client}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask">
          <NavLink className="link-mask-link" to={`${process.env.PUBLIC_URL}/${Url}`}></NavLink>
          <div className="link-mask-text">
            <NavLink className="btn btn-secondary" to={`${process.env.PUBLIC_URL}/${Url}`}>
              <i className="fas fa-eye me-2"></i>View Case Study
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
