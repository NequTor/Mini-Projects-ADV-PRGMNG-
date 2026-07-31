let num1 = 0;
let num2 = 0;
let answer = 0;
let score = 0;

const num1Text = document.getElementById("num1");
const num2Text = document.getElementById("num2");
const operatorText = document.getElementById("displayOperator");

const operatorSelect = document.getElementById("operator");

const answerInput = document.getElementById("answer");

const message = document.getElementById("message");

const scoreText = document.getElementById("score");

document.getElementById("generateBtn").onclick = generateQuestion;

document.getElementById("nextBtn").onclick = generateQuestion;

document.getElementById("checkBtn").onclick = checkAnswer;

generateQuestion();

function randomNumber() {
    return Math.floor(Math.random() * 11);
}

function generateQuestion() {

    answerInput.value = "";
    message.innerHTML = "";

    let operator = operatorSelect.value;

    if (operator == "random") {

        const ops = ["+", "-", "*", "/"];

        operator = ops[Math.floor(Math.random() * 4)];
    }

    switch (operator) {

        case "+":
            num1 = randomNumber();
            num2 = randomNumber();
            answer = num1 + num2;
            break;

        case "-":
            num1 = randomNumber();
            num2 = randomNumber();

            if (num2 > num1) {
                [num1, num2] = [num2, num1];
            }

            answer = num1 - num2;
            break;

        case "*":
            num1 = randomNumber();
            num2 = randomNumber();
            answer = num1 * num2;
            break;

        case "/":

            num2 = Math.floor(Math.random() * 10) + 1;

            answer = Math.floor(Math.random() * 11);

            num1 = num2 * answer;

            break;

    }

    num1Text.innerHTML = num1;
    num2Text.innerHTML = num2;
    operatorText.innerHTML = operator;
}

function checkAnswer() {

    if (answerInput.value === "") {

        message.innerHTML = "Enter your answer!";
        message.className = "wrong";
        return;

    }

    if (parseInt(answerInput.value) == answer) {

        message.innerHTML = "🎉 Correct!";
        message.className = "correct";

        score++;

        scoreText.innerHTML = score;

    } else {

        message.innerHTML = "❌ Wrong! Correct Answer: " + answer;
        message.className = "wrong";

    }

}

answerInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        checkAnswer();

    }

});