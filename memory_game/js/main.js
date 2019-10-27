const cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

const scoreElement = document.getElementById('gamesWon');
const roundsElement = document.getElementById('roundsPlayed');

let playerScore = 0;
let playedRounds = 0;

function showScore() {
  scoreElement.innerHTML = playerScore;
  roundsElement.innerHTML = playedRounds;
}

function hideScore() {
  scoreElement.innerHTML = 0;
  roundsElement.innerHTML = 0;
}

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    playerScore += 1;
  } else {
    alert("Sorry, try again.");
  }
  showScore();
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    playedRounds += 1;
    checkForMatch();
  }
}

function hideCards() {
  for (let i = 0; i < cards.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay.length = 0;
}

function resetGame() {
  hideCards();
  hideScore();
  playerScore = 0;
  playedRounds = 0;
}

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

// listen for next button
const nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', hideCards);

// Listen for reset button
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', resetGame);

createBoard();
