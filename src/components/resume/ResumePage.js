import React from "react";
import datos from "../../db/resume.json";

const { tel, mail, page, dir , pdf} = datos.datos;

export const ResumePage = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading mb-3">Online Resume</h2>
          <a
            className="btn btn-primary"
            href={pdf}
            target="_blank"
          >
            <i className="fas fa-file-pdf me-2"></i>Download PDF Version
          </a>
        </div>
      </section>

      <div className="container resume-container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div className="resume-header">
            <div className="row align-items-center">
              <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">
                  Pedro Valdivia
                </h2>
                <div className="resume-tagline mb-3 mb-md-0">
                  Senior Full-Stack / Mobile Developer
                </div>
              </div>
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-phone-square fa-fw fa-lg me-2 "></i>
                    <a className="resume-link" href="tel:#">
                      {tel}
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-envelope-square fa-fw fa-lg me-2"></i>
                    <a className="resume-link" href="mailto:#">
                      {mail}
                    </a>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-globe fa-fw fa-lg me-2"></i>
                    <a className="resume-link" href="#">
                      {page}
                    </a>
                  </li>
                  <li className="mb-0">
                    <i className="fas fa-map-marker-alt fa-fw fa-lg me-2"></i>
                    {dir}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-intro py-3">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 col-xl-2 text-center">
                <img
                  className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto"
                  src="assets/images/resume-profile.png"
                  alt="image"
                />
              </div>

              <div className="col text-start">
                <p className="mb-0">
                  I'm a software developer, who always stays at the forefront
                  with programming languages and development methodologies. 9
                  years ago I started studying development and I have not
                  stopped. I'm an active and perfectionist person who tries to
                  do things as well as possible.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
                <section className="work-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Senior Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Afp Reservas | 2019 - Present
                      </div>
                    </div>
                    <div className="item-content">
                      <ul className="resume-list">
                        <li>
                          Developed the mobile application for clients
                          (Android/IOS) in Xamarin, providing tools to clients
                          which reduced the waiting and response time by 60%.
                        </li>
                        <li>
                          Reduced the costs of contracted services by 20% by
                          developing a framework based on .Net for the mass
                          emails communications.
                        </li>
                        <li>
                          Designed an application in C# increasing the
                          productivity of the development of new modules in
                          Oracle Forms 11g by 70%.
                        </li>
                      </ul>
                      <p>
                        <b>Tech Stack : </b>
                        React, Node, Xamarin, Asp. Net Core, PL/SQL, Java,
                        Oracle, Sql Server, C#, HTML, CSS, JavaScript, Form 11g.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Afp Reservas | 2016 - 2019
                      </div>
                    </div>
                    <div className="item-content">
                      <ul className="resume-list">
                        <li>
                          Developed the mobile app for the sales area (Android)
                          in Xamarin increasing employee productivity by 40%.
                        </li>
                        <li>
                          Improved administrative management by 25% by
                          developing an internal web portal in React and Node
                          that provides KPI and BI views for the management.
                        </li>
                        <li>
                          Reduced the time of data transfer and collection
                          between external companies by 60% by developing and
                          consuming Web services in Asp .Net Core (REST/SOAP).
                        </li>
                      </ul>
                      <p>
                        <b>Tech Stack : </b>
                        PL/SQL, Java, Oracle, Sql Server, Android Studio,
                        Xamarin, C#, HTML, CSS, JavaScript, Asp. Net, Form 9.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Software Developer
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Afp Reservas | 2015 - 2016
                      </div>
                    </div>
                    <div className="item-content">
                      <ul className="resume-list">
                        <li>
                          Development of administrative views in the core of the
                          company that increased productivity. WPF C#
                        </li>
                        <li>
                          Worked on the migration of the main App from WPF to
                          Asp.Net Azure, Moving the Core to a Web environment.
                        </li>
                        <li>
                          I worked on the development of the Mobile Tool in
                          Xamarin, which changed the work to a remote
                          environment
                        </li>
                      </ul>
                      <p>
                        <b>Tech Stack : </b> C#, Xamarin, WPF, SQL Server, Asp.
                        Net, HTML, CSS, JavaScript, Azure, Entity Framework.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="project-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Projects
                  </h3>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Afp Reservas
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        App Mobile - 2019
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        URL IOS :{" "}
                        <a
                          href="https://apps.apple.com/do/app/afp-reservas/id1488535361?l=en"
                          target="_blank"
                        >
                          App Store
                        </a>
                        <br />
                        URL Android :{" "}
                        <a
                          href="https://play.google.com/store/apps/details?id=com.afpreservas.appafpreservas"
                          target="_blank"
                        >
                          Google Play
                        </a>
                        <br />
                        <b>Tech Stack : </b> Xamarin, Asp.Net Core and Oracle.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                      <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                        Web Sol Taino
                      </h4>
                      <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-right">
                        Web Page - 2017
                      </div>
                    </div>
                    <div className="item-content">
                      <p>
                        URL :{" "}
                        <a href="https://www.soltaino.com/" target="_blank">
                          www.soltaino.com
                        </a>
                        <br />
                        <b>Tech Stack:</b> PHP, MySql and Bootstrap3.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
              <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                      English <span className="text-muted">(Professional)</span>
                    </li>
                    <li>
                      Spanish <span className="text-muted">(Native)</span>
                    </li>
                  </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>

                  <div className="item">
                    <h4 className="item-title">Professional</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      React, Node, .Net Core, C#, HTML, CSS, JavaScrip, PL/SQL,
                      Oracle Forms, Razor, SQL. <br />
                    </div>
                  </div>

                  <div className="item">
                    <h4 className="item-title">Technical</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      Java, PHP, VB.Net, C++, Python.
                    </div>
                  </div>

                  <div className="item">
                    <h4 className="item-title">Frameworks and Tools</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                      Xamarin, Asp MVC, Entity Framework, Web API REST, Web
                      Services SOAP, Boostrap4, Json, Xml; IIS, Oracle 11g, Git,
                      Google Maps Api, Git, Azure, Apache, Xamp, Gitlab,
                      Bitbucket, Trelo.
                    </div>
                  </div>

                  <div className="item">
                    <h4 className="item-title">Data Base</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                    Oracle, SQLServer, MongoDB, MySql, SqlLite.
                    </div>
                  </div>

                  <div className="item">
                    <h4 className="item-title">Methodologies</h4>
                    <div className="resume-degree font-weight-bold mb-3">
                    Scrum, Agil.
                    </div>
                  </div>

                </section>

                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul className="list-unstyled resume-education-list">
                    <li className="mb-3">
                      <div className="resume-degree font-weight-bold">
                      Application design and development technician
                      </div>
                      <div className="resume-degree-org text-muted">
                        Infotep - R.D.
                      </div>
                      <div className="resume-degree-time text-muted">
                        2013 - 2014
                      </div>
                    </li>
                    <li>
                      <div className="resume-degree font-weight-bold">
                      Computer and systems engineering
                      </div>
                      <div className="resume-degree-org text-muted">
                        {"University O&M - R.D."}
                      </div>
                      <div className="resume-degree-time text-muted">
                        2016 - (Estudent)
                      </div>
                    </li>
                  </ul>
                </section>
               
              </aside>
            </div>
          </div>
          <hr />

          <div className="resume-footer text-center">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              <li className="list-inline-item mb-lg-0 me-3">
                <a
                  className="resume-link"
                  href="https://github.com/pvaldivia1994"
                >
                  <i
                    className="fab fa-github-square fa-2x me-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    github.com/pvaldivia1994
                  </span>
                </a>
              </li>
              <li className="list-inline-item mb-lg-0 me-3">
                <a
                  className="resume-link"
                  href="https://www.linkedin.com/in/pedro-valdivia/"
                >
                  <i
                    className="fab fa-linkedin fa-2x me-2"
                    data-fa-transform="down-4"
                  ></i>
                  <span className="d-none d-lg-inline-block text-muted">
                    linkedin.com/in/pedro-valdivia
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};
