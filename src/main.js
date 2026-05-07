import './style.css'

// 1. Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// 2. Navbar State (Glass Pill)
const navPill = document.getElementById('nav-pill');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navPill.classList.add('scrolled');
    } else {
        navPill.classList.remove('scrolled');
    }
});

// 3. Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('active-reveal');
            // Adding specific animation state if needed
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// CSS for reveal initial state (if not already in style.css)
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial call

// 4. Custom Dynamic Scrollbar (Green & Interactive)
const scrollThumb = document.querySelector(".scroll-thumb");
let scrollTimeout;

const updateScrollbar = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    
    // Calculate size and position
    const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 60);
    scrollThumb.style.height = `${thumbHeight}px`;
    
    const maxScroll = scrollHeight - clientHeight;
    const scrollPercent = scrollTop / maxScroll;
    const thumbTop = scrollPercent * (clientHeight - thumbHeight);
    scrollThumb.style.top = `${thumbTop}px`;
    
    // Scale on scroll
    scrollThumb.classList.add("active");
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        scrollThumb.classList.remove("active");
    }, 500);
};

window.addEventListener("scroll", updateScrollbar);
window.addEventListener("resize", updateScrollbar);
updateScrollbar();

// 5. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 6. Menu Tab Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const menuGrids = document.querySelectorAll('.menu-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and grids
        tabBtns.forEach(b => b.classList.remove('active'));
        menuGrids.forEach(g => g.classList.remove('active'));
        
        // Add active class to current
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
        
        // Re-trigger scroll reveal for the new grid content
        revealOnScroll();
    });
});

console.log("Melodia Gelateria - High-End Redesign Initialized");
