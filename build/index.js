import { makeRoundsList, roundsName } from "./makeRounds.js";
import { curLvl, makeStartView } from "./makeStartView.js";
//? - Какой тип данных?
export const activeLvl = document.querySelector(".rounds-list__item_active");
export const curBirdImg = document.getElementById("imgUknown");
export const curBirdName = document.getElementById("nameUnknown");
export const curBirdSong = document.getElementById("unknownSong");
export const variantsList = document.querySelector(".variants-list");
function init() {
    makeRoundsList(roundsName);
    makeStartView(curLvl);
}
init();
