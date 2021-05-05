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
      difficulty = prompt("Please choose the difficulty level. Type 0 for BEGINNER, 1 for INTERMEDIATE or 2 for EXPERT");
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
var bombChoice;

while (score.length < maxChoices && gameOver == false) {
      do {
            choice = prompt("Please insert a number between 1 and 100 (and do not repeat numbers, they won't count!!)")
      } while (choice < 1 || choice > 100 || inArray(choice, score) || isNaN(parseInt(choice)))
      if (inArray(choice, bombs)) {
                  gameOver = true;
                  bombChoice = choice;
      } else {
            score.push(choice);
      }
}

var result = document.getElementById("result");

if (gameOver == true && score.length != 0) {
      result.innerHTML = ("<i class='fas fa-bomb fa-5x'></i> You scored " + "<span style='color:red'>" + score.length + "</span>");
}

if (score.length == maxChoices) {
      result.innerHTML = ("Congrats, you scored " + maxChoices + " points! You won!");
} else if (score.length == 0) {
      result.innerHTML = "You're first choice was a bomb number: you must be lucky in love.."      
} else {
      document.getElementById("bomb-choice").innerHTML = "Bomb number: " + "<span style='color:yellow'>" + bombChoice + "</span>";
}