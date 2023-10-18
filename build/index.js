import { makeRoundsList, roundsName } from "./makeRounds.js";
import { curLvl, makeStartView } from "./makeStartView.js";
function init() {
    makeRoundsList(roundsName);
    makeStartView(curLvl);
}
init();
