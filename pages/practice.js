import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import React from "react";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="container is-widescreen">
      <Header />
      <Navigation />
      <div className="container narrow">
        <section className="section">
          <h1 className="title  has-text-centered">
            {t("pages.practice.title")}
          </h1>
          <p className="content is-size-4 has-text-centered">
            {t("pages.practice.intro")}
          </p>
          <p className="content">
            We practice and play hard-ball cricket. We do not offer Mini Cricket
            yet.
          </p>
          <table className="table is-fullwidth">
            <thead>
              <tr className="is-selected">
                <th className="has-no-wrap">Group</th>
                <th className="has-no-wrap">Time</th>
                <th className="has-no-wrap">Venue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong className="has-no-wrap">U10-U12*</strong>
                </td>
                <td>16:45 to 18:00</td>
                <td>Beaumont Primary School</td>
              </tr>
              <tr>
                <td>
                  <strong className="has-no-wrap">U13-U15</strong>
                </td>
                <td>16:45 to 18:15</td>
                <td>Parel Vallei High School</td>
              </tr>
            </tbody>
          </table>
          <ul className="content">
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-rectangle-list"></i>
                </span>
                <span>
                  <strong>Bring</strong> a hard-ball, bat, helmet, pads, gloves,
                  and shoes**
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-clock"></i>
                </span>
                <span>
                  Arrive at practice <strong>15 minutes</strong> before
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-circle-user"></i>
                </span>
                <span>
                  <strong>Bystanders</strong> to stay off practice area
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <span>
                  Bags, bottles etc. <strong>neatly</strong> lined up
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-circle-xmark"></i>
                </span>
                <span>
                  No <strong>alcohol</strong> or <strong>smoking/vaping</strong>{" "}
                  allowed
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-map"></i>
                </span>
                <span>
                  <a
                    href="https://goo.gl/maps/pb6rgbbfGghYCYqR8"
                    rel="noopener"
                  >
                    Beaumont Primary School, Van Der Merwe Road, Somerset West
                  </a>
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-map"></i>
                </span>
                <span>
                  <a
                    href="https://maps.app.goo.gl/HFeXzz5sK1LApiVa6"
                    rel="noopener"
                  >
                    Parel Vallei High School, Parel Valley Road, Somerset West
                  </a>
                </span>
              </span>
            </li>
          </ul>
          <p className="content is-size-7">
            * u7, u8, and u9 practice with u10.
          </p>
          <p className="content is-size-7">
            ** No spikes at practice at Beaumont Primary School. Bring both
            spiked and non-spiked shoes for practice at Parel Vallei High
            School.
          </p>
        </section>
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
