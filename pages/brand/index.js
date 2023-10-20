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
            <h1 className="title  has-text-centered">
              {t("pages.brand.title")}
            </h1>
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
          </section>
        </div>
        <div className="container is-widescreen">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title is-size-4 has-text-centered">With Name</h2>
              <Image
                src="/images/somerset-strikers-logo-1000x1290.webp"
                alt="The Somerset Strikers Cricket Club logo with name"
                width="233"
                height="300"
              />
            </div>
            <div className="column has-text-centered">
              <h2 className="title is-size-4 has-text-centered">
                Without Name
              </h2>
              <Image
                src="/images/somerset-strikers-logo-no-name-1000x1000.webp"
                alt="The Somerset Strikers Cricket Club logo without name"
                width="300"
                height="300"
              />
            </div>
            <div className="column has-text-centered">
              <h2 className="title is-size-4 has-text-centered">
                Name To Side
              </h2>
              <Image
                src="/images/somerset-strikers-logo-name-to-side-5000x1062.webp"
                alt="The Somerset Strikers Cricket Club logo name to side"
                width="1412"
                height="300"
              />
            </div>
          </div>
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
