import React , {useRef} from "react";
import type { FormEvent } from "react";
import { NavLink } from "react-router-dom";

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

import Links from "../../db/links.json";
import Ekey from "../../db/emailkey.json";
import { useI18n } from "../../i18n/I18nContext";

const { links } = Links;
const { emailkey } = Ekey;

export const ContactPage = () => {
  const { t } = useI18n();

  document.title = `Pedro Valdivia - ${t("common.contact")}`;
  const form = useRef<HTMLFormElement>(null);

  const [disable, setDisable] = React.useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDisable(true);
    
    if (!form.current) {
      return;
    }

    emailjs.sendForm(emailkey.USER_ID, emailkey.TEMPLATE_ID, form.current, emailkey.PUBLIC_KEY)
      .then((result) => {
        console.log(result);
        Swal.fire(
          t("contactPage.successTitle"),
          t("contactPage.successText"),
          'success'
        );
        form.current?.reset();
      }, (error) => {
        console.log(error);
        Swal.fire({
          title: t("contactPage.errorTitle"),
          text: `${t("contactPage.errorText")} ${links.email}`,
          icon: 'error'
        });
      });
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">{t("contactPage.title")}</h2>
          <div className="intro">
            <p>
              {t("contactPage.intro")}{" "}
              <a className="text-link" href="mailto:#" target="_blank" rel="noreferrer">
                {links.email}
              </a>
            </p>
            <p>
              {t("contactPage.socialIntro")}
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
            <h3 className="text-center mb-3">{t("contactPage.formTitle")}</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="sr-only" htmlFor="cname">
                  {t("contactPage.name")}
                </label>
                <input
                  autoComplete="false"
                  type="text"
                  className="form-control"
                  id="cname"
                  name="name"
                  placeholder={t("contactPage.namePlaceholder")}
                  minLength={2}
                  required={true}
                  aria-required={true}
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="sr-only" htmlFor="cemail">
                  {t("contactPage.email")}
                </label>
                <input
                  autoComplete="false"
                  type="email"
                  className="form-control"
                  id="cemail"
                  name="email"
                  placeholder={t("contactPage.emailPlaceholder")}
                  required={true}
                  aria-required={true}
                />
              </div>
              <div className="col-12">
                <input
                  autoComplete="false"
                  type="text"
                  required={true}
                  className="form-control"
                  id="csubject"
                  name="subject"
                  placeholder={t("contactPage.subjectPlaceholder")}
                  minLength={2}
                  aria-required={true}
                />
                <div className="mt-2">
                  <small className="form-text text-muted pt-1">
                    <i className="fas fa-info-circle me-2 text-primary"></i>
                    {t("contactPage.hintBefore")}{" "}
                    <NavLink className="text-link" to={`${process.env.PUBLIC_URL}/`} target="_blank">
                      {t("contactPage.main")}
                    </NavLink>{" "}
                    {t("contactPage.hintAfter")}
                  </small>
                </div>
              </div>
              <div className="col-12">
                <label className="sr-only" htmlFor="cmessage">
                  {t("contactPage.message")}
                </label>
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder={t("contactPage.messagePlaceholder")}
                  rows={10}
                  required={true}
                  aria-required={true}
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  disabled={disable}
                  className="btn btn-block btn-primary py-2"
                >
                  {t("contactPage.send")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
