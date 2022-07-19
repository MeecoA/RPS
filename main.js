const rockBtn = document.querySelector("#rockBtn"); 
const paperBtn = document.querySelector("#paperBtn"); 
const scissorsBtn = document.querySelector("#scissorsBtn");   
const resetBtn = document.querySelector("#resetBtn");


//variables for the selection
let rockSelect = "rock"; 
let paperSelect = "paper"; 
let scissorSelect = "scissors"; 

//div for the winner result and scores
const result= document.querySelector("#announce");
const compScoreHolder = document.querySelector("#compScoreHolder");
const playerScoreHolder = document.querySelector("#playerScoreHolder"); 
const winHolder = document.querySelector("#winHolder");
//scores

let compScore = 0; 
let playerSCore = 0; 



function computerPlay(){
    let computerSelection=""; 
    const choice =  Math.floor(Math.random()*3); 

    if(choice == 0){
        computerSelection = "rock"; 
    }
    else if(choice == 1){
        computerSelection = "paper"; 
    }
    else{
        computerSelection = "scissors"; 
    }

    return computerSelection; 
}


function playRound(playerSelection, computerSelection) {
    winHolder.textContent="";
    
    if (playerSelection === computerSelection ){ 
        result.textContent = "Draw!"; 
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result.textContent = "Player win: Paper beats Rock!"; 
        playerSCore++; 
        playerScoreHolder.textContent=playerSCore; 
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        result.textContent = "Computer win: Paper beats Rock!"; 
        compScore++; 
        compScoreHolder.textContent=compScore; 
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result.textContent = "Computer win: Scissors beats Paper!"; 
        compScore++;
        compScoreHolder.textContent = compScore; 
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result.textContent = "Player win: Scissors beats Paper!"; 
        playerSCore++; 
        playerScoreHolder.textContent = playerSCore; 
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        result.textContent = "Player win: Rock beats Scissors!"; 
        playerSCore++; 
        playerScoreHolder.textContent = playerSCore; 
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result.textContent = "Computer win: Rock beats Scissors!"; 
        compScore++;
        compScoreHolder.textContent = compScore; 
    }

    if (playerSCore == 5){
        
        compScoreHolder.textContent="0"; 
        compScore = 0; 
        playerScoreHolder.textContent="0"; 
        playerSCore = 0; 
        winHolder.textContent="You win!";
        
    }
    else if (compScore == 5){
        compScoreHolder.textContent="0"; 
        compScore = 0; 
        playerScoreHolder.textContent="0"; 
        playerSCore = 0; 
        winHolder.textContent="Computer Won";
        
    }

}

//even listeners for the playRound function - with param(selection,computerPlay())

rockBtn.addEventListener('click', () => {
    playRound(rockSelect,computerPlay()); 
}); 
paperBtn.addEventListener('click', () => {
    playRound(paperSelect,computerPlay()); 
    
}); 
scissorsBtn.addEventListener('click', () => {
    playRound(scissorSelect,computerPlay()); 
    
}); 
resetBtn.addEventListener('click', () => {
    location.reload();
    result.textContent="Start"
    
}); 









