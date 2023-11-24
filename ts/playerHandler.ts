import { timeMarker, playStage, pauseStage } from "./player.js";
import { curBirdSong } from "./index.js";

function playerHandler(event: any): void {
  let targetBtn = event.target.closest(".player__playback-button");

  if (targetBtn) {
    if (targetBtn.classList.contains("play")) {
      //1.Удаляем класс play и добавляем pause
      targetBtn.classList.remove("play");
      targetBtn.classList.add("pause");
      //2. Заменяем кнопку
      targetBtn.innerHTML = "";
      targetBtn.insertAdjacentHTML(
        "afterbegin",
        `<div class="pause-icon"></div>`
      );

      playStage(curBirdSong, timeMarker);
    } else {
      //1.Удаляем класс pause и добавляем play
      targetBtn.classList.remove("pause");
      targetBtn.classList.add("play");
      //2. Заменяем кнопку
      targetBtn.innerHTML = "";
      targetBtn.insertAdjacentHTML(
        "afterbegin",
        `<div class="play-icon"></div>`
      );
    }
  }
}

export { playerHandler };
