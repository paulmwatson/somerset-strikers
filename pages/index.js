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
    <React.Fragment>
      <Header />
      <Navigation />
      <section className="section pt-5">
        <header className="has-text-centered">
          <Image
            src="/logo.webp"
            alt={t("logo.alt")}
            height="256"
            width="256"
          />
        </header>
        <main className="content container is-max-width-30em has-text-centered mt-4">
          <h1 className="title is-2 is-size-1-95-mobile is-uppercase has-text-weight-bold">
            {t("home.h1")}
          </h1>
          <p>{t("home.intro")}</p>
          <Link href="/join">
            <a className="button is-link is-uppercase is-fullwidth is-large">
              {t("home.join")}
            </a>
          </Link>
        </main>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
