function play() {
  // step: hide the home screen. to hide the screen add the class hidden to the home section
  //   const homeSection = document.getElementById("home-screen");
  //   homeSection.classList.add("hidden");
  //   console.log(homeSection);
  // show the playground
  //   const playgroundSection = document.getElementById("play-ground");
  //   playgroundSection.classList.remove("hidden");
  //   console.log(playgroundSection.classList);
}
// function hideElementById(elementId) {
//   const element = document.getElementById(elementId);
// }
function continueGame() {
  // step-1: generate a random  alphabet
  const alphabet = getARandomAlphabet();
  // console.log("your random alphabet", alphabet);

  // set set randomly generated alphabet to the screen  (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  // hide everything show only the playground
  hideElementById("home-screen");
  showElementById("play-ground");
  hideElementById("final-score");
  // rest score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function handelKeyboardButtonPress(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);
  // key plyer is expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlpha = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlpha.toLowerCase();

  // check right or wrong key pressed
  if (playerPressed === expectedAlphabet) {
    console.log("you got a point");
    const currentScore = getElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);

    // ---------------------------------------------?----------------
    // update score:
    // 1. get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // 2. increase the score by 1
    const newScore = currentScore + 1;

    // 3. show the update score
    // currentScoreElement.innerText = newScore;
    // console.log("you hava pressed correctly", expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("not current");

    const currentLife = getElementValueById("current-life");
    const updateLife = currentLife - 1;
    setTextElementValueById("current-life", updateLife);
    if (updateLife === 0) {
      gameOver();
    }

    // ---------------------------------------------------------
    // step-1 get the current life number
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // step-2 incorce the score by 5
    // const newLife = currentLife - 1;

    // step-3 show the update score
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handelKeyboardButtonPress);
// game over

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update final score
  const lastScore = getElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueById("game-score", lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}
