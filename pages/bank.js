import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/header.tsx";
import Navigation from "../components/navigation.tsx";
import Footer from "../components/footer.tsx";
import React from "react";

const Page = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <div className="container narrow">
        <section className="section content">
          <h1 className="title  has-text-centered">
            Banking Details</h1>
          <p className="is-size-4  has-text-centered">
            Somerset Strikers is a cashless organisation.
          </p>
          
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <td>Bank</td>
                <td>
                  <strong>First National Bank</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <nobr>Branch Code</nobr>
                </td>
                <td>
                  <strong>250655</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <nobr>Account Number</nobr>
                </td>
                <td>
                  <strong>63020516134</strong>
                </td>
              </tr>
              <tr>
                <td>Reference</td>
                <td>
                  <strong>Initial Surname PURPOSE</strong>
                  <br />
                  e.g. 
                  <br />
                  S. Nkosi SUBS
                  <br />
                  S. Nkosi KIT
                  <br />
                  S. Nkosi CPL
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
    </React.Fragment>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Page;
