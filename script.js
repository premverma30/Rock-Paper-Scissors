let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drowGame = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        comScore++
        compScorePara.innerText = comScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choicem = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drowGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
           userWin = compChoice === "scissors" ? false : true; 
        } else {
            userWin = compChoice === "rock" ? false : true;  
        }
        showWinner(userWin);
    };
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);   
    });
});