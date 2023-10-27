import { birdsData } from "./birdsData.js";
import { activeLvl, curBirdImg, curBirdName, curBirdSong, variantsList, } from "./index.js";
let curLvl = 0;
function makeStartView(level) {
    const bird = birdsData[level][`${Math.floor(Math.random() * birdsData[level].length)}`];
    //1. Подсветка текущего активного уровня
    const lvlList = document.querySelectorAll(".rounds-list__item");
    if (activeLvl === null) {
        lvlList[level].classList.add("rounds-list__item_active");
    }
    else {
        activeLvl.classList.remove("rounds-list__item_active");
        lvlList[level].classList.add("rounds-list__item_active");
    }
    //2. Задать изображение, название и голос загаданной птицыs
    curBirdImg.style.backgroundImage = `url(${bird.image})`;
    curBirdName.textContent = `${bird.name}`;
    //3. Скрыть изображение загаданной птицы
    if (curBirdImg.classList.contains("img-unknown")) {
        curBirdImg.style.backgroundImage =
            "url('../../../src/img/unknownBird.jpg')";
    }
    if (curBirdName.classList.contains("name-unknown")) {
        curBirdName.textContent = "******";
    }
    //4. Задать голос выбранной птицы в плеер
    curBirdSong.src = `${bird.audio}`;
    //5. Отображение вариантов ответа
    let birdVariants = birdsData[level].map((item) => item.name);
    variantsList.innerHTML = "";
    for (let i = 0; i < birdVariants.length; i++) {
        variantsList.insertAdjacentHTML("beforeend", `<li class="variants-list__variant">
      <div class="variants-list__circle inactive"></div>${birdVariants[i]}
      </li>`);
    }
    //6. Изменение надписи о выбранной птице
    const d = document.querySelector(".game-field__chosen-bird-info");
}
export { curLvl, makeStartView };
