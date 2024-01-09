import { songDuration } from "./changeEndMarker.js";
import { changePause, changePlay } from "./changePlayButton.js";

const timeStartMarker = document.querySelector(
  ".player__time-start"
) as HTMLElement;
const timeProgress = document.querySelector(
  ".player__timebar-bar"
) as HTMLElement;
const timebar = document.querySelector(".player__timebar") as HTMLElement;
export const timebarIndicator = document.querySelector(
  ".player__timebar-circle"
) as HTMLElement;

let timeMarker: number = 0;
let timebarWidth: number = timeProgress.offsetWidth;
let timerId: number;

function playStage(
  song: HTMLAudioElement,
  timemarker: number,
  playBtn: HTMLElement
): void {
  //Запускаем звуки птицы
  song.play();

  timerId = setInterval(function () {
    //Если проиграл ВЕСЬ звук
    if (timeMarker >= songDuration) {
      //1. Остановка таймера
      clearInterval(timerId);
      //2. Обнуление счетчика учета времени
      timeMarker = 0;
      //3. Изменние цвета фона тайм-бара
      timeProgress.style.background = "#999";

      //4. Возврат индикатора текущего времени на тайм-баре в исходное положение
      timebarIndicator.style.left = "0px";

      //5. Обнуляем значение в индикаторе пройденного времени
      timeStartMarker.textContent = "00:00";

      //6. Заменяем кнопку pause на play
      changePause(playBtn);
    } else {
      //1. Меняем значения счетчика прошедшего времени
      timeMarker += 0.25;

      //2. Меняем значение в индикаторе пройденного времени
      let minutes: number = Math.floor(timeMarker / 60);
      let seconds: number = Math.floor(timeMarker - minutes * 60);

      timeStartMarker.textContent = `${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;

      //3. Меняем заливку тайм-бара
      timeProgress.style.backgroundImage = `linear-gradient(to right,#00bc8c 0%, #008966 ${
        (timeMarker / songDuration) * 100
      }%, #999 ${(timeMarker / songDuration) * 100}%, #999 100%`;

      //4. Меняем положение ползунка
      if (
        timeMarker * (timebarWidth / songDuration) >=
        timebarWidth - timebarIndicator.offsetWidth
      ) {
        timebarIndicator.style.left = `${
          timebarWidth - timebarIndicator.offsetWidth
        }px`;
      } else {
        timebarIndicator.style.left = `${
          timeMarker * (timebarWidth / songDuration)
        }px`;
      }
    }
  }, 250);
}

function pauseStage(song: HTMLAudioElement) {
  clearInterval(timerId);
  song.pause();
}

function dragAndDrop(event: any, song: HTMLAudioElement) {
  timebarIndicator.style.position = "absolute";
  timebarIndicator.style.zIndex = "1000";
  timeProgress.append(timebarIndicator);

  function moveAt(pageX: any) {
    //1. Меняем положение ползунка
    let newCoords: number =
      pageX -
      timeProgress.getBoundingClientRect().left -
      timebarIndicator.offsetWidth / 2;

    if (newCoords < 0) {
      timebarIndicator.style.left = 0 + "px";
    } else if (newCoords >= timebarWidth - timebarIndicator.offsetWidth) {
      timebarIndicator.style.left =
        timebarWidth - timebarIndicator.offsetWidth + "px";
    } else {
      timebarIndicator.style.left = newCoords + "px";
    }
    //2. Меняем заливку тайм-бара
    timeProgress.style.backgroundImage = `linear-gradient(to right,#00bc8c 0%, #008966 ${
      (newCoords / timebarWidth) * 100
    }%, #999 ${(newCoords / timebarWidth) * 100}%, #999 100%`;

    //3. Обновляем данные о прошедшем времени
    timeMarker =
      newCoords / (timebarWidth / songDuration) >= 0
        ? newCoords / (timebarWidth / songDuration)
        : 0;
  }

  function onMouseMove(event: any) {
    moveAt(event.pageX);
  }

  timebar.addEventListener("mousemove", onMouseMove);

  timebarIndicator.onmouseup = function () {
    song.currentTime = timeMarker;
    timebar.removeEventListener("mousemove", onMouseMove);
  };

  timebar.onmouseleave = function () {
    timebar.removeEventListener("mousemove", onMouseMove);
  };
}

export { timeMarker, playStage, pauseStage, dragAndDrop };
