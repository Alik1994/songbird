import { chosenBirdInfo, winnerSound, nextBtn, variantsList } from "./index";
import { roundsName } from "./makeRounds";
import { variantsHandler } from "./variantsHandler";

//Количество уровней
export let numOfLevels: number = roundsName.length;

//Максимальное число баллов за ответ
let maxRoundPoints: number = 5;

//Максимальное количество баллов за игру
let maxGamePoints: number = (numOfLevels - 1) * maxRoundPoints;

function winnerStage(curLvl: number, score: number): boolean {
  if (curLvl === numOfLevels - 1) {
    chosenBirdInfo.innerHTML = "";
    chosenBirdInfo.classList.add("game-field__chosen-bird-info_win-stage");

    if (score === maxGamePoints) {
      //Прогрывем фанфары
      winnerSound.play();

      chosenBirdInfo.insertAdjacentHTML(
        "afterbegin",
        `<div class="random-bird">
        <p>Поздравляем! Вы набрали максимальное количество баллов!</p>
        </div>`
      );
    } else {
      chosenBirdInfo.insertAdjacentHTML(
        "afterbegin",
        `<div class="random-bird">
        <p>Поздравляем! Желаете сыграть еще раз?</p>
        </div>`
      );
    }

    nextBtn.innerHTML = "";
    nextBtn.textContent = "Попробовать еще";

    //Удаляем обработчик событий с поля с вариантами ответа
    variantsList.removeEventListener("click", (event) =>
      variantsHandler(event)
    );

    return true;
  }

  return false;
}

export { winnerStage };
