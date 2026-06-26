let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".circle");
const msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const userMsg = document.querySelector("#User-Msg");
const compMsg = document.querySelector("#Comp-Msg");

const showWinner = (userwin) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win ");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
    } else {
         compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose");
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    console.log("the game is draw");
    msg.innerText = "game was draw";
}


const genCompChoice = () => {
    const option = [ "rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];
}

const playGame = (circleId) => {
    console.log("user choice " , circleId);
    userMsg.innerText = circleId;


    const compchoice = genCompChoice();
    console.log("computer choice ", compchoice);
    compMsg.innerText = compchoice;

    if (circleId === compchoice) {
        //drawGame 
        drawGame();

    }else{
        let userwin = true;
        if(circleId === "rock"){
            //scisors, paper
            userwin = compchoice === "paper" ? false : true ;
        } else if (circleId === "paper"){
            // rock , scissors
            userwin = compchoice === "scissors" ? false : true ;
        } else {
            // rock , paper
            userwin = compchoice === "rock" ? false : true ;
        }

        showWinner(userwin)
    }
}

const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

choices.forEach ((circle) =>{
    circle.addEventListener("click", () => {
        const circleId = circle.getAttribute("id");
        

        playGame(circleId);
    })
})