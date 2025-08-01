
//Global Variables
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
let results = document.querySelector('.results')
let you = document.querySelector('.playerChose')
let comp = document.querySelector('.computerChose')
let playScore = document.querySelector('.playerScore')
let compScore = document.querySelector('.computerScore')
let win = document.querySelector('.winner')
const gameDiv = document.querySelector('.container')
const startDiv = document.querySelector('.startContainer')
const gameResults = document.querySelector('.gameOver')
let reset = document.querySelector('.startButton');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let press ;

//UI Logic
showStart();

function showGame(){
    playerScore = 0;
    computerScore = 0;
    results.textContent = "";
    playScore.textContent= " " +playerScore;
    compScore.textContent= " " +computerScore;
    gameDiv.style.display = 'flex';
    startDiv.style.display = 'none';
    gameResults.style.display = 'none';
}

function showStart(){
    startDiv.style.display = 'flex';
    gameDiv.style.display = 'none';
    gameResults.style.display = 'none';
}

function gameOver(){
    gameResults.style.display = 'block';
    startDiv.style.display = 'none';
    gameDiv.style.display = 'none';
}



//Human selection
rock.addEventListener('click',choseRock);
paper.addEventListener('click',chosePaper);
scissors.addEventListener('click',choseScissors);

function choseRock(){
    press = "rock";
    playRound();
  
}

function chosePaper(){
    press = "paper";
    playRound();
}

function choseScissors(){
    press = "scissors";
    playRound();
}


// Logic for a single round of gameplay
function playRound(){
    //Function to generate computer choices
    function getComputerChoice(){
        let choice = Math.floor((Math.random() * 3) + 1);

        if (choice === 1){
            return "rock"
        };
        if  (choice === 2){
            return "paper"
        };
        if (choice === 3){
            return "scissors"
        };

}

    //Function to get player choice
function getHumanChoice(){
    return press;
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
    return "You Win This Round!";
   }

   else{return"I Win This Round!"}

   
}

//Round Variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = determineWinner(humanSelection,computerSelection)

//Score increments depending on round winner
    if (result === "You Win This Round!"){
    playerScore++
}
    if(result === "I Win This Round!"){
    computerScore++
}


   if (playerScore === maxScore || computerScore === maxScore){
        gameOver();
        gameWinner();
       
    }


//Round Result output
win.textContent=" " + gameWinner()
results.textContent = result;
you.textContent =" " + humanSelection;
comp.textContent =" " + computerSelection;
playScore.textContent= " " +playerScore;
compScore.textContent= " " +computerScore;
return;
}




function gameWinner(){
    if (playerScore === maxScore){
        return "You"
    }

   if (computerScore === maxScore){
        return "I"
    }
}


