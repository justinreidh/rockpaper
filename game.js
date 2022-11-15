function getComputerChoice() {
    let newnum = Math.floor(Math.random()*3)
    if (newnum === 0) {
        return "rock"
    } else if (newnum === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelecion, computerSelection) {
    playerchoice = playerSelecion.toLowerCase()
    let winner = ""
    const win = ("You win. Computer chose " + computerSelection + ".")
    const lose = ("You lose.  Computer chose " + computerSelection + ".")
    const draw = "Draw"
    if (playerchoice === computerSelection) {
        winner = draw
    } else if (playerchoice === "rock" && computerSelection === "paper") {
        winner = lose
    } else if (playerchoice === "rock" && computerSelection === "scissors") {
        winner = win
    } else if (playerchoice === "paper" && computerSelection === "scissors") {
        winner = lose
    } else if (playerchoice === "paper" && computerSelection === "rock") {
        winner = win
    } else if (playerchoice === "scissors" && computerSelection === "paper") {
        winner = win
    } else if (playerchoice === "scissors" && computerSelection === "rock") {
        winner = lose
    }
    return winner
}  

let score = 0

function newGame (buttonSelect) {
    const computerSelection = getComputerChoice();
    const container = document.createElement('div');
    const hcontainer = document.querySelector('.results')
    container.textContent = playRound(buttonSelect, computerSelection)
    hcontainer.appendChild(container)

    if (playRound(buttonSelect, computerSelection) == "You win. Computer chose " + computerSelection + ".") {
        score ++
    } else if (playRound(buttonSelect, computerSelection) == "You lose.  Computer chose " + computerSelection + ".") {
        score --
    } 
    const results = document.querySelector('.results')
    const runningscore = document.createElement('runningscore')
    runningscore.textContent = score
    results.appendChild(runningscore)

    if (score == 5) {
        runningscore.textContent = "5 points. You win!"
    }
    
}

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    const buttonSelect = "rock";
    newGame(buttonSelect);
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    const buttonSelect = "paper";
    newGame(buttonSelect);
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    const buttonSelect = "scissors";
    newGame(buttonSelect);
})


/*
function game(input) {
    let score = 0
    for (let i=0; i < 5; i++) {
        const playerSelecion = input
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelecion, computerSelection))
        if (playRound(playerSelecion, computerSelection) == "You win") {
            score ++
        } else if (playRound(playerSelecion, computerSelection) == "You lose") {
            score --
        } 
        console.log(score)
    }
    console.log("Your final score is " + score)

    score = 0
}

game(prompt("Rock, paper, or scissors?")) */