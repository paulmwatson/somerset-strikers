import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="container is-widescreen">
      <Header />
      <Navigation />
      <div className="container narrow">
        <section className="section has-text-centered">
          <h1 className="title">{t("navigation.contact-us")}</h1>
          <p className="content is-size-4">{t("pages.contact-us.intro")}</p>
          <p className="content">
            <a
              className="button is-medium is-outlined is-multiline"
              href={`mailto:hello@somersetstrikers.co.za`}
              rel="noopener"
            >
              <span className="icon is-medium">
                <i className="far fa-paper-plane"></i>
              </span>
              <span>
                <strong>hello@somersetstrikers.co.za</strong>
              </span>
            </a>
          </p>
          <div className="columns">
            <div className="column">
              <a
                className="button is-medium is-outlined is-multiline"
                href={`https://twitter.com/SomersetSCC`}
                rel="noopener"
              >
                <span className="icon is-medium">
                  <i className="fab fa-twitter"></i>
                </span>
                <span>{t("twitter")}</span>
              </a>
            </div>
            <div className="column">
              <a
                className="button is-medium is-outlined is-multiline"
                href={`https://www.instagram.com/somersetstrikers/`}
                rel="noopener"
              >
                <span className="icon is-medium">
                  <i className="fab fa-instagram"></i>
                </span>
                <span>{t("instagram")}</span>
              </a>
            </div>
            <div className="column">
              <a
                className="button is-medium is-outlined is-multiline"
                href={`https://facebook.com/somersetstrikers`}
                rel="noopener"
              >
                <span className="icon is-medium">
                  <i className="fab fa-facebook"></i>
                </span>
                <span>{t("facebook")}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="container is-widescreen">
        <div className="columns px-6 px-0-mobile">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-3 mb-1">{t("Chairperson")}</p>
                    <p className="title is-5 mb-1">
                      {t("people.chairperson.name")}
                    </p>
                    <p>
                      <a
                        href="mailto:chairperson@somersetstrikers.co.za"
                        className="has-text-grey-dark"
                      >
                        chairperson@somersetstrikers.co.za
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-3 mb-1">{t("Secretary")}</p>
                    <p className="title is-5 mb-1">{t("people.secretary.name")}</p>
                    <p>
                      <a
                        href="mailto:secretary@somersetstrikers.co.za"
                        className="has-text-grey-dark"
                      >
                        secretary@somersetstrikers.co.za
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-3 mb-1">{t("Treasurer")}</p>
                    <p className="title is-5 mb-1">{t("people.treasurer.name")}</p>
                    <p>
                      <a
                        href="mailto:treasurer@somersetstrikers.co.za"
                        className="has-text-grey-dark"
                      >
                        treasurer@somersetstrikers.co.za
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
