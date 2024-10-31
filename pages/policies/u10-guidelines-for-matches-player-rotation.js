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
            <h1 className="title has-text-centered">
              U10 Guidelines for Matches and Player Rotation
            </h1>
            <p>
              The purpose of this document is to help guide Saturday match
              volunteers in their duties to best influence the game in a way
              that promotes fair play and healthy competition while giving
              opportunities to all U10 club members.
            </p>
            <p>
              <strong>
                However within these guidelines please note that our children
                are still just young kids. Let’s not make winning at this point
                the be-all and end-all of our kids cricketing experience.
              </strong>{" "}
              Most children that participate in our club love to play cricket,
              let’s help them along the way to enjoy it, whether through winning
              or losing. Ultimately the primary objective is for them to learn
              to play the sport better, learn to be part of a team and learn
              about life through the ups and downs of sport.
            </p>
            <p>
              While winning/competing can be enjoyable{" "}
              <strong>
                the rotation of batters and bowlers remains at the core of how
                we play matches at U10 level.
              </strong>{" "}
              We would therefore like to put these basic parameters in place to
              take some of the guesswork out of the hands of the manager, which
              makes it much easier to apply.
            </p>
            <h2 className="title">Batting</h2>
            <ul>
              <li>
                According to the number of overs played, batters are retired at
                X number of balls according to the number of wickets that falls{" "}
                <strong>(excluding wides and no balls)</strong>.
              </li>
              <li>
                If it is clear that the number of balls decided on will not give
                everyone a fair chance in the case where no wickets fall, bring
                the number of balls can be adjusted down to accommodate the tail
                end.
              </li>
              <li>
                In a case where is a collapse of the top order, batters can be
                given more balls to steady the ship, this is to the manager&apos;s
                discretion - provided there will be enough balls for batters #10
                and #11 to face.
              </li>
              <li>
                Scorers should make a note to the U10 manager if batters do not
                get a fair chance so we can move them up the order for the next
                game.
              </li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>As a guideline use number of balls:</th>
                </tr>
                <tr>
                  <th>Overs</th>
                  <th>Balls</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20 overs</td>
                  <td>13 balls</td>
                </tr>
                <tr>
                  <td>25 overs</td>
                  <td>16 balls</td>
                </tr>
              </tbody>
            </table>
            <h2 className="title">Bowling</h2>
            <ul>
              <li>The bowling list is the reverse of the batting list.</li>
              <li>
                The manager can skip a player who really struggled the first
                time, but this should be an exception.
              </li>
              <li>
                The last 5 overs in a 25 over game can be awarded to best
                bowlers on the day.
              </li>
            </ul>
            <p className="has-text-weight-bold">
              Please also take the time to read our{" "}
              <Link href="/policies/selection">Selection Policy</Link> which
              expands on this further and which also details &quot;minimum level of
              ability&quot;.
            </p>
          </section>
          <section className="section content">
            <h1 className="title has-text-centered">
              U10 Check sheet for Volunteers
            </h1>
            <h2 className="title">Manager</h2>
            <h3 className="title">Before the match</h3>
            <ul>
              <li>Set out the wickets and boundaries (if necessary).</li>
              <li>
                Meet and greet the Strikers and opposition coaches and umpires.
              </li>
              <li>
                Gather the team, check everybody is present, welcome them and
                introduce the captain for the day.
              </li>
              <li>
                Do a quick warm up and throw a ball around in a circle if there
                is time. The parent organising kids around the field can also do
                this.
              </li>
              <li>Toss 10-15 minutes before start.</li>
              <li>
                Match ball - Given to the captain if their side bowls first
                (otherwise keep it for them.) Remember to gather the ball after
                the innings for safe keeping as it can be awarded to the player
                of the match.
              </li>
            </ul>

            <h3 className="title">During the match</h3>
            <ul>
              <li>
                Help with field setting. Players tend to drift at this age and
                might need guidance throughout. (
                <a
                  href="https://cricketershub.com/cricket-fielding-positions-explanations/"
                  target="noopener"
                >
                  Field settings
                </a>{" "}
                documents can be referred to.)
              </li>
              <li>
                Help retire batters at the right time. Scorers can be asked to
                help. It is U10 policy that we play rotational cricket.
              </li>
              <li>
                Help batters understand the match situation, score and task at
                hand (where necessary).
              </li>
            </ul>
            <p>
              Finally, encourage the players to shake hands after the match.
            </p>
            <p>
              Player of the match is announced and the match ball is awarded as
              prize. Ask the team (scorers and umpires) to help as it can be a
              daunting task.
            </p>
            <p>Gather Strikers equipment.</p>
            <h3 className="title">Off Field Organiser</h3>
            <p>
              The idea of this role is just to support the match-day manager in
              their duties, get the batters padded and do some fielding before
              the game.
            </p>

            <h3 className="title">Scorers</h3>
            <ul>
              <li>
                We would like scorers to make use of the{" "}
                <a href="https://stumpsapp.com/" target="noopener">
                  Stumps app
                </a>{" "}
                as far as possible as it keeps track of player stats. It is also
                a great way for parents to keep track of the games and it has
                very handy summaries to publish after the game. I think it is
                way easier to score as well.
              </li>
              <li>
                Player profiles have been created as name and surname followed
                by SS (Somerset Strikers) e.g. Paul Adams SS. The teams will be
                loaded and matches set up beforehand ensuring the right profiles
                are used.
              </li>
              <li>
                If scorers on the day are not comfortable using the app they are
                welcome to use the paper sheet method.
              </li>
            </ul>
            <p>
              Note: The app can consume a lot of battery power so charge your
              phone beforehand. You can pass on scoring duties to another phone
              by assigning the match to a new scorer. It is also handy to have a
              scorer or phone for each innings.
            </p>
            <p>
              For parents who are still a little unsure of the app. A great tip
              is to practice using the Stumps app the next time you watch a
              cricket game on TV, in a low-pressure environment. Please also
              shadow a scorer at the next game.
            </p>
            <p>
              While scoring is a fun and interesting part of the game playing
              the game is more important so never let scoring get in the way of
              playing.
            </p>
            <h3 className="title">Umpires</h3>
            <ul>
              <li>
                There are lots of{" "}
                <a
                  href="https://www.youtube.com/results?search_query=cricket+umpiring+signals"
                  target="noopener"
                >
                  YouTube videos
                </a>{" "}
                of basic umpiring signals if you are feeling a little rusty
                (basic signals below.)
              </li>
              <li>The most important thing is consistency.</li>
              <li>Decide/discuss your wide markers beforehand.</li>
              <li>
                Ball counting can get tricky with lots of wides, so make use of
                a clicker or stones.
              </li>
              <li>
                No LBW at U10 level. However, If a player is found deliberately
                covering their wickets they should be asked to move and should
                get warned if trapped LBW and dismissed at the next instance.
                This should also be communicated before the match.
              </li>
            </ul>
            <p>
              Please feel free to ask a more experienced coach to shadow them
              during a game. It is a great way to get a feel for it and overcome
              nerves.
            </p>
            <Image
              src="/images/umpire-signals.webp"
              alt="Signals by umpires"
              width="556"
              height="553"
            />
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
