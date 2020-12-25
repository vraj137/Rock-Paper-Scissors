let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("users-score");
const computerScore_span = document.getElementById("computers-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function winner(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ", You Win! YAYY!🥳";
    document.getElementById(userChoice).classList.add('win-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('win-glow')}, 400);
}

function loser(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " destroys " + computerChoice + ", You Lost...🥶";
    document.getElementById(userChoice).classList.add('lose-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('lose-glow')}, 400);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = userChoice + " equals " + computerChoice + ", It's a draw.🧐";
    document.getElementById(userChoice).classList.add('draw-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('draw-glow')}, 400);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            winner(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            loser(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener("click", function() {
    game("Rock");
})
paper_div.addEventListener("click", function() {
    game("Paper");
})
scissors_div.addEventListener("click", function() {
    game("Scissors");
})
