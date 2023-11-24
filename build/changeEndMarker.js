const timeEndMarker = document.querySelector(".player__time-end");
let songDuration;
function changeEndMarker(song) {
    //1. Вычисляем длину звука
    songDuration = Math.ceil(song.duration);
    //2. Меняем значение продолжительности в тайм-баре
    let minutes = Math.floor(songDuration / 60);
    let seconds = songDuration - minutes * 60;
    timeEndMarker.innerHTML = "";
    timeEndMarker.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}
export { changeEndMarker };
