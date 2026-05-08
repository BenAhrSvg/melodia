const navbar      = document.getElementById('navbar');
const navPill     = document.getElementById('nav-pill');
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const scrollThumb = document.querySelector('.scroll-thumb');

// Nav links + their target section IDs
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const navSectionIds = navLinks.map(a => a.getAttribute('href')?.replace('#', ''));

// ─── Hamburger / Mobile Menu ────────────────────────────────────────────────
function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    hamburger.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu();
});

mobileClose.addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMobileMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });

// ─── Scroll Logic ───────────────────────────────────────────────────────────
const heroHeight = () => document.getElementById('home')?.offsetHeight ?? window.innerHeight;

function onScroll() {
    const scrollY = window.scrollY;
    const inHero  = scrollY < heroHeight() * 0.6;

    // 1. Hero state — white links
    navbar.classList.toggle('nav--hero', inHero);

    // 2. Pill scrolled style
    navPill.classList.toggle('scrolled', scrollY > 50);
    navbar.classList.toggle('scrolled', scrollY > 50);

    // 3. Active nav link — welcher Section-Anker ist sichtbar?
    let activeId = navSectionIds[0];
    navSectionIds.forEach(id => {
        const el = id ? document.getElementById(id) : null;
        if (el && scrollY >= el.offsetTop - window.innerHeight * 0.45) {
            activeId = id;
        }
    });
    navLinks.forEach(a => {
        a.classList.toggle('is-active', a.getAttribute('href') === `#${activeId}`);
    });

    // 4. Custom scrollbar
    if (scrollThumb) {
        const scrollH  = document.documentElement.scrollHeight;
        const clientH  = document.documentElement.clientHeight;
        const thumbH   = Math.max((clientH / scrollH) * clientH, 60);
        const maxScroll = scrollH - clientH;
        const pct       = maxScroll > 0 ? scrollY / maxScroll : 0;
        scrollThumb.style.height = `${thumbH}px`;
        scrollThumb.style.top    = `${pct * (clientH - thumbH)}px`;
        scrollThumb.classList.add('active');
        clearTimeout(scrollThumb._t);
        scrollThumb._t = setTimeout(() => scrollThumb.classList.remove('active'), 600);
    }

    // 5. Reveal (opacity only)
    const threshold = window.innerHeight * 0.88;
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < threshold) el.style.opacity = '1';
    });
}

// Initial reveal state
document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease';
});

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll, { passive: true });
onScroll();

// ─── Smooth Scroll ──────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });
});

// ─── Menu Tabs ──────────────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.menu-grid').forEach(g => g.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
    });
});
