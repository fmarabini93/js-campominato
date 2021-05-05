function rndNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function inArray(element, list) {
      for (i = 0; i < list.length; i ++) {
            if (element == list[i]) {
                  return true;
            }
      }
      return false;
}

var bombs = [];
var bomb;
while (bombs.length < 16) {
      bomb = rndNumber(1, 100);
      if (!inArray(bomb, bombs)) {
            bombs.push(bomb);
      }
}
console.log(bombs);

var difficulty;
do {
      difficulty = prompt("Please choose the difficulty level. Type 0, 1 or 2");
} while (difficulty != 0 && difficulty != 1 && difficulty != 2)

var maxChoices;
if (difficulty == 0) {
      maxChoices = 84;
} else if (difficulty == 1) {
      maxChoices = 64;
} else {
      maxChoices = 34;
}

var score = [];
var choice;
var gameOver = false;

while (score.length < maxChoices && gameOver == false) {
      do {
            choice = prompt("Please insert a number between 1 and 100 (and do not repeat numbers, they won't count!!)")
      } while (choice < 1 || choice > 100 || inArray(choice, score) || isNaN(parseInt(choice)))
      if (inArray(choice, bombs)) {
                  gameOver = true;
      } else {
            score.push(choice);
      }
      console.log(choice, score.length);
}

var result = document.getElementById("result");
if (gameOver == true) {
      result.innerHTML = ("You stepped on a bomb! <i class='fas fa-bomb fa-3x'></i> You earned " + "<strong>" + score.length + "</strong>" + " points");
}

if (score.length == maxChoices) {
      result.innerHTML = ("Congrats, you're score is " + maxChoices + "! You won!");
}