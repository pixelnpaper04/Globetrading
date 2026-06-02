/* ==========================================
GLOBE TRADING
SCRIPT.JS

- Mobile Navigation
- Sticky Header
- Smooth Scroll
- Active Navigation
- Scroll Reveal Animation
- Form Validation
========================================== */

/* ==========================
MOBILE MENU
========================== */

const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', () => {

        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');

    });
}

/* ==========================
CLOSE MENU ON LINK CLICK
========================== */

document.querySelectorAll('.navbar a').forEach(link => {

    link.addEventListener('click', () => {

        navbar.classList.remove('active');
        hamburger.classList.remove('active');

    });

});

/* ==========================
SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    });

});

/* ==========================
STICKY HEADER EFFECT
========================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
        header.style.background = "#ffffff";

    }else{

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";

    }

});

/* ==========================
ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================
SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
    '.product-card, .service-card, .why-card, .industry-card, .mission-card, .contact-card'
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add('show');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

/* ==========================
ANIMATION CLASSES
========================== */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(
        '.product-card, .service-card, .why-card, .industry-card, .mission-card'
    ).forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all .6s ease";

    });

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
'.product-card, .service-card, .why-card, .industry-card, .mission-card'
).forEach(el => observer.observe(el));

/* ==========================
CURRENT YEAR AUTO UPDATE
========================== */

const yearElement = document.getElementById('year');

if(yearElement){

    yearElement.textContent = new Date().getFullYear();

}

/* ==========================
WHATSAPP TRACKING PLACEHOLDER
========================== */

const whatsappButton = document.querySelector('.whatsapp-float');

if(whatsappButton){

    whatsappButton.addEventListener('click', () => {

        console.log('WhatsApp button clicked');

        /* 
        Google Analytics Example

        gtag('event', 'whatsapp_click', {
            event_category: 'Contact',
            event_label: 'WhatsApp'
        });
        */

    });

}

/* ==========================
PAGE LOADED
========================== */

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});

console.log("Globe Trading Website Loaded Successfully");
const catalogBtns = document.querySelectorAll(".catalog-btn");

catalogBtns.forEach(btn => {

btn.addEventListener("click", function(){

const content = this.nextElementSibling;

if(content.style.display === "block"){

content.style.display = "none";

}else{

document.querySelectorAll(".catalog-content").forEach(item=>{
item.style.display = "none";
});

content.style.display = "block";

}

});

});
window.addEventListener("load", () => {

const buttons = document.querySelectorAll(".catalog-btn");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

}, {
threshold: 0.2
});

buttons.forEach((button) => {
observer.observe(button);
});

});