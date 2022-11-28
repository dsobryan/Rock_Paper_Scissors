/* Javascript */

function computerPlay() {
        computerChoice = Math.floor(Math.random() * 3)
        if (computerChoice === 0) {
            console.log("Computer chose rock!")
        } else if (computerChoice === 1) {
            console.log("Computer chose Paper!")
        } else {
            console.log("Computer chose Scissors!")
        }
        return computerChoice
}

    function playerChoice() {
        let choice = prompt("Type in your choice, Rock, Paper, Scissors: ").toLowerCase();
        choice = choice;

        if (choice === "rock") {
            choice = 0
        } else if (choice === "paper") {
            choice = 1
        } else if (choice === "scissors") {
            choice = 2
        }
        return choice
    }



computerChoice = computerPlay();
choice = playerChoice();



// do {
//     playerChoice()
// } while (choice != 0 || 1 || 2);

//  {
//     console.log("Please put in only rock, paper, or scissors");
//     playerChoice();
// }



