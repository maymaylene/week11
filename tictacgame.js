/*let playersTurnText = document.getElementById("playersTurn");
let cells = document.querySelectorAll(".cellId");
let playAgainButton = document.getElementById("playAgian");
let playerPick = ["","","","","","","","",""];
let gameGoing = false;
let currentlyPlaying = "X";

let winnerCombos = [
    [2,4,6],
    [0,1,2],
    [6,7,8],
    [3,4,5],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [0,4,8],    
];

function beginGame(){
    cells.forEach(cell => cell.addEventListener("click", gridMarked))
    playAgainButton.addEventListener("click", playAgain);
    playersTurnText.textContent =  `${currentlyPlaying}`;
    gameGoing = true;
}

function gridMarked(){
    let id = this.getAttribute("cellId");
    if(playerPick[cellId] != "" || !gameGoing){
        return;
    } 
    markOnCellUpdated(this, cellId);
    whosWinning();
}

function markOnCellUpdated(cell, i  ){
    playerPick[i] = currentlyPlaying;
    cell.textContent = currentlyPlaying;
    
}

function nextPlayer(){
    currentlyPlaying = (currentlyPlaying == "X") ? "O" : "X";
    playersTurnText.textContent = `${currentlyPlaying}`;
    
}

function whosWinning(){
     
}

function playAgain(){

}*/
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