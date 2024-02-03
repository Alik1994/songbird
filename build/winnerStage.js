import { chosenBirdInfo, winnerSound, nextBtn, variantsList } from "./index.js";
import { roundsName } from "./makeRounds.js";
import { variantsHandler } from "./variantsHandler.js";
//Количество уровней
export let numOfLevels = roundsName.length;
//Максимальное число баллов за ответ
let maxRoundPoints = 5;
//Максимальное количество баллов за игру
let maxGamePoints = (numOfLevels - 1) * maxRoundPoints;
function winnerStage(curLvl, score) {
    if (curLvl === numOfLevels - 1) {
        chosenBirdInfo.innerHTML = "";
        chosenBirdInfo.classList.add("game-field__chosen-bird-info_win-stage");
        if (score === maxGamePoints) {
            //Прогрывем фанфары
            winnerSound.play();
            chosenBirdInfo.insertAdjacentHTML("afterbegin", `<div class="random-bird">
        <p>Поздравляем! Вы набрали максимальное количество баллов!</p>
        </div>`);
        }
        else {
            chosenBirdInfo.insertAdjacentHTML("afterbegin", `<div class="random-bird">
        <p>Поздравляем! Желаете сыграть еще раз?</p>
        </div>`);
        }
        nextBtn.innerHTML = "";
        nextBtn.textContent = "Попробовать еще";
        //Удаляем обработчик событий с поля с вариантами ответа
        variantsList.removeEventListener("click", (event) => variantsHandler(event));
        return true;
    }
    return false;
}
export { winnerStage };
