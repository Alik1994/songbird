import { changePause } from "./changePlayButton.js";
function playStage(elements, playBtn) {
    //Запускаем звуки птицы
    elements.song.play();
    let timerId = setInterval(function () {
        //Если проиграл ВЕСЬ звук
        if (elements.timeMarker >= elements.songDuration) {
            //Возвращаем плеер в исходное состояние
            reset(elements, timerId);
            changePause(playBtn);
        }
        else {
            //1. Меняем значения счетчика прошедшего времени
            elements.timeMarker += 0.25;
            //2. Меняем значение в индикаторе пройденного времени
            let minutes = Math.floor(elements.timeMarker / 60);
            let seconds = Math.floor(elements.timeMarker - minutes * 60);
            elements.timeStartMarker.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
            //3. Меняем заливку тайм-бара
            elements.timeProgress.style.backgroundImage = `linear-gradient(to right,#00bc8c 0%, #008966 ${(elements.timeMarker / elements.songDuration) * 100}%, #999 ${(elements.timeMarker / elements.songDuration) * 100}%, #999 100%`;
            //4. Меняем положение ползунка
            if (elements.timeMarker * (elements.timebarWidth / elements.songDuration) >=
                elements.timebarWidth - elements.timebarIndicator.offsetWidth) {
                elements.timebarIndicator.style.left = `${elements.timebarWidth - elements.timebarIndicator.offsetWidth}px`;
            }
            else {
                elements.timebarIndicator.style.left = `${elements.timeMarker * (elements.timebarWidth / elements.songDuration)}px`;
            }
        }
    }, 250);
    return timerId;
}
function pauseStage(song, timerId) {
    clearInterval(timerId);
    song.pause();
}
function dragAndDrop(event, elements) {
    elements.timebarIndicator.style.position = "absolute";
    elements.timebarIndicator.style.zIndex = "1000";
    elements.timeProgress.append(elements.timebarIndicator);
    function moveAt(pageX) {
        //1. Меняем положение ползунка
        let newCoords = pageX -
            elements.timeProgress.getBoundingClientRect().left -
            elements.timebarIndicator.offsetWidth / 2;
        if (newCoords < 0) {
            elements.timebarIndicator.style.left = 0 + "px";
        }
        else if (newCoords >=
            elements.timeProgress.offsetWidth - elements.timebarIndicator.offsetWidth) {
            elements.timebarIndicator.style.left =
                elements.timeProgress.offsetWidth -
                    elements.timebarIndicator.offsetWidth +
                    "px";
        }
        else {
            elements.timebarIndicator.style.left = newCoords + "px";
        }
        //2. Меняем заливку тайм-бара
        elements.timeProgress.style.backgroundImage = `linear-gradient(to right,#00bc8c 0%, #008966 ${(newCoords / elements.timeProgress.offsetWidth) * 100}%, #999 ${(newCoords / elements.timeProgress.offsetWidth) * 100}%, #999 100%`;
        //3. Обновляем данные о прошедшем времени
        elements.timeMarker =
            newCoords / (elements.timeProgress.offsetWidth / elements.songDuration) >=
                0
                ? newCoords /
                    (elements.timeProgress.offsetWidth / elements.songDuration)
                : 0;
    }
    function onMouseMove(event) {
        moveAt(event.pageX);
    }
    elements.timebar.addEventListener("mousemove", onMouseMove);
    elements.timebar.addEventListener("touchmove", onMouseMove);
    elements.timebarIndicator.onmouseup = function () {
        elements.song.currentTime = elements.timeMarker;
        elements.timebar.removeEventListener("mousemove", onMouseMove);
    };
    elements.timebar.onmouseleave = function () {
        elements.timebar.removeEventListener("mousemove", onMouseMove);
    };
    //Для сенсора
    elements.timebarIndicator.ontouchend = function () {
        elements.song.currentTime = elements.timeMarker;
        elements.timebar.removeEventListener("touchmove", onMouseMove);
    };
}
function reset(elements, timerId) {
    //1. Остановка таймера
    clearInterval(timerId);
    //2. Обнуление счетчика учета времени
    elements.timeMarker = 0;
    //3. Изменние цвета фона тайм-бара
    elements.timeProgress.style.background = "#999";
    //4. Возврат индикатора текущего времени на тайм-баре в исходное положение
    elements.timebarIndicator.style.left = "0px";
    //5. Обнуляем значение в индикаторе пройденного времени
    elements.timeStartMarker.textContent = "00:00";
}
export { playStage, pauseStage, dragAndDrop, reset };
