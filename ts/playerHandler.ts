import { playStage, pauseStage } from "./playerStages";
import { changePlay, changePause } from "./changePlayButton";
import { secretPlayerElements } from "./makeStartView";
import { chosenPlayerElements } from "./showBirdInfo";

export let playBtn: HTMLElement;

export let timerSecretId: number;
export let timerChosenId: number;

function playerHandler(event: any): void {
  let targetSecret = event.target.closest(".secret");
  let targetChosen = event.target.closest(".chosen");

  //1. Если нажали на кнопку проигрывания звука в шапке
  if (targetSecret) {
    if (targetSecret.classList.contains("play")) {
      playBtn = targetSecret;
      changePlay(targetSecret);
      timerSecretId = playStage(secretPlayerElements, targetSecret);
    } else {
      changePause(targetSecret);
      pauseStage(secretPlayerElements.song, timerSecretId);
    }
  }

  //2. Если нажали на кнопку воспроизведения в блоке информации
  if (targetChosen) {
    if (targetChosen.classList.contains("play")) {
      playBtn = targetChosen;
      changePlay(targetChosen);
      timerChosenId = playStage(chosenPlayerElements, targetChosen);
    } else {
      changePause(targetChosen);
      pauseStage(chosenPlayerElements.song, timerChosenId);
    }
  }
}

export { playerHandler };
