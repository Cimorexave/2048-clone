//this script handles the controls of the game which include:
// right key, left key, up key, down key

const ArrowDown = () => {
    console.log('Arrow Down key functions triggered...')
}

const ArrowUp = () => {
    console.log('Arrow Up key functions triggered...')
}

const ArrowLeft = () => {
    console.log('Arrow Left key functions triggered...')
}

const ArrowRight = () => {
    console.log('Arrow Right key functions triggered...')
}

//first targeting the body and attaching the event to it so it can be triggered always

document.querySelector("body").addEventListener('keydown', () => {
    console.log('a key was pressed')
    console.log(event.key) 
    if (event.key == 'ArrowUp')
        ArrowUp();
    else if (event.key == 'ArrowDown')
        ArrowDown();
    else if (event.key == 'ArrowLeft')
        ArrowLeft();
    else if (event.key == 'ArrowRight')
        ArrowRight();
})