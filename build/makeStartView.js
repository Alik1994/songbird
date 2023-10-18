let curLvl = 0;
function makeStartView(level) {
    //1. Подсветка текущего активного уровня
    let lvlList = document.querySelectorAll(".rounds-list__item");
    let activeLvl = document.querySelector(".rounds-list__item_active");
    if (activeLvl === null) {
        lvlList[level].classList.add("rounds-list__item_active");
    }
    else {
        activeLvl.classList.remove("rounds-list__item_active");
        lvlList[level].classList.add("rounds-list__item_active");
    }
    //2. Задать изображение, название и голос загаданной птицы
    //3. Скрыть изображение загаданной птицы
    let curBirdImg = document.getElementById("imgUknown");
    let curBirdName = document.getElementById("nameUnknown");
    if (curBirdImg.classList.contains("img-unknown")) {
        curBirdImg.style.backgroundImage =
            "url('../../../src/img/unknownBird.jpg')";
    }
    if (curBirdName.classList.contains("name-unknown")) {
        curBirdName.textContent = "******";
    }
}
export { curLvl, makeStartView };
