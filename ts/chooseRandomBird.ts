import { birdsData } from "./birdsData.js";

function chooseRandomBird(lvl: number): object {
  let collection: object[] = birdsData[lvl];
  let randomIndx: number = Math.floor(Math.random() * collection.length);
  let choosenBird: object = collection[randomIndx];

  return choosenBird;
}

export { chooseRandomBird };
