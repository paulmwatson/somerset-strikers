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
        <section className="section">
          <h1 className="title  has-text-centered">
            {t("pages.practice.title")}
          </h1>
          <p className="content is-size-4  has-text-centered">
            {t("pages.practice.intro")}
          </p>
          <table className="table is-fullwidth">
            <thead>
              <tr className="is-selected">
                <th>
                  <nobr>Group</nobr>
                </th>
                <th>
                  <nobr>Time</nobr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="has-background-yellow">
                <td>
                  <nobr>
                    <strong>First Group</strong>
                  </nobr>
                  <br />
                  <small>Born on or after 1 January 2013</small>
                </td>
                <td>
                  <strong>16:30 to 17:30</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <nobr>
                    <strong>Second Group</strong>
                  </nobr>
                  <br />
                  <small>Born before 1 January 2013</small>
                </td>
                <td>
                  <strong>17:45 to 19:00</strong>
                </td>
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
                  and shoes (no spikes).
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-clock"></i>
                </span>
                <span>
                  Arrive at practice <strong>15 minutes</strong> before.
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-id-card"></i>
                </span>
                <span>
                  <strong>Register</strong> your attendance, it's part of the
                  match selection policy.
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-circle-user"></i>
                </span>
                <span>
                  <strong>Bystanders</strong> to stay off practice area.
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-circle-check"></i>
                </span>
                <span>
                  Bags, bottles etc. <strong>neatly</strong> lined up.
                </span>
              </span>
            </li>
            <li>
              <span className="icon-text">
                <span className="icon is-hidden-mobile">
                  <i className="fa-regular fa-circle-xmark"></i>
                </span>
                <span>No <strong>alcohol</strong> or <strong>smoking</strong> allowed.</span>
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
                  .
                </span>
              </span>
            </li>
          </ul>
          <p className="content"></p>
          <a href="https://goo.gl/maps/pb6rgbbfGghYCYqR8" rel="noopener">
            <Image
              src="/images/beaumont-primary-schoo-satellite-map.webp"
              alt="Google Maps Satellite View of Beaumont Primary School"
              width="753"
              height="753"
            />
          </a>
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
