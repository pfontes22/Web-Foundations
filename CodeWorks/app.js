
console.log('howdy 🤠')

let playerChoice = "?"
let cpuChoice = "?"

let state = {
    wins: 0, loses: 0, ties: 0 
}
//let playerImg = document.getElementById('player-choice')
//let cpuImg = document.getElementById('cpu-choice')

function drawScoreboard(){
    //winsDiv.innerText = state.wins 

    //tiesDiv.innerText = state.ties

    //losesDiv.innerText = state.loses
}

function rock(){
    console.log('user chose rock')
    playerChoice = 'rock'
    //playerImg.src = 'rock.png'    
    randomCpuChoice()
}

function paper(){
    console.log('user chose paper')
    playerChoice = 'paper'
    //playerImg.src = 'paper.png'
    randomCpuChoice()
}


function scissors(){
    console.log('user chose scissors')
    playerChoice = 'scissors'
    //playerImg.src = 'scissors.png'    
    randomCpuChoice()
}

function randomCpuChoice(){
    console.log("🤖 computer is picking")
    let options = ['rock','paper','scissors']
    let random = options[Math.floor(Math.random() * 3)]
    cpuChoice = random
    //cpuImg.src = random + '.png'
    console.log('🤖 picks', cpuChoice)
    playGame()
}

function playGame(){
    if (playerChoice == cpuChoice){
        console.log('Tie!')
        // state.ties +=
    } else if (playerChoice == 'rock' && cpuChoice == 'scissors'){
        console.log('You Won!')
        // state.wins +=   
    } else if(playerChoice == 'paper' && cpuChoice =='rock'){
        console.log('You Won?')
        // state.wins +=
    } else if (playerChoice == 'scissors' && cpuChoice == 'paper'){
        console.log('You Won$')
        // state.wins +=
    } else {
        console.log('You Lose?!?!')
        // div.loses +=
    }
    //console.log(state)
    //drawScoreboard()
}




