const timeEndMarker = document.querySelector(
  ".player__time-end"
) as HTMLElement;
let songDuration: number;

function changeEndMarker(song: HTMLAudioElement): void {
  //1. Вычисляем длину звука
  songDuration = Math.ceil(song.duration);

  //2. Меняем значение продолжительности в тайм-баре
  let minutes: number = Math.floor(songDuration / 60);
  let seconds: number = songDuration - minutes * 60;

  timeEndMarker.innerHTML = "";
  timeEndMarker.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

export { songDuration, changeEndMarker };
