let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.learn-slide');
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }
    const offset = -index * 100;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

showSlide(index);
