const timeStartMarker = document.querySelector(
  ".player__time-start"
) as HTMLElement;
const timebar = document.querySelector(".player__timebar-bar") as HTMLElement;
const timebarIndicator = document.querySelector(
  ".player__timebar-circle"
) as HTMLElement;

let timeMarker: number = 0;
let timerId: number;

function playStage(song: HTMLAudioElement, timemarker: number): void {
  timerId = setInterval(function () {
    if (timeMarker >= 5) {
      clearInterval(timerId);
    } else {
      timeMarker++;
    }
  }, 1000);

  setTimeout(() => clearInterval(timerId), 5000);
}

function pauseStage(timemarker: number) {
  clearInterval(timerId);
  console.log("timeMarker", timeMarker);
}

export { timeMarker, playStage, pauseStage };
