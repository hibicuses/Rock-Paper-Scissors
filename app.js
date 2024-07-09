let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
    //rock paper scissors
    const options = ["rock", "paper", "scissors"];
     const randIdx =  Math.floor(Math.random() * 3);
     return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "GAME WAS DRAW, Play again";
    msg.style.backgroundColor = 'black';
    msg.style.color = 'white';
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `YOU WIN! Your ${userChoice} beats Comp's ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText =`YOU LOST! Comp's ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = 'red';
    };
}

const playGame = (userChoice) => {
    //Generate Computer Choice
    const compChoice = genCompChoice();
    
    if(userChoice === compChoice) {
        //DRAW GAME
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true; 
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ?
            false : true;
        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ?
            false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
    
        playGame(userChoice);
    });
});