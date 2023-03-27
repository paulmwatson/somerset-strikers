import { useTranslation } from "next-i18next";
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
      <section className="section pt-5">
        <header className="has-text-centered">
          <Image
            src="/images/somerset-strikers-logo-1000x1290.webp"
            alt={t("logo.alt")}
            width="256"
            height="330"
          />
        </header>
        <main className="content container is-max-width-30em has-text-centered mt-4">
          <p className="is-size-6">{t("pages.404.intro")}</p>
          <Link href="/">
            <a className="button is-success is-uppercase is-fullwidth is-large">
              {t("navigation.return_home")}
            </a>
          </Link>
        </main>
      </section>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
