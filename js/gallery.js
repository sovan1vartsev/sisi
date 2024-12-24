document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slideInfo = document.getElementById('slide-info');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const images = [
        'images/spiderman1.jpg',
        'images/spiderman2.jpg',
        'images/spiderman3.jpg',
        'images/spiderman4.jpg',
        'images/spiderman5.jpg'
    ];

    let currentIndex = 0;

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        slideInfo.textContent = `${currentIndex + 1} слайд из ${images.length}`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    updateSlider();
});