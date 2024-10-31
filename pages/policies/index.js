import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../../components/header.tsx";
import Navigation from "../../components/navigation.tsx";
import Footer from "../../components/footer.tsx";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Page = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container is-widescreen">
        <Header />
        <Navigation />
        <div className="container narrow">
          <section className="section">
            <h1 className="title has-text-centered">Policies and Processes</h1>
            <ol className="content">
              <li>
                <Link href="/policies/selection">Selection Policy</Link>
              </li>
              <li>
                <Link href="/policies/ethos">Ethos</Link>
              </li>
              <li>
                <Link href="/policies/anti-discrimination-code-of-conduct">
                  Anti-Discrimination Policies and Codes of Conduct
                </Link>
              </li>
              <li>
                <Link href="/policies/annual-general-meeting-process">
                  Annual General Meeting Process
                </Link>
              </li>
              <li>
                <Link href="/policies/u10-guidelines-for-matches-player-rotation">
                  U10 Guidelines For Matches &amp; Player Rotation
                </Link>
              </li>
            </ol>
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
