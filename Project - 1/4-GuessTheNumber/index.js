let randomNo = parseInt((Math.random() * 100 + 1))
  // console.log(randomNo);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let pervGuess  = [];
let numGuess = 1;
let palyGame = true;

if(palyGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){

    if(isNaN(guess)){
        alert("Plaesa Enter A valide Number");
    }else if(guess < 1){
        alert("Plaesa Enter A Number More Than One");
    }else if(guess > 100){
        alert("Plaesa Enter A Number Less Than One");
    }else{
        pervGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over Random Number Was ${randomNo}`);
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if(guess === randomNo){
        displayMessage(` you guessed it right`);
        endGame();
    }else if(guess < randomNo){
        displayMessage(`Number is TOOO low`);
    }else if(guess > randomNo){
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess){
   userInput.value = '';
   guessSlot.innerHTML += `${guess}, `;
   numGuess++;
   remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
       userInput.value = '',
       userInput.setAttribute('disabled','');
       p.classList.add('button')
       p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
       StartOver.appendChild(p)
       palyGame = false;
      newGame();
}

function newGame(){
   const newGameButton =  document.querySelector('#newGame')
   newGameButton.addEventListener('click',(e)=>{
      randomNo  = parseInt((Math.random() * 100 + 1))
      numGuess = 1;
      guessSlot.innerHTML = '';
      pervGuess  = [];
      remaining.innerHTML +=`${11 - numGuess}`;
      userInput.removeAttribute('disabled');
      StartOver.removeChild(p)
      palyGame = true;
   })
}


