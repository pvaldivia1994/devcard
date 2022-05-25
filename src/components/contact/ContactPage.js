import React , {useRef} from "react";
import { NavLink } from "react-router-dom";

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import Links from "../../db/links.json";
import Ekey from "../../db/emailkey.json";

const { links } = Links;
const { emailkey } = Ekey;

export const ContactPage = () => {
  
  const form = useRef();

  const [disable, setDisable] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setDisable(true);
    
    emailjs.sendForm(emailkey.USER_ID, emailkey.TEMPLATE_ID, form.current, emailkey.PUBLIC_KEY)
      .then((result) => {
        console.log(result);
        Swal.fire(
          'Message sent!',
          'Thank you very much for contacting me. I will be answering your message as soon as possible.',
          'success'
        );
        e.target.reset();
      }, (error) => {
        console.log(error);
        Swal.fire({
          title: 'Error to Send Message!',
          text: 'An error occurred while sending the message, please contact me via email : ' + links.email,
          icon: 'error'
        });
      });
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to{" "}
              <a className="text-link" href="mailto:#" target="_blank" rel="noreferrer">
                {links.email}
              </a>
            </p>
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3">
                <a className="linkedin" href={links.linkedin} target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="github" href={links.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github-alt fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="instagram" href={links.instagram} target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="stack-overflow" href={links.stackoverflow} target="_blank" rel="noreferrer">
                  <i className="fab fa-stack-overflow fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="codepen" href={links.codepen} target="_blank" rel="noreferrer">
                  <i className="fab fa-codepen fa-fw fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form ref={form}
            id="contact-form"
            className="contact-form col-lg-8 mx-lg-auto"
            onSubmit={sendEmail}
            action=""
          >
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="sr-only" htmlFor="cname">
                  Name
                </label>
                <input
                  autoComplete="false"
                  type="text"
                  className="form-control"
                  id="cname"
                  name="name"
                  placeholder="Name ..."
                  minLength="2"
                  required="true"
                  aria-required="true"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="sr-only" htmlFor="cemail">
                  Email
                </label>
                <input
                  autoComplete="false"
                  type="email"
                  className="form-control"
                  id="cemail"
                  name="email"
                  placeholder="Email ..."
                  required="true"
                  aria-required="true"
                />
              </div>
              <div className="col-12">
                <input
                  autoComplete="false"
                  type="text"
                  required="true"
                  className="form-control"
                  id="csubject"
                  name="subject"
                  placeholder="Subject ..."
                  minLength="2"
                  aria-required="true"
                />
                <div className="mt-2">
                  <small className="form-text text-muted pt-1">
                    <i className="fas fa-info-circle me-2 text-primary"></i>Want
                    Do you want to know more about me? Check the{" "}
                    <NavLink className="text-link" to={`${process.env.PUBLIC_URL}/`} target="_blank">
                      main
                    </NavLink>{" "}
                    page.
                  </small>
                </div>
              </div>
              <div className="col-12">
                <label className="sr-only" htmlFor="cmessage">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder="Enter your message ..."
                  rows="10"
                  required="true"
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  disabled={disable}
                  className="btn btn-block btn-primary py-2"
                >
                  Send Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
