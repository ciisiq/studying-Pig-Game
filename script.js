'use strict';

//Selecting the elements
const score0El = document.querySelector('#score--0'); // Option 1
const score1El = document.getElementById('score--1'); // Option 2 Should be more faster than the query
const diceEl = document.querySelector('.dice');

//starting the condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
