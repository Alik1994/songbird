function changeEndMarker(song, endMarker) {
    //1. Вычисляем длину звука
    let songLength = Math.ceil(song.duration);
    //2. Меняем значение продолжительности в тайм-баре
    let minutes = Math.floor(songLength / 60);
    let seconds = songLength - minutes * 60;
    endMarker.innerHTML = "";
    endMarker.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}
export { changeEndMarker };
