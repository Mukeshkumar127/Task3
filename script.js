const quizData = [
  {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Creative Style Syntax", "Colorful Style System"],
    correct: 0
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    answers: ["var", "def", "int"],
    correct: 0
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    answers: ["<script>", "<style>", "<link>"],
    correct: 2
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    answers: ["getElementById()", "querySelectorAll()", "getElementsByClassName()"],
    correct: 0
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    answers: ["Boolean", "Float", "Undefined"],
    correct: 1
  },
  {
    question: "How do you write a comment in JavaScript?",
    answers: ["<!-- comment -->", "// comment", "** comment **"],
    correct: 1
  },
  {
    question: "Which CSS property controls the text size?",
    answers: ["font-size", "text-style", "text-size"],
    correct: 0
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    answers: ["object", "null", "undefined"],
    correct: 0
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    answers: ["#", "//", "/* */"],
    correct: 1
  },
  {
    question: "Which method can be used to convert a string to an integer?",
    answers: ["parseInt()", "Number()", "Both"],
    correct: 2
  }
];


let currentQuestion = 0;

function loadQuestion() {
  const quiz = quizData[currentQuestion];
  document.getElementById("question").textContent = quiz.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  quiz.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      if (index === quiz.correct) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
}

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = data.setup + " - " + data.punchline;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Failed to fetch joke.";
    });
}

loadQuestion();
