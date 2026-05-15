import React from "react";
import type { FormEvent } from "react";
import Swal from "sweetalert2";
import BlogsData from "../../db/blogs.json";
import { BlogItem } from "./BlogItem";
import { useI18n } from "../../i18n/I18nContext";
const { blogs } = BlogsData;

export const BlogPage = () => {
  const { t } = useI18n();

  document.title = `Pedro Valdivia - ${t("common.blog")}`;
  /*
  {
      "title" : "Top 3 JavaScript Frameworks",
      "desc" : " Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis disparturient montes.",
      "image" : "assets/images/blog/blog-post-thumb-card-1.jpg",
      "url" : "blog",
      "date": "01-01-2022"
  }
  */

  const [disable, setDisable] = React.useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire(
      t("blogPage.successTitle"),
      t("blogPage.successText"),
      'success'
    );

    setDisable(true);
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">
            {t("blogPage.title")}
          </h2>
          <div className="intro">
            {t("blogPage.intro")}
          </div>
          <div className="single-form-max-width pt-3 mx-auto">
            <form className="signup-form row g-2 g-lg-2 align-items-center" onSubmit={sendEmail}>
              <div className="col-12 col-md-9">
                <label className="sr-only" htmlFor="semail">
                  {t("blogPage.emailLabel")}
                </label>
                <input
                  type="email"
                  required={true}
                  id="semail"
                  name="semail1"
                  disabled={disable}
                  className="form-control me-md-1 semail"
                  placeholder={t("blogPage.emailPlaceholder")}
                />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary" disabled={disable}>
                  {t("blogPage.subscribe")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            {blogs.length > 0 ? (
            <div className="project-cards row isotope">
              {blogs.map((project, index) => (
                <BlogItem key={index} datos={project} />
              ))}
            </div>
          ) : (
            <h2 className="text-center">{t("common.comingSoon")}  <br /> <br /> <br /> <br /> <br /> <br /></h2>
          )}
          </div>
        </div>
      </section>
    </div>
  );
};
