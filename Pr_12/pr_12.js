document.addEventListener('click', () => {
    const correctAnswers = {
        q1: 'Delhi',
        q2: '4',
        q3: 'h1',
        q4: '.html'
    };

    const form = document.getElementById('quiz-form');
    const submitButton = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    submitButton.addEventListener('click', () => {
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        for (let question in correctAnswers) {
            let selectedOption = form.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === correctAnswers[question]) {
                    score++;
                }
            } else {
                form.querySelectorAll(`input[name="${question}"]`).forEach(input => {
                    input.parentElement.classList.remove('correct', 'incorrect');
                });
            }
        }

        resultDiv.textContent = `You scored ${score} out of ${totalQuestions}.`;
    });
});
