import { pasteFragment } from "./pasteFragment.js";
import { playerHandler } from "./playerHandler.js";
import { changeEndMarker } from "./changeEndMarker.js";
export let chosenPlayerElements;
function showBirdInfo(info) {
    //Очищаем содержимое и вставляем новое
    pasteFragment(info);
    const chosenImg = document.querySelector("#chosenImg");
    chosenImg.style.backgroundImage = `url(${info.image})`;
    //Создаем новый набор элементов
    const chosenMarker = document.querySelector(".chosen__start");
    const chosenTimeProgress = document.querySelector(".chosen__timebar-bar");
    const timebarChosenWidth = chosenTimeProgress.offsetWidth;
    const chosenTimebar = document.querySelector(".chosen__timebar");
    const chosenTimebarIndicator = document.querySelector(".chosen__timebar-circle");
    const chosenBirdSong = document.getElementById("choosenSong");
    const chosenEndMarker = document.querySelector(".chosen__end");
    let timeChosenMarker = 0;
    let chosenSongDuration = 0;
    chosenPlayerElements = {
        timeStartMarker: chosenMarker,
        timeProgress: chosenTimeProgress,
        timebarWidth: timebarChosenWidth,
        timebar: chosenTimebar,
        timebarIndicator: chosenTimebarIndicator,
        song: chosenBirdSong,
        songDuration: chosenSongDuration,
        timeMarker: timeChosenMarker,
    };
    //Меняем данные об общей длине звука
    chosenBirdSong.src = `${info.audio}`;
    chosenBirdSong.onloadedmetadata = function () {
        changeEndMarker(chosenBirdSong, chosenEndMarker);
        chosenPlayerElements.songDuration = Math.ceil(chosenBirdSong.duration);
    };
    //Вешаем обработчик события на плеер
    const chosenBirdPlayer = document.getElementById("chosenPlayer");
    chosenBirdPlayer.addEventListener("click", (event) => playerHandler(event));
}
export { showBirdInfo };
