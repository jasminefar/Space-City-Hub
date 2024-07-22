document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    const triviaQuestions = [
        {
            question: "What is the closest planet to the Sun?",
            answers: ["Mercury", "Venus", "Earth", "Mars"],
            correct: "Mercury"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Jupiter", "Saturn", "Mars", "Venus"],
            correct: "Mars"
        },
        // Add more questions here
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        const question = triviaQuestions[currentQuestionIndex];
        questionElement.textContent = question.question;
        answersElement.innerHTML = '';
        question.answers.forEach(answer => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(answer));
            li.appendChild(button);
            answersElement.appendChild(li);
        });
    }

    function checkAnswer(answer) {
        if (answer === triviaQuestions[currentQuestionIndex].correct) {
            alert('Correct!');
        } else {
            alert('Wrong answer. Try again!');
        }
        currentQuestionIndex = (currentQuestionIndex + 1) % triviaQuestions.length;
        showQuestion();
    }

    showQuestion();
});
