const timeStartMarker = document.querySelector(".player__time-start");
const timebar = document.querySelector(".player__timebar-bar");
const timebarIndicator = document.querySelector(".player__timebar-circle");
let timeMarker = 0;
let timerId;
function playStage(song, timemarker) {
    timerId = setInterval(function () {
        if (timeMarker >= 5) {
            clearInterval(timerId);
        }
        else {
            timeMarker++;
        }
    }, 1000);
    setTimeout(() => clearInterval(timerId), 5000);
}
function pauseStage(timemarker) {
    clearInterval(timerId);
    console.log("timeMarker", timeMarker);
}
export { timeMarker, playStage, pauseStage };
