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
            Selection Policy and Ethos
          </h1>
          <p className="content">
            The Selection Policy as described below is considered to be
            appropriate in any given year - the details of which can be reviewed
            on an annual basis by the standing committee. The Selection Policy
            must be in line with the club objectives of catering for the needs
            and expectations of the majority of the club’s members in any given
            age group. We believe it is not appropriate for an U13 team to be
            managed in the same way as an U10 team and therefore the Selection
            Policy should differ in various age groups as children mature in
            both age and ability. Selection Policy can also differ between
            league, tournament, and ad-hoc (friendly) games.
          </p>
          <h2 className="title">League Matches</h2>
          <p className="content">
            <strong>General selection policy:</strong> All paid up players will
            be selected first, secondly by players who have attended the
            greatest number of practices, and thirdly players who regularly make
            themselves available for matches. Regular commitment makes planning
            & scheduling easier. Players willing to play a match who are not
            selected should typically be selected ahead of other players in the
            next match while considering the aforementioned policy.
          </p>
          <h3 className="title">U10</h3>
          <p className="content">
            All U10 teams will have a strict rotation policy. Assuming a minimum
            20 over innings: Batters to face up to a set number of balls e.g.
            20. Bowlers to be given a minimum of 2 overs. Additional overs can
            be given to the best performing bowlers on the day. Retired batters
            will return to batting in the order they went into bat.
          </p>
          <h3 className="title">U11</h3>
          <p className="content">
            If two or more U11 teams are playing matches then at least one team
            should be a strict rotation policy. The other team will be role
            based.
          </p>
          <p className="content">
            Where there is only one U11 team playing matches then the team
            structure should alternate between “rotation” and “role based” from
            week to week.
          </p>
          <h3 className="title">U12</h3>
          <p className="content">
            The first U12 team is expected to be role based. Additional U12
            teams are expected to be rotation based as required.
          </p>
          <h3 className="title">U13</h3>
          <p className="content">
            Normal cricket rules would apply and roles in the team would be
            selected by ability. If more than one team plays matches
            consideration would be given for an additional role-based,
            rotation-based, or “B” team: as deemed appropriate by the committee
            and ultimately the demand from the players.
          </p>
          <h2 className="title">Role-Based Explanation</h2>
          <p className="content">
            Players are given individual roles for each match: Batting, Bowling
            and All Rounders. It should be expected that batters are not
            retired, however some discretion is given to managers in this
            regard, considering the (expected) length of the match and the
            ability of the opponents.
          </p>
          <p className="content">
            <strong>Bowlers:</strong> There are four nominated bowlers. Two
            opening bowlers are allowed more overs but never more than 4 each in
            a 20 over match. Bowlers 3 & 4 must be given at least 2 overs each
            (max 3) before any dedicated batters are allowed to bowl (in a 20
            over match.)
          </p>
          <p className="content">
            <strong>All Rounders:</strong> There are two nominated all-rounders.
            One is allowed to bowl in position 1-5. The other is allowed to bat
            in position 1-6. Neither all-rounders are to bat in positions 8-11.
          </p>
          <p className="content">
            <strong>Batters:</strong> There are five nominated batters and must
            all bat within the top 7.
          </p>
          <p className="content">
            <strong>Leaders:</strong> There will be a nominated batting,
            bowling, and fielding leader (one each.) Batting and bowling leaders
            will choose their own line up within the parameters set by the
            manager as per above. Managers should assist leaders with selection
            where required.
          </p>
          <p className="content">
            All designated bowlers should get a chance to bowl. It may be that
            some designated batters may not bat or bowl in any given match.
            Managers are to take note of these instances and ensure that the
            same player “left out” be pushed into a position the following week
            that should encourage participation in either batting or bowling –
            of which the player request should be taken into account.
          </p>
          <p className="content">
            The role-based approach may seem complex – but in practice works
            well. The idea behind this approach is to get players ready for high
            school cricket while still having a degree of rotation, with the
            goal of learning the different roles in the team.
          </p>
          <h2 className="title">Minimum Level of Ability and/or Experience</h2>
          <p className="content">
            Regardless of the age group, there is an expectation that children
            playing matches have some minimum level of ability/experience. This
            means, particularly when referring to bowling, that we believe it
            reasonable to expect that players selected to bowl on any given day
            would ordinarily be able to bowl a majority of legal balls. While we
            understand players may have good or bad days the managers retain the
            right not to bowl a player where the manager feels the player has
            not yet learned to bowl – or there is a high percentage chance that
            5 of the 6 balls in an over will be wides or no-balls. In this case
            we encourage players to work with our coaches on a Friday to assist
            them with correct technique. This policy is not in place for the
            sake of winning but out of respect to all players on the field
            including the bowler themselves.
          </p>
          <h2 className="title">Tournament Selection Policy</h2>
          <p className="content">
            Players will be selected on ability. Managers will have discretion
            over how best to manage the selected team, however no player should
            come away from the tournament with the feeling of being a “fielder
            only.” As a guideline from U10-U12: a rotation policy, for instance,
            within a batting line up should allow for the top 5 positions to be
            rotated in those specific positions, while the bottom 6 also be
            rotated. (e.g. number 11 batters move to number 6 in the next match
            and vice versa.) Batters in position 6-11 should be given adequate
            opportunity to bowl throughout the tournament.
          </p>
          <h2 className="title">Additional Information</h2>
          <p className="content">
            Players are allowed to “play up” age groups if the player has stand
            out ability. Our independent coaches are to put forward the names of
            these players to the committee for review and acceptance of such
            players.
          </p>
          <p className="content">
            The success of the management of each team is dependent on our
            volunteer team managers. The more managers (as well as players) we
            have, the more the club can cater for additional teams – and in the
            style/approach most suited for those teams. We encourage parents to
            please assist in this regard to make our (and your!) club a success.
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
