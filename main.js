function computerPlay(){
    let computerSelection=""; 
    const choice =  Math.floor(Math.random()*3); 

    if(choice == 0){
        computerSelection = "Rock"; 
    }
    else if(choice == 1){
        computerSelection = "Paper"; 
    }
    else{
        computerSelection = "Scissors"; 
    }

    return computerSelection; 

}

var compscore =0; 
var playerscore=0; 


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection ){ 
        alert(" Draw!") ; 
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerscore++; 
        alert(" Player win: Paper beats Rock!"); 
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        compscore++; 
        alert( "Computer win: Paper beats Rock!"); 
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        compscore++; 
        alert( " Computer win: Scissors beats Paper!"); 
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerscore++; 
        alert(  " Player win: Scissors beats Paper!"); 
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerscore++; 
        alert( " Player win: Rock beats Scissors!"); 
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        compscore++; 
        alert( " Computer win: Rock beats Scissors!"); 
    }

  
    
}

function reset(){
     compscore =0; 
     playerscore=0; 
}

function game(){
    
    let i = 0; 
    do{
        let computerSelection = computerPlay().toLowerCase(); 
        let playerSelection = prompt("Round "+(i+1)+"\nComputer : "+compscore+" | Player: "+playerscore+"\nRock, Paper, or Scissors?").toLowerCase(); 
       
        i++
        playRound(playerSelection, computerSelection);
        console.log(compscore); 
        console.log(playerscore); 
    }
    while (i<5){
    }

    if(compscore > playerscore){
        alert ("computer wins!");
    }
    else if (playerscore > compscore)
    {
        alert ("you win!");
    }
    else{
        alert ("draw!"); 
    }

    reset(); 

}


game(); 







