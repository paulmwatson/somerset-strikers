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
          <section className="section" key={league.shortName}>
            <h2 className="title is-size-4">{league.name}</h2>
            <p className="content">{league.description}</p>
            <div className="tabs is-boxed">
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
                  className="table is-fullwidth is-striped"
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
                        key={`${league.shortName}${group.shortName}${fixture.date}${fixture.opposition}`}
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
                            <td>{fixture.venue}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4} align="center">
                        Bye (No Match) TBC (To Be Confirmed)
                      </td>
                    </tr>
                  </tfoot>
                </table>
              ))}
          </section>
        ))}
    </>
  );
}
