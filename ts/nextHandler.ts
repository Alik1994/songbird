import { nextBtn, scoreEl } from "./index";
import { makeStartView, secretPlayerElements } from "./makeStartView";
import { timerSecretId } from "./playerHandler";
import { reset } from "./playerStages";
import { numOfLevels } from "./winnerStage";

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
