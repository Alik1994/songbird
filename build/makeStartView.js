import { birdsData } from "./birdsData.js";
import { curBirdImg, curBirdName, variantsList, chosenBirdInfo, nextBtn, } from "./index.js";
import { changeEndMarker } from "./changeEndMarker.js";
import { playGame } from "./playGame.js";
const secretMarker = document.querySelector(".player__time-start");
const secretTimeProgress = document.querySelector(".player__timebar-bar");
const timebarSecretWidth = secretTimeProgress.offsetWidth;
const secretTimebar = document.querySelector(".player__timebar");
const secretTimebarIndicator = document.querySelector(".player__timebar-circle");
const secretEndMarker = document.querySelector(".player__time-end");
export const curBirdSong = document.getElementById("unknownSong");
let secretSongDuration = 0;
let timeSecretMarker = 0;
export const secretPlayerElements = {
    timeStartMarker: secretMarker,
    timeProgress: secretTimeProgress,
    timebarWidth: timebarSecretWidth,
    timebar: secretTimebar,
    timebarIndicator: secretTimebarIndicator,
    song: curBirdSong,
    songDuration: secretSongDuration,
    timeMarker: timeSecretMarker,
};
export let bird;
function makeStartView(level) {
    bird =
        birdsData[level][`${Math.floor(Math.random() * birdsData[level].length)}`];
    //Возвращаем все обратно
    chosenBirdInfo.classList.remove("game-field__chosen-bird-info_win-stage");
    nextBtn.textContent = "Next Level";
    //2. Подсветка текущего активного уровня
    const lvlList = document.querySelectorAll(".rounds-list__item");
    const activeLvl = document.querySelector(".rounds-list__item_active");
    //TODO - обнулить плеер после перехода на новый уровень
    if (activeLvl === null) {
        lvlList[level].classList.add("rounds-list__item_active");
    }
    else {
        activeLvl.classList.remove("rounds-list__item_active");
        lvlList[level].classList.add("rounds-list__item_active");
    }
    //2. Скрыть изображение и название загаданной птицы
    curBirdImg.style.backgroundImage = "url('src/img/unknownBird.jpg')";
    curBirdName.textContent = "******";
    //3. Задать голос загаданной птицы в плеер
    curBirdSong.src = `${bird.audio}`;
    //4. Меняем данные об общей длине звука
    curBirdSong.onloadedmetadata = function () {
        changeEndMarker(curBirdSong, secretEndMarker);
        secretPlayerElements.songDuration = Math.ceil(curBirdSong.duration);
    };
    //5. Отображение вариантов ответа
    let birdVariants = birdsData[level].map((item) => item.name);
    variantsList.innerHTML = "";
    for (let i = 1; i <= birdVariants.length; i++) {
        variantsList.insertAdjacentHTML("beforeend", `<li class="variants-list__variant" data-id = "${i}">
      <div class="variants-list__circle inactive"></div>${birdVariants[i - 1]}</li>`);
    }
    //6. Изменение надписи о выбранной птице
    chosenBirdInfo.innerHTML = "";
    chosenBirdInfo.insertAdjacentHTML("afterbegin", `<div class="random-bird">
    <p>Послушайте плеер.</p>
    <p>Выберите птицу из списка.</p>
    </div>`);
    //7. Делаем кнопку Next Level неактивной
    nextBtn.classList.remove("next-active");
    nextBtn.classList.add("next-inactive");
    //9. Запуск игры
    playGame();
}
export { makeStartView };
