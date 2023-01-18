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
    <React.Fragment>
      <Header />
      <Navigation />
      <div className="container narrow">
        <section className="section">
          <h1 className="title  has-text-centered">{t("pages.brand.title")}</h1>
          <p className="content is-size-4 has-text-centered">
            {t("pages.brand.intro")}
          </p>
          <p className="content has-text-centered">
            <a
            className="button is-primary"
              href="https://bit.ly/strikerslogos"
              rel="noopener"
              target="noopener"
            >
              Download Format and Size Variants
            </a>
          </p>
          <Image
            src="/images/somerset-strikers-logo.svg"
            alt="The Somerset Strikers Cricket Club logo"
            width="753"
            height="753"
          />
          <p className="content is-size-7 has-text-centered">
            Thank you to{" "}
            <a
              href="https://www.digitalcampaigns.co.za/"
              rel="noopener"
              target="noopener"
            >
              Terblanche Fourie
            </a>{" "}
            for creating the logo.
          </p>
        </section>
      </div>
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
