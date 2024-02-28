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
          <section className="section content">
            <h1 className="title has-text-centered">Ethos</h1>
            <p>The way the teams are currently set up are as follows:</p>
            <h2 className="title">U10</h2>
            <p>
              Strict rotation policy with batters facing a certain number of
              balls and rotating the batters throughout the game so each player
              gets a similar amount of time to bat provided he/she does not go
              out. (Assuming that the team has the full amount of overs to bat.)
            </p>
            <h2 className="title">U11</h2>
            <p>
              We move to role-based cricket where batters are no longer retired.
              The U11 club games tend to offer more overs than U10 and we expect
              that the majority of batters do bat on any given day. If someone
              does not get to bat they should be pushed up the order in the next
              match into a position where it should be reasonable to expect that
              they will get a chance to bat. It does not necessarily mean that
              if a player batted number 11 one week that they will automatically
              bat number 1 the next week. Over the course of the season each
              player should feel that they have been given adequate chance to
              bat and bowl.
            </p>
            <h2 className="title">U12</h2>
            <p>
              We previously had a strict rotational team as per we do in U10.
              This was specifically on request but as many clubs don’t play U12,
              and more importantly, that we did not get regular support for this
              team we decided to not enter an U12 team in the league this year.
              On occasion we may enter U12 tournaments, or arrange ad-hoc U12
              matches. For this year we have combined the U12 & U13 players as
              they do at school level.
            </p>
            <h2 className="title">U13</h2>
            <p>
              We attempt to get closer to playing proper cricket however there
              is still an emphasis on creating opportunities for players to bat
              (and bowl) during the season. It is important to note that in high
              school these same players are expected to play 50 over cricket and
              as a club we feel an objective is to prepare them for this as best
              we can, while not playing a win-at-all costs type of cricket.
              (Which players will more likely encounter at school level.)
              Managers do take note of players that do not get to bat at matches
              and will do their best to push them up the order in the following
              weeks game.
            </p>
            <p>
              With particular reference to this age group: we also attempt to
              match up skill level with opposition. While not fool-proof we
              sometimes get asked to play a majority U12 player match, or get a
              request not to play with our top U13 players. On the other hand we
              have also requested older opposition (U14A) or longer format games
              to try test some of our better/older players.{" "}
              <em>
                It is important to understand then that some matches we post are
                not for players of any skill or age level. It’s not about
                favouring one group of players but attempting to match up
                similar skill levels with the opposition.
              </em>{" "}
              At the end of the day the objective is to get the kids to play a
              competitive game of cricket which is then a win for everyone on
              the day. We believe it’s the way cricket is meant to be played,
              and where the players will develop the most – and also enjoy the
              game the most!
            </p>
            <h2 className="title">Tournaments</h2>
            <p>
              We aim to put competitive sides forwards for those players looking
              to compete on a more serious level. Even at this level we do offer
              players opportunity in different roles in the team. We may also
              specify that certain teams have more of an emphasis on rotation –
              but it should be expected that we aim to play more competitive
              cricket at tournaments.
            </p>
            <p>
              We are a club that attempts to cater for all skill levels however
              it is very difficult to get this right all the time. We are a club
              run by volunteers and feel that we are currently catering for the
              needs of the majority of the members. However, we support any
              parent or group of players that wish to play a different style of
              cricket e.g. playing rotation cricket in U13 - However we need the
              members themselves to drive this process, to get support for that
              format and then importantly regularly manage the team. As a club
              we will gladly assist in arranging fields and opposition to the
              best of our ability.
            </p>
            <p>
              It is important to note that we allow manager discretion on the
              day to manage matches. This is not to say that they can do
              anything they want, but it’s more to assess the game, the players
              and make a call on what is most appropriate on for that match. For
              instance we have retired some batters in U13 in certain games
              where we felt it was more fair for the rest of the team. (Either
              very weak opposition or playing last game of the season for
              instance.)
            </p>
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
