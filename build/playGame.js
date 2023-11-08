import { curBirdPlayer } from "./index.js";
import { playerHandler } from "./playerHandler.js";
export const scoreEl = document.querySelector(".score__value");
export let score = 0;
function playGame(bird) {
    //1. Меняем значение score
    scoreEl.textContent = `${score}`;
    //2. Обработчик событий на плеер для загаданной птицы
    curBirdPlayer.addEventListener("click", (event) => playerHandler(event));
}
export { playGame };
