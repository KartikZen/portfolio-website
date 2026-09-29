// ===== Sticky Navbar =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '2rem';
        navLinks.style.right = '2rem';
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
    } else {
        navLinks.style.display = 'none';
    }
});

// ===== Scroll Reveal Animation =====
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(revealSection, { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });
    
    reveals.forEach(sec => observer.observe(sec));
});

// ===== Active Navbar Link on Scroll =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if we are currently looking at this section
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href") === `#${current}`) {
            li.classList.add("active");
        }
    });
});

// ===== Typing Effect =====
const typingSpan = document.querySelector('.typing-accent');
const words = ['Developer', 'Designer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if(!typingSpan) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 150;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if(typingSpan) {
        setTimeout(typeEffect, 1000);
    }
});
