//import { randomBlockGenerator } from "./scripts/random";
//randomBlockGenerator();

//Buttons:
//developer control panel, random block generator for testing the function
document.querySelector(".randomBlockGenerator").addEventListener('click', () => {
    console.log("RBG triggered...")
    randomBlockGenerator();
})
//new game
document.querySelector(".newGame").addEventListener('click' , () => {
    console.log("starting new game...")
    location.reload();
})