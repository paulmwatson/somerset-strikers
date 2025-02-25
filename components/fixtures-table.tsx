import React from "react";
import Link from "next/link";

export default function FixturesTable({
  leagues,
  currentLeague,
  currentGroup,
}) {
  return (
    <>
      {leagues
        .filter((league) => league.shortName == currentLeague)
        .map((league) => (
          <React.Fragment key={league.shortName}>
            <section className="section pt-0 pb-0" key={league.shortName}>
              <h2 className="title is-size-4 is-size-5-mobile">{league.name}</h2>
              <p className="content is-size-6-mobile">{league.description}</p>
            </section>
            <section className="section px-0-mobile">
              <div className="tabs mb-0 pb-0">
                <ul>
                  {league.groups.map((group) => (
                    <li
                      key={`${league.shortName}${group.shortName}`}
                      className={
                        group.shortName == currentGroup ? "is-active" : ""
                      }
                    >
                      <Link
                        href={`/play/${league.shortName}/${group.shortName}/fixtures`}
                      >
                        {group.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {league.groups
                .filter((group) => group.shortName == currentGroup)
                .map((group) => (
                  <table
                    className="table is-fullwidth is-striped is-size-7-mobile"
                    key={`${league.shortName}${group.shortName}`}
                  >
                    <thead>
                      <tr className="is-selected">
                        <th>Date</th>
                        <th>Team</th>
                        <th className="has-width-99-percent">Opposition</th>
                        <th>Venue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.fixtures.map((fixture) => (
                        <tr
                          key={`${league.shortName}${group.shortName}${fixture.date}${fixture.team}${fixture.venue}${fixture.opposition}`}
                        >
                          <td className="has-no-wrap">
                            <strong>{fixture.date}</strong>
                          </td>
                          <td className="has-no-wrap">{fixture.team}</td>
                          {fixture.bye ? (
                            <td colSpan={2}>
                              <strong>Bye</strong>
                            </td>
                          ) : (
                            <>
                              <td>{fixture.opposition}</td>
                              <td align="center">{fixture.venue}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={4} align="center">
                          <p className="is-size-7">
                            Bye (No Match) TBC (To Be Confirmed)
                          </p>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                ))}
            </section>
          </React.Fragment>
        ))}
    </>
  );
}
