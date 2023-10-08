import { birdsData } from "./birdsData.js";
const roundsName = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
];
function makeRoundsList(rounds) {
    const roundsList = document.querySelector(".rounds-list");
    if (rounds.length !== birdsData.length) {
        console.log("Количество уровней и число группы птиц не совпадает!");
    }
    roundsList.innerHTML = "";
    for (let i = 0; i < rounds.length; i++) {
        roundsList.insertAdjacentHTML("beforeend", `
      <li class="rounds-list__item" id="${i}">
      <a href="#" class="rounds-list__link">${rounds[i]}</a>
    </li>
    `);
    }
}
export { makeRoundsList, roundsName };