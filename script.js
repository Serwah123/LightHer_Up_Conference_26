// COUNTDOWN TIMER
console.log('script.js loaded');
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

// Form submission handler
const form = document.querySelector('.reg-form');
const submitBtn = document.querySelector('.submit-btn');
console.log('Form element:', form);
console.log('Submit button:', submitBtn);
if (submitBtn) {
    submitBtn.addEventListener('click', function(event) {
        console.log('Submit button clicked');
        if (window.location.protocol === 'file:') {
            event.preventDefault(); // Prevent default form submission for file:// protocol
            alert('For local testing, please run a local server. Open command prompt, navigate to the project folder, run "python -m http.server 8000", then open http://localhost:8000/index.html in browser.');
        } else {
            // For localhost or production, let the form submit normally
            console.log('Allowing form submission');
        }
    });
} else {
    console.log('Submit button not found');
}

// Conditional fields for Occupation and Education Level
document.getElementById('occupation').addEventListener('change', function() {
    const specifyOccupation = document.getElementById('specify-occupation');
    const input = specifyOccupation.querySelector('input');
    if (this.value === 'Other') {
        specifyOccupation.style.display = 'block';
        input.setAttribute('required', 'required');
    } else {
        specifyOccupation.style.display = 'none';
        input.removeAttribute('required');
    }
});

document.getElementById('education-level').addEventListener('change', function() {
    const specifyEducation = document.getElementById('specify-education');
    const input = specifyEducation.querySelector('input');
    if (this.value === 'Other') {
        specifyEducation.style.display = 'block';
        input.setAttribute('required', 'required');
    } else {
        specifyEducation.style.display = 'none';
        input.removeAttribute('required');
    }
});
