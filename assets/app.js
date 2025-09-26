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


// ==============================
// Kontakt – AJAX odoslanie (bez reCAPTCHA)
// ==============================
(function () {
    "use strict";

    const forms = document.querySelectorAll('.php-email-form');

    // pri načítaní schovaj všetky správy (pre prípad SSR)
    forms.forEach(f => {
        f.querySelectorAll('.status .loading, .status .error-message, .status .sent-message')
            .forEach(el => { el.classList.remove('d-block', 'show'); el.setAttribute('hidden', ''); });
    });

    forms.forEach((form) => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const thisForm = this;
            const action = thisForm.getAttribute('action');

            if (!action) return setError(thisForm, 'Formulár nemá nastavený action atribút.');

            // jednoduchý check
            const name = thisForm.querySelector('[name="name"]')?.value.trim();
            const email = thisForm.querySelector('[name="email"]')?.value.trim();
            if (!name || !email) return setError(thisForm, 'Vyplňte prosím meno a e-mail.');

            setLoading(thisForm, true);

            const formData = new FormData(thisForm);

            fetch(action, {
                method: 'POST',
                body: formData,
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            })
                .then((res) => res.ok ? res.text() : Promise.reject(`${res.status} ${res.statusText}`))
                .then((text) => {
                    setLoading(thisForm, false);
                    if (typeof text === 'string' && text.trim() === 'OK') {
                        showSent(thisForm, 'Ďakujeme! Ozveme sa s termínom prezentácie.');
                        thisForm.reset();
                    } else {
                        setError(thisForm, text || 'Odoslanie zlyhalo.');
                    }
                })
                .catch((err) => {
                    setLoading(thisForm, false);
                    setError(thisForm, err?.toString() || 'Chyba pri odosielaní.');
                });
        });
    });

    // --- helpers (odskryjú aj wrapper .status) ---
    function setLoading(form, on) {
        toggleMsg(form, '.loading', on, 'Odosielam…');
        toggleMsg(form, '.error-message', false);
        toggleMsg(form, '.sent-message', false);
    }
    function setError(form, msg) {
        toggleMsg(form, '.error-message', true, msg || 'Chyba.');
    }
    function showSent(form, msg) {
        toggleMsg(form, '.sent-message', true, msg || 'Odoslané.');
    }
    function toggleMsg(form, selector, show, text) {
        const el = form.querySelector(selector);
        if (!el) return;

        const wrap = el.closest('.status');
        if (wrap && show) wrap.removeAttribute('hidden');

        if (typeof text === 'string') el.innerHTML = text;
        if (show) {
            el.classList.add('d-block');
            el.removeAttribute('hidden');
        } else {
            el.classList.remove('d-block');
            el.setAttribute('hidden', '');
            // ak nič nezobrazuje, wrapper skryť
            if (wrap) {
                const anyVisible = ['.loading', '.error-message', '.sent-message']
                    .some(sel => {
                        const n = wrap.querySelector(sel);
                        return n && (n.classList.contains('d-block') || !n.hasAttribute('hidden'));
                    });
                if (!anyVisible) wrap.setAttribute('hidden', '');
            }
        }
    }
})();
