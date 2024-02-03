import { IData } from "./birdsData";
import { IPlayerElements } from "./index.js";
import { pasteFragment } from "./pasteFragment.js";
import { playerHandler } from "./playerHandler.js";
import { changeEndMarker } from "./changeEndMarker.js";
export let chosenPlayerElements: IPlayerElements;

function showBirdInfo(info: IData): void {
  //Очищаем содержимое и вставляем новое
  pasteFragment(info);
  const chosenImg = document.querySelector("#chosenImg") as HTMLElement;
  chosenImg.style.backgroundImage = `url(${info.image})`;

  //Создаем новый набор элементов
  const chosenMarker = document.querySelector(".chosen__start") as HTMLElement;
  const chosenTimeProgress = document.querySelector(
    ".chosen__timebar-bar"
  ) as HTMLElement;
  const timebarChosenWidth: number = chosenTimeProgress.offsetWidth;
  const chosenTimebar = document.querySelector(
    ".chosen__timebar"
  ) as HTMLElement;
  const chosenTimebarIndicator = document.querySelector(
    ".chosen__timebar-circle"
  ) as HTMLElement;
  const chosenBirdSong = document.getElementById(
    "choosenSong"
  ) as HTMLAudioElement;
  const chosenEndMarker = document.querySelector(".chosen__end") as HTMLElement;
  let timeChosenMarker: number = 0;
  let chosenSongDuration: number = 0;

  chosenPlayerElements = {
    timeStartMarker: chosenMarker,
    timeProgress: chosenTimeProgress,
    timebarWidth: timebarChosenWidth,
    timebar: chosenTimebar,
    timebarIndicator: chosenTimebarIndicator,
    song: chosenBirdSong,
    songDuration: chosenSongDuration,
    timeMarker: timeChosenMarker,
  };

  //Меняем данные об общей длине звука
  chosenBirdSong.src = `${info.audio}`;
  chosenBirdSong.onloadedmetadata = function () {
    changeEndMarker(chosenBirdSong, chosenEndMarker);
    chosenPlayerElements.songDuration = Math.ceil(chosenBirdSong.duration);
  };

  //Вешаем обработчик события на плеер
  const chosenBirdPlayer = document.getElementById(
    "chosenPlayer"
  ) as HTMLElement;
  chosenBirdPlayer.addEventListener("click", (event) => playerHandler(event));
}

export { showBirdInfo };
