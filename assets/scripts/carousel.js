const carousel = document.querySelector('.carousel');
let currentIndex = 1; 
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length / 2; 

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const offset = -(currentIndex * 210); 
    carousel.style.transform = `translateX(${offset}px)`;
}