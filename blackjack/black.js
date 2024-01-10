let player = {
    name : "vacuum ",
    chips : 145,
}

let cardArr = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRand(){
    let randInt = Math.floor(Math.random() * 13 ) + 1;
    if(randInt > 10){
        return 10
    }
    else if(randInt === 1){
        return 11
    }
    else{
        return randInt
    }
}

function startGame(){
    isAlive = true
    hasBlackjack = false
    let firstCard = getRand()
    let secondCard = getRand()
    cardArr = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cardArr.length; i++)
    {
        cardEl.textContent += cardArr[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Draw card?"
    }
    else if(sum === 21){
        message = "Blackjack!"
        hasBlackjack = true
    }
    else{
        message = "You've busted!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive == true && hasBlackjack == false)
    {
        let new_card = getRand()
        sum += new_card
        cardArr.push(new_card)
        renderGame()
    }
}


