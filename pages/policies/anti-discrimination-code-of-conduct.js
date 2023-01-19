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
          <h1 className="title has-text-centered">
            Anti-Discrimination Policies and Codes of Conduct
          </h1>
          <p className="content">
            Our values are inclusion, safety, development, respect, and
            transparency.
          </p>
          <p className="content">
            The following codes and policies apply to all people on and at
            Somerset Strikers communication channels and events including but
            not limited to emails, chat groups, practices, matches, and
            meetings.
          </p>
          <p className="content">
            Volunteers include Committee members and people recruited and
            assigned by Committee members and include, but are not limited to,
            coaches, managers, scorers, and umpires.
          </p>
          <p className="content">
            Other people these codes and policies apply to are players, members,
            parents, guardians, and supporters.
          </p>
          <p className="content">
            The codes, policies, and guidelines of the organisation hosting an
            event may supersede these. Please make an effort to be aware of your
            host.
          </p>
          <ol className="content">
            <li>All official communication is to be done in English.</li>
            <li>
              Please be mindful of what languages others understand to ensure
              inclusive communication.
            </li>
            <li>
              Volunteers have work and personal lives to attend to. Please
              respect their privacy and time.
            </li>
            <li>
              All volunteers will respect the privacy and time of other people.
            </li>
            <li>
              Volunteers are mostly untrained and are learning too. Be forgiving
              of mistakes.
            </li>
            <li>
              No discrimination by race, ethnicity, culture, beliefs, or
              religion will be tolerated.
            </li>
            <li>
              There may be gender rules but inappropriate gender discrimination
              will not be tolerated.
            </li>
            <li>
              There may be age rules but inappropriate age discrimination will
              not be tolerated.
            </li>
            <li>
              Ability may be a factor in selection but inappropriate disability
              discrimination will not be tolerated.
            </li>
            <li>
              No physical or emotional violence including hate speech by any
              person will be tolerated.
            </li>
            <li>
              Please be mindful of vulgar language around children and other
              people.
            </li>
            <li>
              Please clean up after yourself and do not leave litter behind.
            </li>
            <li>
              Volunteers should be mindful of consuming alcohol and tobacco
              products around children and other people while performing their
              duties.
            </li>
            <li>
              No alcohol or tobacco products allowed at practice. Please be
              mindful of alcohol and tobacco product consumption at other
              events.
            </li>
            <li>
              Volunteers should ensure all children are accounted for and in the
              care of an adult before leaving an event.
            </li>
            <li>
              Volunteers should ensure facilities including but not limited to
              pitches and fields are looked after.
            </li>
            <li>
              Volunteers should ensure all inventory items including but not
              limited to wickets, bails, balls, cones, and scoring sheets are
              cared for and retained.
            </li>
            <li>
              We encourage support but ask that people do not coach from the
              sidelines.
            </li>
            <li>
              Everyone must conduct themselves in a fair manner. Healthy
              competition is encouraged but we respect our opponents, our team
              mates, officials, volunteers, supporters, ground staff, and the
              rules and spirit of the game of cricket. If in conflict, be
              gracious and remember we are here to develop young people.
            </li>
          </ol>

          <h2 className="title">Disputes</h2>
          <p className="content">
            Disputes to codes and policies will be handled by the Committee in a
            transparent manner.
          </p>

          <h2 className="title">Complaints</h2>
          <p className="content">
            Please address complaints in English to the chairperson and
            secretary via email;
            <br />
            <a href="mailto:chairperson@somersetstrikers.co.za">
              chairperson@somersetstrikers.co.za
            </a>
            <br />
            <a href="mailto:secretary@somersetstrikers.co.za">
              secretary@somersetstrikers.co.za
            </a>
          </p>

          <p className="content">
            Should the chairperson be the subject of your complaint you may
            address it solely to the secretary.
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
