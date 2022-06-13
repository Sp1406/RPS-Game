let aiChoice = "";
let userChoice = "";

let ended = false;

let heading = $(".result");

$(".btn").on("click", function () {
  userChoice = this.value;
  console.log(userChoice);

  ai();
  checkAnswer(userChoice, aiChoice);
  console.log(aiChoice);
});

function ai() {
  let choices = ["rock", "paper", "scissors"];
  let randomNum = Math.random() * 3;
  randomNum = Math.floor(randomNum);

  aiChoice = choices[randomNum];
  return aiChoice;
}

function checkAnswer(user, ai) {
  if (user === ai) {
    heading.text("Draw! AI Chose: "+ai);
    ended = true;
  } else if (user !== ai) {
    if (user === "rock" && ai === "paper") {
      heading.text("AI Wins! AI Chose: "+ai);
      ended = true;
    } else if (user === "rock" && ai === "scissors") {
      heading.text("Player Wins! AI Chose: "+ai);
      ended = true;
    }

    if (user === "paper" && ai === "rock") {
      heading.text("Player Wins! AI Chose: "+ai);
      ended = true;
    } else if (user === "paper" && ai === "scissors") {
      heading.text("AI Wins! AI Chose: "+ai);
      ended = true;
    }

    if (user === "scissors" && ai === "rock") {
      heading.text("AI Wins! AI Chose: "+ai);
      ended = true;
    } else if (user === "scissors" && ai === "paper") {
      heading.text("Player Wins! AI Chose: "+ai);
      ended = true;
    }
  }

  if (ended === true) {
    $(".btn").addClass("hidden");
    $(".title").addClass("hidden")
    $(".result").removeClass("hidden")
    $(".playAgain").removeClass("hidden")
  }
}

$(".playAgain").on("click", function() {
    $(".btn").removeClass("hidden");
    $(".title").removeClass("hidden")
    $(".result").addClass("hidden")
    $(".playAgain").addClass("hidden")
})