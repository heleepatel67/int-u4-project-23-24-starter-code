// JavaScript goes here.
let answers = {};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const question = this.getAttribute('data-question');
        const choice = this.getAttribute('data-choice');
        answers[question] = choice;

        if (question === '1') {
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
        } else if (question === '2') {
            document.getElementById('question2').style.display = 'none';
            displayResult();
        }
    });
});

document.getElementById('restart').addEventListener('click', function() {
    answers = {};
    document.querySelector('.result-container').style.display = 'none';
    document.getElementById('question1').style.display = 'block';
});

function displayResult() {
    const resultText = getResultText(answers['1'], answers['2']);
    document.getElementById('result').textContent = resultText;
    document.querySelector('.result-container').style.display = 'block';
}

function getResultText(answer1, answer2) {
    if (answer1 === 'A' && answer2 === 'A') return "Tomorrow!";
    if (answer1 === 'A' && answer2 === 'B') return "Sometime this year!";
    if (answer1 === 'B' && answer2 === 'A') return "Sometime this month!";
    if (answer1 === 'B' && answer2 === 'B') return "NEVER!";
}