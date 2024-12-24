document.addEventListener('DOMContentLoaded', () => {
    const testForm = document.getElementById('test-form');
    const testResult = document.getElementById('test-result');

    testForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const answers = {
            q1: 'Питер Паркер',
            q2: 'Нью-Йорк',
            q3: 'Ричард Паркер',
            q4: 'Электро',
            q5: 'Нед',
            q6: 'Зеленый гоблин'
        };

        let score = 0;
        let resultHtml = '';


        ['q1', 'q2'].forEach(key => {
            const userAnswer = document.getElementById(key).value.trim();
            if (userAnswer.toLowerCase() === answers[key].toLowerCase()) {
                resultHtml += `<p class="correct">Вопрос ${key.charAt(1)}: Ответ правильный!</p>`;
                score++;
            } else {
                resultHtml += `<p class="incorrect">Вопрос ${key.charAt(1)}: Ответ неправильный, правильный ответ: ${answers[key]}</p>`;
            }
        });


        ['q3', 'q4', 'q5', 'q6'].forEach(key => {
            const userAnswer = document.querySelector(`input[name="${key}"]:checked`);
            if (userAnswer && userAnswer.value === answers[key]) {
                resultHtml += `<p class="correct">Вопрос ${key.charAt(1)}: Ответ правильный!</p>`;
                score++;
            } else {
                resultHtml += `<p class="incorrect">Вопрос ${key.charAt(1)}: Ответ неправильный, правильный ответ: ${answers[key]}</p>`;
            }
        });

        resultHtml += `<p>Вы набрали ${score} из 6 баллов.</p>`;
        testResult.innerHTML = resultHtml;

        const retryButton = document.createElement('button');
        retryButton.textContent = 'Попробовать снова';
        retryButton.addEventListener('click', () => {
            testForm.reset();
            testResult.innerHTML = '';
            testResult.removeChild(retryButton);
        });

        testResult.appendChild(retryButton);

        localStorage.setItem('testResult', score);
    });
});

