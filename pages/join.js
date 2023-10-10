import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
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
          <h1 className="title  has-text-centered">{t("pages.join.title")}</h1>
          <p className="content is-size-4  has-text-centered">
            {t("pages.join.intro")}
          </p>
          <p className="content">
            The cricket club season runs from <strong>October to March</strong>{" "}
            with regular practice and matches. We play{" "}
            <strong>hard-ball</strong> cricket and cater for ages{" "}
            <strong>U7 up to U15</strong>. A <strong>Full Junior</strong> member
            is for any player wanting to practice and play competitive matches.
            The discounted <strong>Social Junior</strong> member attends
            practice and can play in internal matches. Parents or guardians do
            not need to join as members.
          </p>
          <table className="table is-fullwidth">
            <thead>
              <tr className="is-selected">
                <th className="has-no-wrap">Type</th>
                <th className="has-no-wrap">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong className="has-no-wrap">Full Junior (U7-U13)</strong>

                  <br />
                  <small>
                    Practice,{" "}
                    <Link href="/play">
                      <a>WP Youth League</a>
                    </Link>
                    , Tournaments*, Friendly Matches, Internal Matches
                  </small>
                </td>
                <td>
                  <strong>R1,300</strong>
                  <br />
                  <small className="has-no-wrap">R650 by October 31</small>
                  <br />
                  <small className="has-no-wrap">R650 by January 31</small>
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="has-no-wrap">Full Junior (U14/U15)</strong>
                  <br />
                  <small>
                    Practice, Tournaments*, Friendly Matches, Internal Matches
                  </small>
                </td>
                <td>
                  <strong>R1,020</strong>
                  <br />
                  <small className="has-no-wrap">R510 by October 31</small>
                  <br />
                  <small className="has-no-wrap">R510 by January 31</small>
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="has-no-wrap">Social Junior</strong>
                  <br />
                  <small>Practice, Internal Matches</small>
                </td>
                <td>
                  <strong>R700</strong>
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
            You may pay the full fee, or half by <strong>October 31</strong> and
            the remaining amount by <strong>January 31</strong>.
          </p>
          <table className="table is-fullwidth">
            <thead>
              <tr className="is-selected">
                <th colSpan="2">Payment must be made by EFT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bank</td>
                <td>
                  <strong>First National Bank</strong>
                </td>
              </tr>
              <tr>
                <td className="has-no-wrap">Branch Code</td>
                <td>
                  <strong>250655</strong>
                </td>
              </tr>
              <tr>
                <td className="has-no-wrap">Account Number</td>
                <td>
                  <strong>63020516134</strong>
                </td>
              </tr>
              <tr>
                <td>Reference</td>
                <td>
                  <strong>Initial Surname SUBS</strong>
                  <br />
                  e.g.
                  <br />
                  S. Nkosi SUBS
                </td>
              </tr>
            </tbody>
          </table>
          <p className="content has-text-centered">
            Send Proof of Payment to
            <wbr /> <strong>treasurer@somersetstrikers.co.za</strong>
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
