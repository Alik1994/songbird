import { bird } from "./makeStartView";
import { IData, birdsData } from "./birdsData";
import {
  curBirdName,
  curBirdImg,
  scoreEl,
  winSong,
  wrongSong,
  nextBtn,
} from "./index";
import { showBirdInfo } from "./showBirdInfo";
import { curLvl } from "./nextHandler";
import { winnerStage } from "./winnerStage";

//Количество попыток
let numOfTries: number = 6;

//Количество баллов за ответ
export let numOfPoints: number = 5;

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
      //Возвращаем начальное значение ID  неправильного ответа
      wrongID = -1;

      //Проигрываем победную музыку
      winSong.play();

      //Открываем изображение и название птицы
      curBirdImg.style.backgroundImage = `url(${bird.image})`;
      curBirdName.textContent = `${bird.name}`;

      //Прибавляем баллы к общему количеству
      //Если это разминка, то баллы не увеличиваются
      if (!isWin) {
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

      //Запускаем проверку выигрыша
      if (winnerStage(curLvl, score)) {
        score = 0;
        return;
      }
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

    //Показываем информацию о выбранной птице
    const targetBird: IData = birdsData[curLvl][targetID - 1];
    showBirdInfo(targetBird);
  }
}

export { variantsHandler };
