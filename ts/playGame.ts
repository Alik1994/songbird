import { curBirdPlayer } from "./index.js";
import { IData } from "./birdsData.js";
import { playerHandler } from "./playerHandler.js";

export const scoreEl = document.querySelector(".score__value") as HTMLElement;
export let score: number = 0;

function playGame(bird: IData): void {
  //1. Меняем значение score
  scoreEl.textContent = `${score}`;

  //2. Обработчик событий на плеер для загаданной птицы
  curBirdPlayer.addEventListener("click", (event) => playerHandler(event));
}

export { playGame };
