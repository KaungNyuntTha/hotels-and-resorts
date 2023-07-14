// menu btn
let navBar = document.querySelector('.header .nav-bar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
}
window.onscroll = () => {
    navBar.classList.remove('active');
}
// menu btn

// home slider
var swiper = new Swiper(".home-slider", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// home slider

// gallery slider
var swiper = new Swiper(".gallery-swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
// gallery slider

// contact toggle
document.querySelectorAll('.contact .row .faq .box h3').forEach(faqbox => {
    faqbox.onclick = () => {
        faqbox.parentElement.classList.toggle('active');
    }
});
// contact toggle

// review slider
var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    spacebetween: 40,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 2,
        }
    }
});
// review slider


