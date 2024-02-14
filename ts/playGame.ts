import { curBirdPlayer, variantsList, nextBtn } from "./index.js";
import { secretPlayerElements } from "./makeStartView.js";
import { playerHandler } from "./playerHandler.js";
import { dragAndDrop } from "./playerStages.js";
import { variantsHandler } from "./variantsHandler.js";
import { nextHandler } from "./nextHandler.js";

function playGame(): void {
  //1. Отменяем действия браузера по умолчанию
  document.onmousedown = function () {
    return false;
  };

  //2. Обработчик событий на плеер для загаданной птицы
  curBirdPlayer.addEventListener("click", (event) => playerHandler(event));

  //3. Обработчик событий на индикатор пройденного времени на плеере
  secretPlayerElements.timebarIndicator.onmousedown = function (event) {
    dragAndDrop(event, secretPlayerElements);
  };
  secretPlayerElements.timebarIndicator.ondragstart = function () {
    return false;
  };

  //Для сенсорных экранов
  secretPlayerElements.timebarIndicator.ontouchstart = function (event) {
    dragAndDrop(event, secretPlayerElements);
  };

  //4. Обработчик событий на поле, с вариантами ответа
  variantsList.addEventListener("click", (event) => variantsHandler(event));

  //5. Обработчик событий на кнопку переключения уровня
  nextBtn.addEventListener("click", nextHandler);
}

export { playGame };
