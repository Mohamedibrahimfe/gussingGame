const clickButton = document.getElementById('submit');
const input = document.getElementById('input');
const output = document.querySelector('.output');
const resetButton = document.createElement('button');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 100;

resetButton.innerHTML = "Restart Game";
resetButton.style.display = "none";
resetButton.style.marginTop = "20px";
document.querySelector('.container').appendChild(resetButton);

function checkGuessing() {
    const userGuess = parseInt(input.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        output.innerHTML = "Please enter a valid number between 1 and 100.";
        output.style.backgroundColor = '#FF6F61';
        input.value = '';
        input.focus();
        return;
    }

    if (userGuess === randomNumber) {
        score = Math.max(0, score - (attempts - 1) * 10);  // Deduct 10 points for each wrong attempt
        output.innerHTML = `Congratulations! You've guessed the correct number in ${attempts} attempts! Your score is ${score}.`;
        output.style.backgroundColor = '#4CAF50';
        input.disabled = true;
        clickButton.disabled = true;
        clickButton.setAttribute('aria-disabled', 'true');
        clickButton.innerHTML = 'Game Over';
        resetButton.style.display = "block";
    } else if (userGuess < randomNumber) {
        output.innerHTML = "Too low! Try again.";
        output.style.backgroundColor = '#FFA07A';
    } else if (userGuess > randomNumber) {
        output.innerHTML = "Too high! Try again.";
        output.style.backgroundColor = '#FFA07A';
    }

    input.value = '';
    input.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    score = 100;  // Reset score
    output.innerHTML = "New game started! Enter a number between 1 and 100.";
    output.style.backgroundColor = '#FFFFFF';
    input.disabled = false;
    input.value = '';
    input.focus();
    clickButton.disabled = false;
    clickButton.setAttribute('aria-disabled', 'false');
    clickButton.innerHTML = 'Submit';
    resetButton.style.display = "none";
}

clickButton.addEventListener('click', checkGuessing);
resetButton.addEventListener('click', resetGame);
