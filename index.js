let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");

let player = {
    name: "Addis",
    chips: 23  
}

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    randerGame();
}

function randerGame(){
    cardEl.textContent= "Cards: ";
    for(let i=0; i < cards.length; i++){
        cardEl.textContent +=cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "Yooohoo!, You've got BlackJack!";
    }else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.innerHTML = message;
}



function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        randerGame();
    }
}































































