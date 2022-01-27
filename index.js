let firstCard = 10
let secondCard = 4
let cards [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards [0] + " " + [cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 8
    sum += card
    cards.push(card)
    renderGame()
}

//    START           FINISH       STEP SIZE
//for ( let count = 1;  count < 11;  count += 2 )  {}
//for ( let i = 1;  i < 11;  i += 2 )  {} // convention to write i

