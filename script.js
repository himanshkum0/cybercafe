/*=====================================
  Himanshu Digital Cyber Cafe
  Premium JavaScript v1.0
======================================*/

// Smooth Scroll for Navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId !== "#") {

            document.querySelector(targetId).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// Sticky Header Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


// Card Hover Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// Button Ripple Effect

const buttons = document.querySelectorAll(".primary-btn,.secondary-btn,.btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.clientX - this.offsetLeft - radius + "px";

        circle.style.top = e.clientY - this.offsetTop - radius + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


// Reveal Animation

const revealElements = document.querySelectorAll(".card,.why-grid div,.contact-banner");

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// Console Message 😄

console.log("%cWelcome to Himanshu Digital Cyber Cafe",
"color:#0F4CFF;font-size:20px;font-weight:bold;");

console.log("%cWebsite Developed with ❤️",
"color:#F4B400;font-size:16px;");
/*=========================================
       PREMIUM HERO BANNER SLIDER
=========================================*/

const heroSlider = new Swiper(".heroSlider", {

    loop: true,

    speed: 1000,

    spaceBetween: 20,

    grabCursor: true,

    centeredSlides: true,

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

        pauseOnMouseEnter: true

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    keyboard: {

        enabled: true,

    },

    effect: "creative",

    creativeEffect: {

        prev: {

            shadow: true,

            translate: ["-20%", 0, -1],

        },

        next: {

            translate: ["100%", 0, 0],

        },

    },

});