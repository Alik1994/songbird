import { nextBtn, variantsList } from "./index.js";
import { makeStartView } from "./makeStartView.js";
import { variantsHandler } from "./variantsHandler.js";

let curLvl: number = 0;

function nextHandler() {
  if (!nextBtn.classList.contains("next-inactive")) {
    //Увеличиваем текущий уровень
    curLvl++;
    makeStartView(curLvl);
  }
}

export { nextHandler, curLvl };
