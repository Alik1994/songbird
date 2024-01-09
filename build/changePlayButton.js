function changePlay(button) {
    //1.Удаляем класс play и добавляем pause
    button.classList.remove("play");
    button.classList.add("pause");
    //2. Заменяем кнопку
    button.innerHTML = "";
    button.insertAdjacentHTML("afterbegin", `<div class="pause-icon"></div>`);
}
function changePause(button) {
    //1.Удаляем класс pause и добавляем play
    button.classList.remove("pause");
    button.classList.add("play");
    //2. Заменяем кнопку
    button.innerHTML = "";
    button.insertAdjacentHTML("afterbegin", `<div class="play-icon"></div>`);
}
export { changePlay, changePause };
