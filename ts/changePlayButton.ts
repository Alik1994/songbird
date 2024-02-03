function changePlay(button: HTMLElement) {
  //1.Удаляем класс play и добавляем pause
  button.classList.add("pause");
  button.classList.remove("play");

  //2. Заменяем кнопку
  button.innerHTML = "";
  button.insertAdjacentHTML("afterbegin", `<div class="pause-icon"></div>`);
}

function changePause(button: HTMLElement) {
  //1.Удаляем класс pause и добавляем play
  button.classList.add("play");
  button.classList.remove("pause");
  //2. Заменяем кнопку
  button.innerHTML = "";
  button.insertAdjacentHTML("afterbegin", `<div class="play-icon"></div>`);
}

export { changePlay, changePause };
