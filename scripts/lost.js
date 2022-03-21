/* 
this script will be activated every time we are stuck in
a situation that is a losing situation it might include a couple
of scenarios
*/
// this script will targer the modal that shows you've lost and
//prevents you from doing any more moves until you push 
// the new game button 

const GameOver = () => {
     const dialog = document.querySelector(".dialog");
     dialog.showModal();
}
export {GameOver}
