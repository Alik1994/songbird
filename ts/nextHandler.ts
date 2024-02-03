import { nextBtn, scoreEl } from "./index.js";
import { makeStartView, secretPlayerElements } from "./makeStartView.js";
import { timerSecretId } from "./playerHandler.js";
import { reset } from "./playerStages.js";
import { numOfLevels } from "./winnerStage.js";

let curLvl: number = 0;

function nextHandler(): void {
  if (!nextBtn.classList.contains("next-inactive")) {
    if (curLvl === numOfLevels - 1) {
      curLvl = 0;
      scoreEl.textContent = "0";
      makeStartView(curLvl);
      reset(secretPlayerElements, timerSecretId);
      return;
    }
    //Увеличиваем текущий уровень
    curLvl++;
    makeStartView(curLvl);
    reset(secretPlayerElements, timerSecretId);
  }
}

export { nextHandler, curLvl };
