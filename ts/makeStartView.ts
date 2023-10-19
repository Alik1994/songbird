import { birdsData } from "./birdsData.js";
import { chooseRandomBird } from "./chooseRandomBird.js";

let curLvl: number = 0;

function makeStartView(level: number): void {
  //TODO: Решить вопрос с доступом к элементам
  //? - Какой тип данных?
  const lvlList = document.querySelectorAll(".rounds-list__item");
  const activeLvl: Element | null = document.querySelector(
    ".rounds-list__item_active"
  );

  const bird = chooseRandomBird(level);
  const curBirdImg = document.getElementById("imgUknown") as HTMLElement;
  const curBirdName = document.getElementById("nameUnknown") as HTMLElement;
  const curBirdSong = document.getElementById(
    "unknownSong"
  ) as HTMLAudioElement;
  const variantsList = document.querySelector(".variants-list") as HTMLElement;

  //1. Подсветка текущего активного уровня
  if (activeLvl === null) {
    lvlList[level].classList.add("rounds-list__item_active");
  } else {
    activeLvl.classList.remove("rounds-list__item_active");
    lvlList[level].classList.add("rounds-list__item_active");
  }

  //2. Задать изображение, название и голос загаданной птицыs
  //? - Исправить ошибку (как?)
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
  //? - Исправить ошибку (как?)
  curBirdSong.src = `${bird.audio}`;

  //5. Отображение вариантов ответа
  let birdVariants: string[] = birdsData[level].map((item) => item.name);
  variantsList.innerHTML = "";

  for (let i = 0; i < birdVariants.length; i++) {
    variantsList.insertAdjacentHTML(
      "beforeend",
      `<li class="variants-list__variant">
      <div class="variants-list__circle inactive"></div>${birdVariants[i]}
      </li>`
    );
  }
}

export { curLvl, makeStartView };
