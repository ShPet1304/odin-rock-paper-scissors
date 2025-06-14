
//Global Score Variables
let playerScore = 0;
let computerScore = 0;


// Logic for a single round of gameplay
function playRound(){
    //Function to generate computer choices
    function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);

    if (choice === 1){
        return "rock"
    }
    if  (choice === 2){
        return "paper"
    }
    if (choice === 3){
        return "scissors"
    }

}

    //Function to select player choice
function getHumanChoice(){
    let human = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    return human;
}


    //Function to compare choices and determine a round winner
function determineWinner(humanChoice, computerChoice){
 if(humanChoice == computerChoice){
        return "It's a tie";
    }

   else if(
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'rock' && computerChoice == 'scissors')
   ){
    return "You Win!";
   }

   else{return"Computer Wins!"}

   
}
//Global Variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = determineWinner(humanSelection,computerSelection)

//Score increments depending on round winner
    if (result === "You Win!"){
    playerScore++
}
    if(result === "Computer Wins!"){
    computerScore++
}

//Round Result output
console.log(result);
console.log("You selected: " + humanSelection + "   " + "Computer selected: " + computerSelection);
console.log("Your score = " +playerScore+ " Computer = " +computerScore);
return;
}



//Function for a full game with 5 rounds
function playGame(){
    for (let round = 1; round <=5; round++){
        playRound()};
//Game over message at the end of 5 rounds with winner declared
        console.log("Game Over")

    if (playerScore > computerScore){
        console.log("You Win!!!😁") 
    }
    else if(computerScore > playerScore){
        console.log("You lose 🙁")}
    else {console.log("It's a tie 😲")}
    
    
}

//RUN GAME(call function)
playGame()