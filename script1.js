

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
  //home page contact 
  document.getElementById("whatsappForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;

        // Format WhatsApp message
        let whatsappMessage = `Hello, I would like a free consultation.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

        // WhatsApp URL
        let whatsappURL = `https://wa.me/99646350?text=${whatsappMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");
    });

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('#contact form');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;

    if (!name || !email || !phone || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

// Dynamic Year in Footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Taxify. All rights reserved.`;
