import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import React from "react";
import Link from "next/link";
import { Trans } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container is-widescreen">
        <Header />
        <Navigation />
        <div className="container narrow">
          <section className="section content">
            <h1 className="title  has-text-centered">
              {t("pages.join.title")}
            </h1>
            <p className="content is-size-4  has-text-centered">
              Joining Somerset Strikers is easy.{" "}
              <a
                href="/register"
                rel="noreferrer"
                className="has-text-weight-bold is-underlined"
                target="_blank"
              >
                Register
              </a>{" "}
              and then attend one of our practice sessions and see what Somerset
              Strikers is all about.
            </p>
            <p className="content">
              The cricket club season runs from{" "}
              <strong>October to March</strong> with regular practice. We cater
              for ages <strong>U7 up to U13</strong> and practice and play{" "}
              <strong>hard-ball</strong> cricket.
            </p>
            <table className="table is-fullwidth is-striped">
              <thead>
                <tr className="is-selected">
                  <th className="has-no-wrap">Type</th>
                  <th className="has-no-wrap">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong className="has-no-wrap">
                      Full Junior (U7-U13)
                    </strong>
                    <br />
                    <small>
                      Practice, <Link href="/play">WP Youth League</Link>,
                      Tournaments*, Friendly Matches, Internal Matches
                    </small>
                  </td>
                  <td>
                    <strong>R1,400</strong>
                    <br />
                    <small className="has-no-wrap">R700 by October 31</small>
                    <br />
                    <small className="has-no-wrap">R700 by January 31</small>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong className="has-no-wrap">Social Player</strong>
                    <br />
                    <small>Practice, Internal Matches</small>
                  </td>
                  <td>
                    <strong>R750</strong>
                    <br />
                    <small className="has-no-wrap">R375 by October 31</small>
                    <br />
                    <small className="has-no-wrap">R375 by January 31</small>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="content is-size-7">
              * Note that your Somerset Strikers fee only covers being eligible
              for selection for tournaments. Any tournament fees are additional
              and for your account.
            </p>
            <p className="content">
              You may pay the full fee, or half by <strong>October 31</strong>{" "}
              and the remaining amount by <strong>January 31</strong>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
