const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia"; // Default word, will be replaced by API
let guessedLetters = [];
let remainingGuesses = 8;

// Helper function to add a temporary class for animation
const addTemporaryClass = (element, className, duration = 500) => {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, duration);
};


const getWord = async function () {
    try {
        const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
        if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
        }
        const words = await response.text();
        const wordArray = words.split("\n");
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        word = wordArray[randomIndex].trim();
        // console.log(`Workspaceed word: ${word}`); // Optional: for debugging
        placeholder(word);
    } catch (error) {
        console.error("Error fetching word:", error);
        message.innerText = "Failed to load word. Please try again later.";
        // Optionally disable input/button here if fetch fails critically
        guessLetterButton.disabled = true;
        letterInput.disabled = true;
    }
};

getWord();

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = ""; // Clear previous message
    message.classList.remove("lose"); // Remove lose class on new guess
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(goodGuess); // Use goodGuess which is the validated letter
    }
    letterInput.value = ""; // Clear input after guess
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input.toUpperCase(); // Return validated and capitalized input
    }
    return null; // Return null if validation fails
};

const makeGuess = function (guess) {
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters); // Keep console log for development if needed
        updateGuessesRemaining(guess); // This will also check if guess was correct/incorrect
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        // Optional: Add class based on whether the letter is in the word
        if (word.toUpperCase().includes(letter)) {
             li.classList.add("correct-guess-li"); // You can add a CSS class here
        } else {
             li.classList.add("incorrect-guess-li"); // And another one here
        }
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWordHTML = []; // Use HTML array to include spans
    const currentWordText = wordInProgress.innerText; // Get the current displayed word

    for (let i = 0; i < wordArray.length; i++) {
        const letter = wordArray[i];
        if (guessedLetters.includes(letter)) {
            // Check if this letter was previously a placeholder '●'
            if (currentWordText[i] === '●') {
                 // If it was, wrap it in a span with the highlight class
                 revealWordHTML.push(`<span class="newly-revealed">${letter}</span>`);
            } else {
                 // If it was already revealed, just add the letter
                 revealWordHTML.push(letter);
            }
        } else {
            revealWordHTML.push("●");
        }
    }

    wordInProgress.innerHTML = revealWordHTML.join(""); // Use innerHTML to render the spans
    checkIfWin();
};

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        message.innerText = `Sorry, the word has no ${guess}.`
        remainingGuesses -= 1;
        addTemporaryClass(letterInput, 'shake'); // Trigger shake animation
    } else {
        message.innerText = `Good guess! The word has the letter ${guess}.`;
        // Optionally trigger a different feedback animation for correct guess if desired
    }

    remainingGuessesSpan.innerText = `${remainingGuesses} guess${remainingGuesses === 1 ? '' : 'es'}`; // Correct pluralization

    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word.toUpperCase()}</span>.`;
        message.classList.add('lose'); // Add the lose class
        startOver();
    }
};

const checkIfWin = function () {
    // Compare revealed word text (without HTML spans) to the actual word
    const revealedWordText = wordInProgress.innerText.replace(/<span class="newly-revealed">(.)<\/span>/g, '$1'); // Remove spans for comparison

    if (word.toUpperCase() === revealedWordText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
        startOver();
    }
};

const startOver = function () {
    guessLetterButton.classList.add("hide");
    remainingGuessesElement.classList.add("hide");
    guessedLettersElement.classList.add("hide");
    playAgainButton.classList.remove("hide");
    letterInput.disabled = true; // Disable input after game ends
};

playAgainButton.addEventListener("click", function () {
    // Reset game state
    message.classList.remove("win", "lose"); // Remove win and lose classes
    message.innerText = "";
    guessedLetters = [];
    remainingGuesses = 8;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    guessedLettersElement.innerHTML = "";
    wordInProgress.innerHTML = ""; // Clear the word display

    // Fetch a new word and start
    getWord();

    // Show game elements and hide play again button
    guessLetterButton.classList.remove("hide");
    playAgainButton.classList.add("hide");
    remainingGuessesElement.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");
    letterInput.disabled = false; // Re-enable input
    letterInput.value = ""; // Clear input
    letterInput.focus(); // Set focus to the input
});

// Initial focus on the input when the page loads
letterInput.focus();