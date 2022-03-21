//import {GameOver} from "./lost.js";
//GameOver = require("./lost");


const GameOver = () => {
    const dialog = document.querySelector(".dialog");
    dialog.showModal();
}


const twoOrFour = () => {
    return (
        Math.random() >= 0.5 ? 2 : 4
    )
}
var esc = 0;
const randomBlockGenerator = () => {
    //creating random number between one to nine
    let result;
     do {
         result = Math.floor(Math.random()*10); 
     } while (result < 1);
    console.log(result);
    //this will give the result as if which block should light up with
    //a new number and it's made sure by the loop that 0 is not included
    let block;
    //test start
    //result = 1;
    //test end
    if (esc >= 9)
     GameOver();
    //esc = 0;
    switch (result) {
        case 1: 
            block = document.querySelector('.one');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    console.log("Repeating...")
                    esc++;
                    randomBlockGenerator();
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break;
        case 2:
            block = document.querySelector('.two');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break;
        case 3:
            block = document.querySelector('.three');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break;  
        case 4:
            block = document.querySelector('.four');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break; 
        case 5:
            block = document.querySelector('.five');
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break; 
        case 6:
            block = document.querySelector('.six');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break; 
        case 7:
            block = document.querySelector('.seven');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break; 
        case 8:
            block = document.querySelector('.eight');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break; 
        case 9:
            block = document.querySelector('.nine');
            console.log(block);
            for (let i =0; i < block.classList.length; i++) {
                console.log(block.classList[i])
                if (block.classList[i] == "occupied") {
                    esc++;
                    randomBlockGenerator();
                    console.log("Repeating...")
                }/*  else if (block.classList[i] != "occupied") {
                    block.classList.add('occupied');
                    //console.log(block.childNodes[0].innerHtml);
                    block.childNodes[0].innerText = twoOrFour();
                    break;
                } */
            }
            block.classList.add('occupied');
            //console.log(block.childNodes[0].innerHtml);
            if (block.childNodes[0].innerText == "")
                block.childNodes[0].innerText = twoOrFour();
            break; 
    }
    //each number connects to the coresponding block number
    //it will attach the occupied class to that block
    //before, it has to make sure that the block isn't already occupied
}
randomBlockGenerator();
//export {randomBlockGenerator}


