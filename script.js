// COUNTDOWN TIMER
const conferenceDate = new Date("January 3, 2026 08:00:00").getTime();

setInterval(function() {
    let now = new Date().getTime();
    let distance = conferenceDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// SLIDESHOW FUNCTIONALITY
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Initialize first slide
showSlide(currentSlide);

// Form submission is handled by formsubmit.co with redirect to success page
