import { birdsData } from "./birdsData.js";
import { changeEndMarker } from "./changeEndMarker.js";
import { makeRoundsList, roundsName } from "./makeRounds.js";
import { curLvl, makeStartView } from "./makeStartView.js";

//? - Какой тип данных?
export const activeLvl: Element | null = document.querySelector(
  ".rounds-list__item_active"
);

export const curBirdImg = document.getElementById("imgUnknown") as HTMLElement;
export const curBirdName = document.getElementById(
  "nameUnknown"
) as HTMLElement;
export const curBirdPlayer = document.getElementById(
  "playerUnknown"
) as HTMLElement;
export const curBirdSong = document.getElementById(
  "unknownSong"
) as HTMLAudioElement;
export const variantsList = document.querySelector(
  ".variants-list"
) as HTMLElement;
export const chosenBirdInfo = document.querySelector(
  ".game-field__chosen-bird-info"
) as HTMLElement;

function init(): void {
  makeRoundsList(roundsName);
  makeStartView(curLvl);
}

init();
