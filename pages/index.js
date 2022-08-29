import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Head>
        <title>{t("site.title")}</title>
        <meta name="description" content={t("site.description")} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />

        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:image"
          content="https://www.somersetstrikers.co.za/profile.webp"
        />
        <meta property="og:url" content="https://www.somersetstrikers.co.za/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("site.title")} />
        <meta property="og:description" content={t("site.description")} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="somersetstrikers.co.za" />
        <meta
          property="twitter:url"
          content="https://www.somersetstrikers.co.za/"
        />
        <meta name="twitter:title" content={t("site.title")} />
        <meta name="twitter:description" content={t("site.description")} />
        <meta
          name="twitter:image"
          content="https://www.somersetstrikers.co.za/profile.webp"
        />
      </Head>
      <section className="section">
        <header className="has-text-centered">
          <Image
            src="/logo.webp"
            alt={t("logo.alt")}
            height="256"
            width="256"
          />
        </header>
        <main className="content container is-max-width-30em has-text-centered">
          <h1 className="title is-2 has-text-primary is-uppercase	has-text-weight-bold">
            {t("home.h1")}
          </h1>
          <p>{t("home.intro")}</p>
          <a className="button is-link is-uppercase is-fullwidth is-large" href="https://bit.ly/somerset-strikers-cc-interest" target="noopener">
            {t("home.register_your_interest")}
          </a>
          <hr />
          <div className="columns is-mobile has-text-centered">
            <div className="column">
              <a href="mailto:hello@somersetstrikers.co.za">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-regular fa-envelope fa-2xl"></i>
                  </span>
                  <span className="sr-only">{t("email")}</span>
                </span>
              </a>
            </div>
            <div className="column">
              <a href="https://twitter.com/SomersetSCC/" target="noopener">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-brands fa-twitter fa-2xl"></i>
                  </span>
                  <span className="sr-only">{t("twitter")}</span>
                </span>
              </a>
            </div>
            <div className="column has-text-centered">
              <a
                href="https://www.instagram.com/somersetstrikers/"
                target="noopener"
              >
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-brands fa-instagram fa-2xl"></i>
                  </span>
                  <span className="sr-only">{t("instagram")}</span>
                </span>
              </a>
            </div>
            <div className="column has-text-centered">
              <a href="https://facebook.com/somersetstrikers" target="noopener">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                  </span>
                  <span className="sr-only">{t("facebook")}</span>
                </span>
              </a>
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
