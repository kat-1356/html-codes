 // Globals
const wordLetters = ['F', 'O', 'X'];
let guessedLetters = ['_', '_', '_'];
let guessedAll = [];
let reward = 0;
let hangmanState = 0;

function guessLetter(letter) {
    letter = letter.toUpperCase();
    if (guessedAll.includes(letter)) {
        console.log(`You've already guessed "${letter}". Try a different letter.`);
        return;
    }

    guessedAll.push(letter);

    let found = false;
    let matches = 0;

    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === letter) {
            if (guessedLetters[i] === '_') {
                guessedLetters[i] = letter;
                found = true;
                matches++;
            }
        }
    }

    if (found) {
        let rewardAmount = Math.floor(Math.random() * 100) + 1;
        reward += rewardAmount * matches;
        console.log(`Correct! You've earned $${rewardAmount * matches}.`);
    } else {
        reward -= 10;
        hangmanState++;
        console.log(`Wrong guess. You lost $10. Hangman state: ${hangmanState}/6`);
    }

    console.log(guessedLetters.join(' '));

    if (guessedLetters.join('') === wordLetters.join('')) {
        console.log(`🎉 You won! Final reward: $${reward}`);
    } else if (hangmanState >= 6) {
        console.log("☠️ Game Over. You've been hanged!");
        console.log(`
           -----
           |   |
           O   |
          /|\\  |
          / \\  |
               |
         ========
        `);
    }
}

// Try testing it
guessLetter('f');
guessLetter('x');
guessLetter('a');
guessLetter('o');
guessLetter('o'); // Repeated guess
