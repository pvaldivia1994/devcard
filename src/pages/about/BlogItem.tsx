import React from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import type { BlogPost } from "../../types";
import { useI18n } from "../../i18n/I18nContext";

type BlogItemProps = {
  datos: BlogPost;
};

export const BlogItem = ({ datos }: BlogItemProps) => {
  const { t } = useI18n();

  const { title, desc, url , image, date} = datos;

  const myMomentObject = moment(date, 'MM-DD-YYYY');
  const dateTimeAgo = myMomentObject.fromNow();

  return (
    <div className="col-md-4 mb-5">
      <div className="card blog-post-card">
        <img
          className="card-img-top"
          src={image}
          alt="image"
        />
        <div className="card-body">
          <h5 className="card-title">
            <NavLink className="theme-link" to={url}>
              {title}
            </NavLink>
          </h5>
          <p className="card-text">
            {desc}
          </p>
          <p className="mb-0">
            <NavLink className="text-link"  to={url}>
              {t("common.readMore")} &rarr;
            </NavLink>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{t("blogPage.published")} {dateTimeAgo}</small>
        </div>
      </div>
    </div>
  );
};
