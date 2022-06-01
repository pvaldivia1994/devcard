import React from "react";
import Swal from "sweetalert2";
import BlogsData from "../../db/blogs.json";
import { BlogItem } from "./BlogItem";
const { blogs } = BlogsData;

export const BlogPage = () => {
  document.title = "Pedro Valdivia - Blog";
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

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire(
      'Message sent!',
      'Thank you very much for subscribing to my blog. Soon you will be notified of new publications.',
      'success'
    );

    setDisable(true);
  };

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
            <form className="signup-form row g-2 g-lg-2 align-items-center" onSubmit={sendEmail}>
              <div className="col-12 col-md-9">
                <label className="sr-only" htmlFor="semail">
                  Your email
                </label>
                <input
                  type="email"
                  required={true}
                  id="semail"
                  name="semail1"
                  disabled={disable}
                  className="form-control me-md-1 semail"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-12 col-md-2">
                <button type="submit" className="btn btn-primary" disabled={disable}>
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
            {blogs.length > 0 ? (
            <div className="project-cards row isotope">
              {blogs.map((project, index) => (
                <BlogItem key={index} datos={project} />
              ))}
            </div>
          ) : (
            <h2 className="text-center">I will add this section coming soon ...  <br /> <br /> <br /> <br /> <br /> <br /></h2>
          )}
          </div>
        </div>
      </section>
    </div>
  );
};
