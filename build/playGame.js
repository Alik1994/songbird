import { curBirdPlayer, curBirdSong } from "./index.js";
import { playerHandler } from "./playerHandler.js";
import { timebarIndicator, dragAndDrop } from "./playerStages.js";
export const scoreEl = document.querySelector(".score__value");
export let score = 0;
function playGame(bird) {
    //1. Меняем значение score
    scoreEl.textContent = `${score}`;
    //2. Отменяем действия браузера по умолчанию
    document.onmousedown = function () {
        return false;
    };
    //2. Обработчик событий на плеер для загаданной птицы
    curBirdPlayer.addEventListener("click", (event) => playerHandler(event));
    //3. Обработчик событий на интикатор пройденного времени на плеере
    timebarIndicator.onmousedown = function (event) {
        dragAndDrop(event, curBirdSong);
    };
    timebarIndicator.ondragstart = function () {
        return false;
    };
}
export { playGame };
