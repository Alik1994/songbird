import { IData } from "./birdsData";
import { chosenBirdInfo } from "./index";

function pasteFragment(info: IData) {
  chosenBirdInfo.innerHTML = "";
  chosenBirdInfo.insertAdjacentHTML(
    "afterbegin",
    `<div class="random-bird">
    <div class="random-bird__header">
      <div class="random-bird__bird-img" id="chosenImg"></div>
      <div class="random-bird__bird-info">
        <div class="random-bird__title">
          <p class="random-bird__choosen-name">${info.name}</p>
        </div>
        <div class="random-bird__latin-title">
          <p class="random-bird__latin-name">${info.species}</p>
        </div>
        <div class="random-bird__voice">
          <div class="player" id="chosenPlayer">
            <div class="player__playback-button play chosen">
              <div class="play-icon"></div>
            </div>
            <div class="player__timebar chosen__timebar">
              <div class="player__timebar-bar chosen__timebar-bar">
                <div class="player__timebar-circle chosen__timebar-circle"></div>
              </div>
              <div class="player__time-info">
                <div class="player__time-start chosen__start">00:00</div>
                <div class="player__time-end chosen__end">00:00</div>
              </div>
            </div>
            <audio src="" id="choosenSong"></audio>
          </div>
        </div>
      </div>
    </div>
    <div class="random-bird__body">
      <div class="random-bird__about">
        <p class="random-bird__about-text">${info.description}</p>
      </div>
    </div>
  </div>`
  );
}

export { pasteFragment };
