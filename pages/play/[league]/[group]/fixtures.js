import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "components/header.tsx";
import Navigation from "components/navigation.tsx";
import Footer from "components/footer.tsx";
import React from "react";
import FixturesTable from "components/fixtures-table.tsx";

import data from "data/fixtures.json";

const Page = ({ currentLeague, currentGroup }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container is-widescreen">
        <Header />
        <Navigation />
        <div className="container narrow">
          <section className="section">
            <h1 className="title has-text-centered">
              {t("pages.play.fixtures")}
            </h1>
          </section>
        </div>
        <FixturesTable
          currentLeague={currentLeague}
          currentGroup={currentGroup}
          leagues={data.leagues}
        />
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ params, locale }) => ({
  props: {
    currentLeague: params.league,
    currentGroup: params.group,
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export async function getStaticPaths() {
  const leagueGroupParams = data.leagues.flatMap((league) =>
    league.groups.map((group) => ({
      params: {
        league: league.shortName,
        group: group.shortName,
      },
    }))
  );

  return {
    paths: leagueGroupParams,
    fallback: false,
  };
}

export default Page;
