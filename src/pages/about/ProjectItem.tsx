import React from "react";
import { NavLink } from "react-router-dom";
import type { ProjectSummary } from "../../types";
import { useI18n } from "../../i18n/I18nContext";

type ProjectItemProps = {
  datos: ProjectSummary;
};

export const ProjectItem = ({datos}: ProjectItemProps) => {
  const { t } = useI18n();
 
  const  {title, desc, client, image, projectId} = datos;
  const projectUrl = `${process.env.PUBLIC_URL}/portfolio/${projectId}`;
  
  return (
    <div className="col-md-6 mb-5">
      <div className="card project-card">
        <div className="row no-gutters">
          <div className="col-12 col-xl-5 card-img-holder">
            <img
              src={image}
              className="card-img"
              alt="image"
            />
          </div>
          <div className="col-12 col-xl-7">
            <div className="card-body">
              <h5 className="card-title">
                <NavLink to={projectUrl} className="theme-link">
                  {title}
                </NavLink>
              </h5>
              <p className="card-text">
                {desc}
              </p>
              <p className="card-text">
                <small className="text-muted">{t("common.client")}: {client}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask">
          <NavLink className="link-mask-link" to={projectUrl} />
          <div className="link-mask-text">
            <NavLink to={projectUrl} className="btn btn-secondary">
              <i className="fas fa-eye me-2"></i>{t("portfolio.viewCaseStudy")}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
