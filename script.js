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

//starting the condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Genarating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2.Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled 1: True,
  if (dice !== 1) {
    // add dice to the current score
    // currentScore = currentScore + dice;
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER;
  } else {
    //switch to next player
  }
});
