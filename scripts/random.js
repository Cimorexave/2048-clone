

const randomBlockGenerator = () => {
    //creating random number between one to nine
    let result;
     do {
         result = Math.floor(Math.random()*9); 
     } while (result < 1);
    console.log(result);
    //this will give the result as if which block should light up with
    //a new number and it's made sure by the loop that 0 is not included
    let block;
    switch (result) {
        case 1: 
            block = document.querySelector('.one');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break;
        case 2:
            block = document.querySelector('.two');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break;
        case 3:
            block = document.querySelector('.three');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break;  
        case 4:
            block = document.querySelector('.four');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break; 
        case 5:
            block = document.querySelector('.five');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break; 
        case 6:
            block = document.querySelector('.six');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break; 
        case 7:
            block = document.querySelector('.seven');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break; 
        case 8:
            block = document.querySelector('.eight');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break; 
        case 9:
            block = document.querySelector('.nine');
            console.log(block);
            for (child in block.classList) {
                console.log(child)
                if (child == "occupied")
                    block.classList.add('occupied');
            }
            break; 
    }
    //each number connects to the coresponding block number
    //it will attach the occupied class to that block
    //before, it has to make sure that the block isn't already occupied
}
randomBlockGenerator();


