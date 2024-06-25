import { birdsData } from "./birdsData";
const roundsName: string[] = [
  "Воробьиные",
  "Лесные птицы",
  "Певчие птицы",
  "Хищные птицы",
  "Морские птицы",
];

function makeRoundsList(rounds: string[]): any {
  const roundsList = document.querySelector(".rounds-list") as HTMLElement;

  if (rounds.length !== birdsData.length) {
    console.log("Количество уровней и число группы птиц не совпадает!");
  }

  roundsList.innerHTML = "";

  for (let i = 0; i < rounds.length; i++) {
    roundsList.insertAdjacentHTML(
      "beforeend",
      `
      <li class="rounds-list__item">
      <a href="#" class="rounds-list__link">${rounds[i]}</a>
    </li>
    `
    );
  }

  return;
}

export { makeRoundsList, roundsName };
