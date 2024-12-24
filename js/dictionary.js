document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const dictionaryList = document.getElementById('dictionary-list');
    const termDescription = document.getElementById('term-description');

    const terms = {
        'Спайдер-Мэн': 'Главный герой игры, супергерой с суперспособностями.',
        'Нью-Йорк': 'Основной город действия игры, где Спайдер-Мэн борется с преступностью.',
        'Доктор Оzymandias': 'Антагонист игры, враг Спайдера-Мэна.',
        'Гоблин-Ганг': 'Враги Спайдера-Мэна, организованная группа гоблинов.',
        'Мистер Негр': 'Враг Спайдера-Мэна, мистический существо.',
        'Электро': 'Враг Спайдера-Мэна, человек с электростатическими способностями.',
        'Веном': 'Враг Спайдера-Мэна, существо, которое может обладать различными формами.',
        'Джон Джеймс Осборн': 'Враг Спайдера-Мэна, бизнесмен и изобретатель.',
        'Мэдди Мэйсон': 'Дочь Спайдера-Мэна, подросток.',
        'Марта Кейси': 'Девушка-подруга Спайдера-Мэна, помощница.'
    };

    dictionaryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const term = e.target.getAttribute('data-term');
            termDescription.textContent = terms[term];
            document.querySelectorAll('#dictionary-list li').forEach(item => item.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const items = dictionaryList.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            const term = items[i].getAttribute('data-term').toLowerCase();
            if (term.includes(filter)) {
                items[i].style.display = '';
            } else {
                items[i].style.display = 'none';
            }
        }
    });
});