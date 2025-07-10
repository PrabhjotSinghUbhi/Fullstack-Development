let totalGuesses = 10
document.getElementById('g-remain').innerHTML = totalGuesses;
const form = document.querySelector('form')
const answer = Math.round((Math.random() * 100) + 1)
console.log(answer)
let previous_guess = [];
let gameContinue = true;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const guess = parseInt(document.querySelector('#id-input').value)
    console.log(guess)

    previous_guess.push(guess);
    document.querySelector('#inin').innerHTML = previous_guess;


    if (guess === answer) {
        // document.getElementsByClassName('.result').style.display = 'inherit'
        document.querySelector('.result').innerHTML = '😉🥇🏆You Won'
    }

    else {
        totalGuesses -= 1;
    }
    document.getElementById('g-remain').innerHTML = totalGuesses;
    if (totalGuesses === 0) {
        // document.querySelector('.result').display = 'inherit'
        gameContinue == false;
        document.querySelector('.result').innerHTML = '😵😵You Lost'
    }
})
