'use strict';

//DOM Elements......
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = document.querySelector('.score');
let check = document.querySelector('.check');
let highscore = document.querySelector('.highscore');
let again = document.querySelector('.again');
let guess = document.querySelector('.guess');
//...............

let secretNumber = Math.trunc(Math.random()*20)+1;
let num = 20;
let high = 0;

//Event Listener for Guessing Number.........
check.addEventListener('click',() => {
	let guessValue = Number(document.querySelector('.guess').value);
	
	if(!guessValue)
	{
		message.textContent = 'NO Number!!';
	}
	else if(guessValue === secretNumber)
		{
			number.textContent = secretNumber;
			message.textContent = 'Correct Number!!';
			score.textContent = num;
			document.querySelector('body').style.backgroundColor = '#60b347';
			number.style.width = '30rem';
			if(high < num)
			{
				high = num;
				highscore.textContent = num;
			}
			else
			{
				highscore.textContent = high;
			}
		}
	else if(guessValue !== secretNumber)
		{
			if(num > 1 )
			{
				message.textContent = guessValue > secretNumber?'Too High...':'Too Low...';
				num--;
		    	score.textContent = num;
		    }
		    else
			{
				message.textContent = 'You loose the Game!!';
				score.textContent = 0;
			}
		}
});

//..............................

//Event Listner for Start Game again.....
again.addEventListener('click',() => {
  score.textContent = '20';
  num = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  message.textContent = 'Start guessing...';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
 });
//............................


