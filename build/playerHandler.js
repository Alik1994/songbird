import { timeMarker, playStage, pauseStage } from "./playerStages.js";
import { curBirdSong } from "./index.js";
import { changePlay, changePause } from "./changePlayButton.js";
function playerHandler(event) {
    let targetBtn = event.target.closest(".player__playback-button");
    //1. Если нажали на кнопку проигрывания звука
    if (targetBtn) {
        if (targetBtn.classList.contains("play")) {
            changePlay(targetBtn);
            playStage(curBirdSong, timeMarker, targetBtn);
        }
        else {
            changePause(targetBtn);
            pauseStage(curBirdSong);
        }
    }
}
export { playerHandler };
