import { songDuration } from "./changeEndMarker.js";
const timeStartMarker = document.querySelector(".player__time-start");
const timeProgress = document.querySelector(".player__timebar-bar");
const timebarIndicator = document.querySelector(".player__timebar-circle");
let timeMarker = 0;
let timebarWidth = timeProgress.offsetWidth;
let timerId;
function playStage(song, timemarker) {
  //Запускаем звуки птицы
  song.play();
  timerId = setInterval(function () {
    if (timeMarker >= songDuration) {
      //1. Остановка таймера
      clearInterval(timerId);
    } else {
      //1. Меняем значения счетчика прошедшего времени
      timeMarker++;
      //2. Меняем значение в
      //3. Меняем заливку тайм-бара
      timeProgress.style.backgroundImage = `linear-gradient(to right,#00bc8c 0%, #008966 ${
        (timeMarker / songDuration) * 100
      }%, #999 ${(timeMarker / songDuration) * 100}%, #999 100%`;
      //4. Меняем положение ползунка
      if ((timeMarker * timebarWidth) / songDuration >= timebarWidth) {
        timebarIndicator.style.right = "0px";
      } else {
        timebarIndicator.style.left = `${
          (timeMarker * timebarWidth) / songDuration
        }px`;
      }
    }
  }, 1000);
}
function pauseStage(timemarker) {
  clearInterval(timerId);
  console.log("timeMarker", timeMarker);
}
export { timeMarker, playStage, pauseStage };
