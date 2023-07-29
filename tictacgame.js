let cells = document.querySelectorAll(".cell");
let playerX = "X";
let playerO = "O";
let playAgainButton = document.getElementById("playAgain");
let currentlyPlaying = playerX;

const gameContainer = Array(cells.length);
gameContainer.fill(null);

cells.forEach((cell) => cell.addEventListner('click', cellClick));

function cellClick(event){
   if(gameOver.classList.contains('visible')){
        return;
   }
   let cell = event.target;
   let cellID = cell.dataset.index;
   if (cell.innerText != ""){
        return;
}

    if(currentlyPlaying === playerX){
        cell.innerText = playerX;
        gameContainer[cellId] = playerX
        currentlyPlaying = playerO;
    }
}