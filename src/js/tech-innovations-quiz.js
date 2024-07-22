document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    const quizQuestions = [
        {
            question: "What technology is used to create decentralized applications?",
            answers: ["Blockchain", "Artificial Intelligence", "Cloud Computing", "Internet of Things"],
            correct: "Blockchain"
        },
        {
            question: "Which technology is primarily used for machine learning?",
            answers: ["Blockchain", "Artificial Intelligence", "Cloud Computing", "Internet of Things"],
            correct: "Artificial Intelligence"
        },
        // Add more questions here
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
        const question = quizQuestions[currentQuestionIndex];
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
        if (answer === quizQuestions[currentQuestionIndex].correct) {
            alert('Correct!');
        } else {
            alert('Wrong answer. Try again!');
        }
        currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
        showQuestion();
    }

    showQuestion();
});
