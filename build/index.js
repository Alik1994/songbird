import { makeRoundsList, roundsName } from "./makeRounds.js";
import { makeStartView } from "./makeStartView.js";
//? - Какой тип данных?
export const scoreEl = document.querySelector(".score__value");
export const curBirdImg = document.getElementById("imgUnknown");
export const curBirdName = document.getElementById("nameUnknown");
export const curBirdPlayer = document.getElementById("playerUnknown");
export const curBirdSong = document.getElementById("unknownSong");
export const variantsList = document.querySelector(".variants-list");
export const chosenBirdInfo = document.querySelector(".game-field__chosen-bird-info");
export const nextBtn = document.querySelector(".game-field__next-btn");
export const winSong = document.getElementById("winSound");
export const wrongSong = document.getElementById("wrongSound");
function init() {
    makeRoundsList(roundsName);
    makeStartView(0);
}
init();
