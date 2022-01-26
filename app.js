'use strict'
// const express = require('express');
// const app = express();
// const port = 3000;
//Choose Difficulty
const easyButton = document.querySelector('.easyButton');
const diffLevel1 = document.querySelector('.diffLevel1');
const diffLevel2 = document.querySelector('.diffLevel2');
const hmOfDiffLevel = document.querySelector('.hmOfDiffLevel');
const guessNumber = document.querySelector('.guess');
const goForIt = document.querySelector('.goForIt');
const mysteryBox = document.querySelector('.mysteryBox');


const easyLevelMessage = function(message1, message2, message3) {
    diffLevel1.textContent = message1
    diffLevel2.textContent = message2
    hmOfDiffLevel.textContent = message3
}

const refresh = function() {
    goForIt.textContent = 'Go For it'
    guessNumber.value = 0;
    mysteryBox.textContent = '?';
}


const newHighScore = function(p1, p2) {

}


// task make function that will lower the goes and 
const tryHigher = function(p1, p2) {

}

const tryLower = function(p1, p2) {

}



let secretNumber1;
let secretNumber2;
let secretNumber3;
// easy button
easyButton.addEventListener('click', function() {
    easyLevelMessage('Ok', 'my bro', 'lets go easy')

    if (Number.isInteger(secretNumber2) === true) {
        secretNumber2 = false;
        secretNumber1 = (Math.trunc(Math.random() * 20) + 1)
    } else if (Number.isInteger(secretNumber3) === true) {
        secretNumber3 = false;
        secretNumber1 = (Math.trunc(Math.random() * 20) + 1)
    } else {
        secretNumber2 = false;
        secretNumber3 = false
        secretNumber1 = (Math.trunc(Math.random() * 20) + 1)
    }
    // let secretNumber1;
    secretNumber1 = (Math.trunc(Math.random() * 20) + 1);
    console.log(secretNumber1)
    refresh();
    // goForIt.textContent = 'Go For it'
    // guessNumber.value = 0;
    // mysteryBox.textContent = '?';
    // goes = 20;
})

//medium button

document.querySelector('.mediumButton').addEventListener('click', function() {
    easyLevelMessage('k', 'thats cool', 'going middle')
        // let secretNumber2;
    if (Number.isInteger(secretNumber1) === true) {
        secretNumber1 = false;
        secretNumber2 = (Math.trunc(Math.random() * 50) + 1)
    } else if (Number.isInteger(secretNumber3) === true) {
        secretNumber3 = false;
        secretNumber2 = (Math.trunc(Math.random() * 50) + 1)
    } else {
        secretNumber1 = false;
        secretNumber2 = false
        secretNumber2 = (Math.trunc(Math.random() * 50) + 1)
    }
    secretNumber2 = (Math.trunc(Math.random() * 50) + 1);
    refresh();
})

// Hard Button


document.querySelector('.hardButton').addEventListener('click', function() {
    easyLevelMessage('wow', 'u so cool', 'going intense huh?')

    if (Number.isInteger(secretNumber1) === true) {
        secretNumber1 = false;
        secretNumber3 = (Math.trunc(Math.random() * 100) + 1)
    } else if (Number.isInteger(secretNumber2) === true) {
        secretNumber2 = false;
        secretNumber3 = (Math.trunc(Math.random() * 100) + 1)
    } else {
        secretNumber1 = false;
        secretNumber2 = false
        secretNumber3 = (Math.trunc(Math.random() * 100) + 1)
    }
    // let secretNumber3;
    secretNumber3 = (Math.trunc(Math.random() * 100) + 1)
    refresh();
})


/* checking the guessed number if equal to secret number*/
let goes = 20;
let highScore = 0;
document.querySelector('.checkButton').addEventListener('click', function() {
    document.querySelector('.highScore').style.display = 'none';
    //the check button being saved to guess
    const guess = Number(guessNumber.value);

    if (Number.isInteger(secretNumber1) === true) {
        //easy level win. when the two values are equal change the go for it textContent
        if (guess === secretNumber1) {
            goForIt.textContent = 'WOOOW  u did it lets see u level up my dude';
            mysteryBox.textContent = secretNumber1;
            document.querySelector('.highScore').style.display = 'block';

            if (goes > highScore) {
                highScore = goes
                document.querySelector('.highScoreBox').textContent = goes;
            }
        } else if (guess > secretNumber1) {
            goes--;
            goForIt.textContent = `You have ${goes} more goes my brah, try lower`;
        } else if (guess < secretNumber1) {
            goes--;
            goForIt.textContent = `You have ${goes} more goes my brah, try higher`;
        }

    } else if (Number.isInteger(secretNumber2) === true) {

        if (guess === secretNumber2) {
            goForIt.textContent = 'RESPECT, We need to be cool to us, do higher'
            mysteryBox.textContent = secretNumber2
            document.querySelector('.highScore').style.display = 'block';
            if (goes > highScore) {
                highScore = goes
                document.querySelector('.highScoreBox').textContent = goes;
            }
        }
        //easly level lose point. the goes go down
        else if (guess > secretNumber2) {
            goes--;
            goForIt.textContent = `You have ${goes} more goes my brah, try lower`;

        } else if (guess < secretNumber2) {
            goes--;
            goForIt.textContent = `You have ${goes} more goes my brah, try higher`;
        }
    } else if (Number.isInteger(secretNumber3) === true) {
        if (guess === secretNumber3) {
            goForIt.textContent = 'OMG, U BE AMAZIN U SOOO COOOOOL'
            mysteryBox.textContent = secretNumber3
            document.querySelector('.highScore').style.display = 'block';
            if (goes > highScore) {
                highScore = goes
                document.querySelector('.highScoreBox').textContent = goes;
            }
        }
        //easly level lose point. the goes go down
        else if (guess > secretNumber3) {
            goes--;
            goForIt.textContent = `You have ${goes} more goes my brah, try lower`;
        } else if (guess < secretNumber3) {
            goes--;
            goForIt.textContent = `You have ${goes} more goes my brah, try higher`;
        }
    }
})

/* again button reseting the page */
document.querySelector('.againButton').addEventListener('click', function() {
    goForIt.textContent = 'Go For it'
    if (Number.isInteger(secretNumber1) === true) {
        secretNumber1 = (Math.trunc(Math.random() * 20) + 1);
    } else if (Number.isInteger(secretNumber2) === true) {
        secretNumber2 = (Math.trunc(Math.random() * 50) + 1);
    } else if (Number.isInteger(secretNumber3) === true) {
        secretNumber3 = (Math.trunc(Math.random() * 100) + 1);
    }
    refresh();
})