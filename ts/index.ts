import { birdsData } from "./birdsData.js";
import { makeRoundsList, roundsName } from "./makeRounds.js";
import { curLvl, makeStartView } from "./makeStartView.js";

function init(): void {
  makeRoundsList(roundsName);
  makeStartView(curLvl);
}

init();
