import { makeStartView, bird } from "./makeStartView.js";
import {
  curBirdName,
  curBirdImg,
  scoreEl,
  winSong,
  wrongSong,
  nextBtn,
} from "./index.js";
import { curLvl } from "./nextHandler.js";

//Количество попыток
let numOfTries: number = 6;

//Количество баллов за ответ
let numOfPoints: number = 5;

//Общее количество баллов
export let score: number = 0;

//Индикатор выбранного ответа
let targetID: number;

//Индикатор неправильного ответа
let wrongID: number = -1;

function variantsHandler(event: any): void {
  let target = event.target.closest(".variants-list__variant");

  //Проверка на победу. Если кнопка перехода на следующий уровень активна - победа
  let isWin: boolean = nextBtn.classList.contains("next-active");

  if (target) {
    //Определяем ID нажатого варианта
    targetID = Number(target.dataset.id);

    //1. Проверка на правильность ответа
    //Если ПРАВИЛЬНО
    if (bird.id === targetID) {
      //Возввращаем начальное значение ID  неправильного ответа
      wrongID = -1;

      //Проигрываем победную музыку
      winSong.play();

      //Открываем изображение и название птицы
      curBirdImg.style.backgroundImage = `url(${bird.image})`;
      curBirdName.textContent = `${bird.name}`;

      //Прибавляем баллы к общему количеству
      //Если это разминка, то баллы не увеличиваются
      if (curLvl === 0) {
        scoreEl.textContent = `0`;
      } else if (!isWin) {
        score += numOfPoints;
        scoreEl.textContent = `${score}`;
      }

      //Восстанавливаем количество попыток и максимальное количество баллов
      numOfPoints = 5;
      numOfTries = 6;

      //Окрашиваем маркер выбранного варианта в зеленый
      target.firstElementChild.classList.remove("inactive");
      target.firstElementChild.classList.add("correct");

      //Делаем кнопку перехода на другой уровень активной
      nextBtn.classList.remove("next-inactive");
      nextBtn.classList.add("next-active");
    } else if (!isWin && targetID !== wrongID) {
      //Проигрываем музыку ошибки
      wrongSong.play();

      //Уменьшаем количество баллов и попыток
      numOfPoints--;
      numOfTries--;

      //Окрашиваем маркер выбранного варианта в зеленый
      target.firstElementChild.classList.remove("inactive");
      target.firstElementChild.classList.add("wrong");

      //Записываем новый ID неправильного ответа
      wrongID = targetID;
    }

    console.log(wrongID);
  }
}

export { variantsHandler };
