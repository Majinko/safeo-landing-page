// Rok v pätičke
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==============================
// Meranie konverzií (GTM dataLayer)
// ==============================
// Udalosti: cta_click, sign_up_click, login_click, phone_click, email_click,
// how_step_view, video_play, video_complete, form_start, generate_lead, form_error.
// V GTM stačí vytvoriť trigger typu „Custom Event“ s názvom udalosti.
window.dataLayer = window.dataLayer || [];
function track(event, params) {
    window.dataLayer.push(Object.assign({ event: event }, params || {}));
}

document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (!el) return;
    track(el.dataset.track, {
        cta_location: el.dataset.ctaLocation || '',
        cta_text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
        plan: el.dataset.plan || undefined,
        link_url: el.getAttribute('href') || undefined
    });
});

// Výber balíka v cenníku → doplní sa do správy vo formulári
const formMessage = document.getElementById('formMessage');
document.querySelectorAll('[data-plan]').forEach(a => {
    a.addEventListener('click', () => {
        if (formMessage) formMessage.value = 'Záujem o Safeo ID – balík ' + a.dataset.plan;
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const el = id && document.getElementById(id);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', '#' + id);
        }
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
    hamburger.setAttribute('aria-label', 'Zavrieť menu');
    document.body.classList.add('body-locked');
    mobileMenu?.querySelector('a')?.focus();
}
function closeMenu() {
    mobileWrap.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Otvoriť menu');
    document.body.classList.remove('body-locked');
    setTimeout(() => { mobileWrap.hidden = true; }, 280);
}
function isOpen() { return mobileWrap && !mobileWrap.hidden; }

hamburger?.addEventListener('click', () => isOpen() ? closeMenu() : openMenu());
backdrop?.addEventListener('click', closeMenu);
window.addEventListener('keydown', e => {
    if (!isOpen()) return;
    if (e.key === 'Escape') { closeMenu(); hamburger.focus(); return; }
    // fokus zostáva v otvorenom menu (menu + tlačidlo zavrieť)
    if (e.key === 'Tab') {
        const items = [hamburger, ...mobileMenu.querySelectorAll('a')];
        const i = items.indexOf(document.activeElement);
        const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i === items.length - 1 ? 0 : i + 1);
        e.preventDefault();
        items[next].focus();
    }
});
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Zvýraznenie aktuálnej sekcie v navigácii
(function () {
    const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    if (!links.length) return;
    let ticking = false;
    function update() {
        ticking = false;
        const line = window.innerHeight * 0.4;
        let current = null;
        sections.forEach(sec => { if (sec.getBoundingClientRect().top <= line) current = sec.id; });
        links.forEach(a => {
            if (a.getAttribute('href') === '#' + current) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
        });
    }
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
})();

// ==============================
// „Ako to funguje“ – prepínanie krokov (ARIA tabs)
// ==============================
(function () {
    const tabs = Array.from(document.querySelectorAll('.how .step[role="tab"]'));
    if (!tabs.length) return;

    function select(tab, focus) {
        tabs.forEach(t => {
            const on = t === tab;
            t.setAttribute('aria-selected', on ? 'true' : 'false');
            t.tabIndex = on ? 0 : -1;
            const panel = document.getElementById(t.getAttribute('aria-controls'));
            if (panel) panel.hidden = !on;
        });
        if (focus) tab.focus();
        tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
        track('how_step_view', { step: tab.dataset.step });
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => select(tab));
        tab.addEventListener('keydown', e => {
            let next = null;
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
            if (e.key === 'Home') next = tabs[0];
            if (e.key === 'End') next = tabs[tabs.length - 1];
            if (next) { e.preventDefault(); select(next, true); }
        });
    });
})();

// ==============================
// Video – meranie prehratia
// ==============================
(function () {
    const video = document.querySelector('.demo-video-card video');
    if (!video) return;
    let started = false;
    video.addEventListener('play', () => {
        if (started) return;
        started = true;
        track('video_play', { video_title: 'Safeo ID promo' });
    });
    video.addEventListener('ended', () => track('video_complete', { video_title: 'Safeo ID promo' }));
})();

// ==============================
// Sticky mobilná CTA – zobrazí sa po odscrollovaní z hero, skryje pri kontakte
// ==============================
(function () {
    const bar = document.getElementById('mobileCta');
    const hero = document.getElementById('home');
    const contact = document.getElementById('contact');
    if (!bar || !hero || !('IntersectionObserver' in window)) return;
    document.body.classList.add('has-mobile-cta');

    let heroVisible = true;
    let contactVisible = false;
    const update = () => {
        const show = !heroVisible && !contactVisible;
        bar.classList.toggle('is-visible', show);
        bar.setAttribute('aria-hidden', show ? 'false' : 'true');
        bar.querySelectorAll('a').forEach(a => { a.tabIndex = show ? 0 : -1; });
    };
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; update(); }).observe(hero);
    if (contact) new IntersectionObserver(([e]) => { contactVisible = e.isIntersecting; update(); }).observe(contact);
    update();
})();


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

        // form_start – prvá interakcia s formulárom
        f.addEventListener('focusin', () => track('form_start', { form_id: f.id }), { once: true });
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
                        showSent(thisForm, 'Ďakujeme! Ozveme sa s termínom ukážky.');
                        track('generate_lead', { form_id: thisForm.id, lead_type: 'demo_request' });
                        thisForm.reset();
                    } else {
                        setError(thisForm, text || 'Odoslanie zlyhalo.');
                        track('form_error', { form_id: thisForm.id, error: 'response' });
                    }
                })
                .catch((err) => {
                    setLoading(thisForm, false);
                    setError(thisForm, 'Odoslanie sa nepodarilo. Skúste to prosím znova alebo nám zavolajte.');
                    track('form_error', { form_id: thisForm.id, error: String(err).slice(0, 80) });
                });
        });
    });

    // --- helpers (odskryjú aj wrapper .status) ---
    function setLoading(form, on) {
        toggleMsg(form, '.loading', on, 'Odosielam…');
        toggleMsg(form, '.error-message', false);
        toggleMsg(form, '.sent-message', false);
        const btn = form.querySelector('[type="submit"]');
        if (btn) btn.disabled = on;
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

        if (typeof text === 'string') el.textContent = text;
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
