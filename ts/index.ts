import { birdsData } from "./birdsData.js";
import { makeRoundsList, roundsName } from "./makeRounds.js";

function init(): void {
  makeRoundsList(roundsName);
}

init();
