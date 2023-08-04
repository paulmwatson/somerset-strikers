/**
 * This is a Checkly CLI BrowserCheck construct. To learn more, visit:
 * - https://www.checklyhq.com/docs/cli/
 * - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
 */

import { BrowserCheck, Frequency } from "checkly/constructs";

new BrowserCheck("somerset-strikers", {
  name: "somerset-strikers",
  activated: true,
  muted: false,
  doubleCheck: true,
  shouldFail: false,
  locations: ["af-south-1", "eu-west-1"],
  tags: [],
  frequency: Frequency.EVERY_24H,
  environmentVariables: [],
  code: {
    entrypoint: "./somerset-strikers.spec.ts",
  },
});
