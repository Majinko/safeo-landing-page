// Rok v pätičke
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileWrap = document.getElementById('mobileWrap');
const mobileMenu = document.getElementById('mobileMenu');
const backdrop = document.getElementById('backdrop');

function openMenu() {
    mobileWrap.hidden = false;
    requestAnimationFrame(() => {
        mobileWrap.classList.add('is-open');
        hamburger.classList.add('is-open');
    });
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('body-locked');
}
function closeMenu() {
    mobileWrap.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('body-locked');
    setTimeout(() => { mobileWrap.hidden = true; }, 280);
}
function isOpen() { return mobileWrap && !mobileWrap.hidden; }

hamburger?.addEventListener('click', () => isOpen() ? closeMenu() : openMenu());
backdrop?.addEventListener('click', closeMenu);
window.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) closeMenu(); });
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));