import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../../components/header.tsx";
import Navigation from "../../components/navigation.tsx";
import Footer from "../../components/footer.tsx";
import React from "react";

const Page = () => {
  const { t } = useTranslation();

  return (
    <div className="container is-widescreen">
      <Header />
      <Navigation />
      <div className="container narrow">
        <section className="section content">
          <h1 className="title has-text-centered">
            Annual General Meeting Process
          </h1>
          <h2 className="title">Introduction</h2>
          <p>
            This document seeks to detail the process of the Somerset Strikers
            Cricket Club&apos;s Annual General Meeting (AGM). Following is the
            timeline for the notice of AGM and subsequent information around
            committee nominations, voting and publication of various notices.
          </p>
          <p>
            Please note: the word “member” in this context is the
            parent/guardian of that child who is a playing member of the club.
          </p>
          <p>
            <strong>Notice of AGM</strong> to be sent out{" "}
            <strong>approximately 30 days</strong> before the meeting. Notice
            will include:
          </p>
          <ul>
            <li>Minutes of the previous AGM and/or Special AGM</li>
            <li>Request for Agenda Items from club members.</li>
            <li>Responsibilities of the Committee positions.</li>
            <li>Nomination and Voting Instructions.</li>
          </ul>
          <h2 className="title">The AGM Agenda will be as follows:</h2>
          <ul>
            <li>Welcome by the Chairperson</li>
            <li>
              To read and confirm the minutes of the previous Annual General
              Meeting or Special AGM. Matters arising therefrom.
            </li>
            <li>
              To receive, confirm and adopt the Treasurer&apos;s Report and the
              Independent Review of the Financial Statement and to discuss
              matters arising therefrom.
            </li>
            <li>Open floor to members who have submitted agenda items.</li>
            <li>
              To consider any proposed additions, alterations or amendments to
              the Constitution, Rules and By-Laws.
            </li>
            <li>To deal with correspondence – if any.</li>
            <li>To elect the Office Bearers for the ensuing year.</li>
            <li>
              To close the meeting. Meeting should be no more than 2 hours in
              duration.
            </li>
          </ul>

          <h2 className="title">
            The Club&apos;s Committee election at annual AGM as follows:{" "}
          </h2>
          <h3 className="title">Nominations: </h3>
          <ul>
            <li>
              With the notice of AGM - club members will be invited to submit
              nominations to the secretary via email (
              <a href="mailto:secretary@somersetstrikers.co.za">
                secretary@somersetstrikers.co.za
              </a>
              )
            </li>
            <li>Nominations are open to fully paid up club members only.</li>
            <li>Such club members can self nominate.</li>
            <li>Nominations must be seconded by another club member.</li>
            <li>
              The secretary will publish nominations as they are received on the
              club Whatsapp broadcast group.
            </li>
            <li>
              The closing date for receipt of nominations will be approx{" "}
              <strong>10 days</strong> before the AGM and the secretary will
              publish the final list of nominations at that time
            </li>
          </ul>

          <h3 className="title">Voting: </h3>
          <ul>
            <li>
              Voting for Nominations will begin <strong>1 week</strong> before
              the AGM, when the final list has been published by the Secretary
              and the voting mechanisms are completed.
            </li>
            <li>
              Voting can be done, in person, at the AGM OR via a provided
              digital form for those who cannot attend.
            </li>
            <li>
              Digital voting will close at <strong>3pm on the day</strong> of
              the AGM.
            </li>
            <li>
              Each seat on the Committee will be declared vacant on the evening
              of the AGM
            </li>
            <li>
              Each member will have 1 vote, i.e. one child with fully paid
              membership = 1 vote.
            </li>
            <li>Only fully paid up members are eligible to vote.</li>
            <li>
              With the provision of digital voting - there is no need for proxy
              voting.
            </li>
            <li>Members attending the AGM can vote there.</li>
            <li>Final vote tally will be done on the night of the AGM.</li>
            <li>New Committee will be announced at the AGM.</li>
            <li>
              The Committee members shall have one (1) vote each, except in the
              case of the Chairperson, who shall have a casting vote as well as
              a deliberate vote, when the voting is equal.
            </li>
          </ul>

          <h2 className="title">Quorum for AGM</h2>
          <p>
            A quorum for the Annual General Meeting shall be a minimum of 33% of
            fully paid up members eligible to vote. A quorum can be achieved
            either in person and/or via online means.
          </p>
        </section>
      </div>
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
