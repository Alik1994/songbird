import { nextBtn } from "./index.js";
import { makeStartView } from "./makeStartView.js";
let curLvl = 0;
function nextHandler() {
    if (!nextBtn.classList.contains("next-inactive")) {
        //Увеличиваем текущий уровень
        curLvl++;
        makeStartView(curLvl);
    }
}
export { nextHandler, curLvl };
