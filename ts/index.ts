import { makeRoundsList, roundsName } from "./makeRounds.js";
import { makeStartView } from "./makeStartView.js";

//? - Какой тип данных?

export const scoreEl = document.querySelector(".score__value") as HTMLElement;
export const curBirdImg = document.getElementById("imgUnknown") as HTMLElement;
export const curBirdName = document.getElementById(
  "nameUnknown"
) as HTMLElement;
export const curBirdPlayer = document.getElementById(
  "playerUnknown"
) as HTMLElement;
export const variantsList = document.querySelector(
  ".variants-list"
) as HTMLElement;
export const chosenBirdInfo = document.querySelector(
  ".game-field__chosen-bird-info"
) as HTMLElement;
export const nextBtn = document.querySelector(
  ".game-field__next-btn"
) as HTMLElement;
export const winSong = document.getElementById("winSound") as HTMLAudioElement;
export const wrongSong = document.getElementById(
  "wrongSound"
) as HTMLAudioElement;
export const winnerSound = document.getElementById(
  "winnerSound"
) as HTMLAudioElement;

export interface IPlayerElements {
  timeStartMarker: HTMLElement;
  timeProgress: HTMLElement;
  timebarWidth: number;
  timebar: HTMLElement;
  timebarIndicator: HTMLElement;
  song: HTMLAudioElement;
  songDuration: number;
  timeMarker: number;
}

function init(): void {
  makeRoundsList(roundsName);
  makeStartView(0);
}

init();
