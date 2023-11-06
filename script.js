const questions = [
    {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        options: ["'let' is block-scoped, while 'var' is function-scoped.", "'var' is block-scoped, while 'let' is function-scoped.", "There is no difference between them.", "'let' is used for declaring global variables, and 'var' is used for local variables."],
        answer: "a",
    },
    {
        question: "What are primitive data types in JavaScript?",
        options: ["String, Number, Object, Boolean", "Object, Function, Symbol, Array", "Number, String, Boolean, Symbol", "Array, Function, Object, Date"],
        answer: "c",
    },
    {
        question: "How do you define an array in JavaScript?",
        options: ["Using the 'arr' keyword.", "By enclosing values in curly braces.", "By using the 'new Array()' constructor.", "By enclosing values in square brackets."],
        answer: "d",
    },
    {
        question: "What is a non-primitive (reference) data type in JavaScript?",
        options: ["String", "Boolean", "Number", "Object"],
        answer: "d",
    },
    {
        question: "Which of the following is not a valid way to declare a function in JavaScript?",
        options: ["function myFunction() { }", "const myFunction = function() { }", "var myFunction = () => { }", "const myFunction: function() { }"],
        answer: "d",
    },
    {
        question: "How do you access the length of an array in JavaScript?",
        options: ["array.length()", "array.size", "array.length", "array.getSize()"],
        answer: "c",
    },
    {
        question: "What is the 'typeof' operator used for in JavaScript?",
        options: ["To create a new variable.", "To check the type of a variable or expression.", "To define a function.", "To perform mathematical operations."],
        answer: "b",
    },
    {
        question: "Which JavaScript operator is used for equality without type coercion?",
        options: ["==", "===", "!=", "!=="],
        answer: "===",
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        options: ["Not a Name", "Not a Number", "No Assigned Name", "No Available Numbers"],
        answer: "b",
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"],
        answer: "a",
    },
];

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const options = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");

let currentQuestionIndex = 0;

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
        options.innerHTML = "";

        for (let i = 0; i < currentQuestion.options.length; i++) {
            const option = currentQuestion.options[i];
            const li = document.createElement("li");
            li.innerHTML = `<label><input type="radio" name="answer" value="${String.fromCharCode(97 + i)}"> ${String.fromCharCode(97 + i)}) ${option}</label>`;
            options.appendChild(li);
        }
    } else {
        questionContainer.style.display = "none";
        submitButton.style.display = "none";
        result.textContent = "All questions answered!";
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].answer) {
            result.textContent = "Correct!";
        } else {
            result.textContent = "Incorrect. The correct answer is " + questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer.charCodeAt(0) - 97];
        }

        currentQuestionIndex++;
        showQuestion();
    }
}

showQuestion();

submitButton.addEventListener("click", checkAnswer);
