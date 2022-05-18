'use strict';

//Selecting the elements
const score0El = document.querySelector('#score--0'); // Option 1
const score1El = document.getElementById('score--1'); // Option 2 Should be more faster than the query
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;

const init = function () {
  //starting the condition
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1EL.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Genarating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1: True,
    if (dice !== 1) {
      // add dice to the current score
      // currentScore = currentScore + dice;
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0El.textContent = currentScore; // CHANGE LATER;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player
    //  scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      //Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//JS call the function and reset all the game when clicked
btnNew.addEventListener('click', init);
