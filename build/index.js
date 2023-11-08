import { makeRoundsList, roundsName } from "./makeRounds.js";
import { curLvl, makeStartView } from "./makeStartView.js";
//? - Какой тип данных?
export const activeLvl = document.querySelector(".rounds-list__item_active");
export const curBirdImg = document.getElementById("imgUnknown");
export const curBirdName = document.getElementById("nameUnknown");
export const curBirdPlayer = document.getElementById("playerUnknown");
export const curBirdSong = document.getElementById("unknownSong");
export const variantsList = document.querySelector(".variants-list");
export const chosenBirdInfo = document.querySelector(".game-field__chosen-bird-info");
function init() {
    makeRoundsList(roundsName);
    makeStartView(curLvl);
}
init();
