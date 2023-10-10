import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import React from "react";
import Link from "next/link";
import FixturesTable from "components/fixtures-table.tsx";

import data from "data/fixtures.json";
const leagueGroup = data.leagues[0].groups[0];

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="container is-widescreen">
      <Header />
      <Navigation />
      <div className="container narrow">
        <section className="section">
          <h1 className="title  has-text-centered">{t("pages.play.title")}</h1>
          <p className="content is-size-4  has-text-centered">
            {t("pages.play.intro")}
          </p>
        </section>
      </div>
      <h2 className="title  has-text-centered">{t("pages.play.fixtures")}</h2>
      <FixturesTable
        currentLeague={data.leagues[0].shortName}
        currentGroup={data.leagues[0].groups[0].shortName}
        leagues={data.leagues}
      />

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
