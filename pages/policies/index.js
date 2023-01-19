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
          <h1 className="title has-text-centered">Policies</h1>
          <ol class="content">
            <li>
              <Link href="/policies/selection">
                <a>Selection Policy and Ethos</a>
              </Link>
            </li>
            <li>
              <Link href="/policies/anti-discrimination-code-of-conduct">
                <a>Anti-Discrimination Policies and Codes of Conduct</a>
              </Link>
            </li>
          </ol>
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
