document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.industry-slider', {
    slidesPerView: 1.2,
    spaceBetween: 24,
    speed: 700,
    grabCursor: true,
    freeMode: {
        enabled: true,
        momentum: true,
        momentumRatio: 0.6,
    },
    breakpoints: {
        480: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.2 },
        900: { slidesPerView: 3.2 },
        1200: { slidesPerView: 4.2 },
    }
    });
});