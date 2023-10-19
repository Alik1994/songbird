import { birdsData } from "./birdsData.js";
function chooseRandomBird(lvl) {
    let collection = birdsData[lvl];
    let randomIndx = Math.floor(Math.random() * collection.length);
    let choosenBird = collection[randomIndx];
    return choosenBird;
}
export { chooseRandomBird };
