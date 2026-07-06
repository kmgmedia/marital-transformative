/* ============================================================
   MAIN.JS — Interactive behaviours
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Form submission endpoint ─────────────────────────────
     Sign up free at https://formspree.io, create a form, and
     replace YOUR_FORM_ID below with the ID it gives you
     (looks like "myzabcde"). Both the contact and booking
     forms post here; the hidden "_subject" field in each form
     tells you which one it was.                               */
  const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  async function submitForm(form) {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    });
    if (!response.ok) throw new Error('Form submission failed');
  }

  /* ── Navbar scroll shadow ────────────────────────────────── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile drawer ───────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburgerBtn');
  const drawer     = document.getElementById('mobileDrawer');
  const panel      = document.getElementById('drawerPanel');
  const scrim      = document.getElementById('drawerScrim');

  function openDrawer() {
    drawer?.classList.add('open');
    panel?.classList.add('open');
    scrim?.classList.add('visible');
    hamburger?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer?.classList.remove('open');
    panel?.classList.remove('open');
    scrim?.classList.remove('visible');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    drawer?.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  scrim?.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* ── FAQ accordion ───────────────────────────────────────── */
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-btn')?.setAttribute('aria-expanded', 'false');
      });
      // open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Scroll animations (IntersectionObserver) ────────────── */
  const animItems = document.querySelectorAll('[data-animate]');
  if (animItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    animItems.forEach(el => observer.observe(el));
  }

  /* ── Stat counters ───────────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el    = entry.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 1200;
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  /* ── Blog category filter ────────────────────────────────── */
  const filterBtns = document.querySelectorAll('[data-filter]');
  const blogCards  = document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      blogCards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ── Contact form validation ─────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      let valid = true;
      const fields = ['contactName','contactEmail','contactSubject','contactMessage'];
      fields.forEach(id => {
        const el = document.getElementById(id);
        const err = el?.nextElementSibling;
        if (!el) return;
        if (!el.value.trim()) {
          el.classList.add('error');
          if (err) err.classList.add('visible');
          valid = false;
        } else if (id === 'contactEmail' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
          el.classList.add('error');
          if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('visible'); }
          valid = false;
        } else {
          el.classList.remove('error');
          if (err) err.classList.remove('visible');
        }
      });
      if (!valid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const generalErr = document.getElementById('contactFormError');
      generalErr?.classList.remove('visible');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      try {
        await submitForm(contactForm);
        contactForm.style.display = 'none';
        document.getElementById('contactSuccess')?.classList.add('visible');
      } catch (err) {
        generalErr?.classList.add('visible');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
      }
    });
    contactForm.querySelectorAll('.form-input, .form-textarea').forEach(el => {
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const err = el.nextElementSibling;
        if (err?.classList.contains('form-error')) err.classList.remove('visible');
      });
    });
  }

  /* ── Booking form validation ─────────────────────────────── */
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    // Pre-fill service from URL param
    const params = new URLSearchParams(window.location.search);
    const svc = params.get('service');
    if (svc) {
      const sel = document.getElementById('serviceSelect');
      if (sel) {
        Array.from(sel.options).forEach(opt => {
          if (opt.value === svc || opt.text === svc) sel.value = opt.value;
        });
      }
    }
    bookingForm.addEventListener('submit', async e => {
      e.preventDefault();
      let valid = true;
      const required = ['bookFirstName','bookLastName','bookEmail','bookPhone','serviceSelect'];
      required.forEach(id => {
        const el = document.getElementById(id);
        const err = document.getElementById(id + 'Error');
        if (!el) return;
        if (!el.value.trim()) {
          el.classList.add('error');
          if (err) err.classList.add('visible');
          valid = false;
        } else {
          el.classList.remove('error');
          if (err) err.classList.remove('visible');
        }
      });
      const consent = document.getElementById('consentCheck');
      const consentErr = document.getElementById('consentError');
      if (consent && !consent.checked) {
        if (consentErr) consentErr.classList.add('visible');
        valid = false;
      } else if (consentErr) consentErr.classList.remove('visible');

      if (!valid) return;

      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const generalErr = document.getElementById('bookingFormError');
      generalErr?.classList.remove('visible');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      try {
        await submitForm(bookingForm);
        bookingForm.style.display = 'none';
        document.getElementById('bookingSuccess')?.classList.add('visible');
      } catch (err) {
        generalErr?.classList.add('visible');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Request My Session'; }
      }
    });
  }

  /* ── Booking calendar picker ────────────────────────────── */
  const calGrid       = document.getElementById('calGrid');
  const calMonthLabel = document.getElementById('calMonthLabel');
  const calPrev       = document.getElementById('calPrev');
  const calNext       = document.getElementById('calNext');
  const calHint       = document.getElementById('calHint');
  const bookDateHidden = document.getElementById('bookDate');

  if (calGrid) {
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const today = new Date(); today.setHours(0,0,0,0);
    let viewYear  = today.getFullYear();
    let viewMonth = today.getMonth();
    let selectedDate = null;

    function renderCalendar() {
      calMonthLabel.textContent = MONTHS[viewMonth] + ' ' + viewYear;
      calGrid.innerHTML = '';

      const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
      const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'cal-day empty';
        calGrid.appendChild(empty);
      }

      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(viewYear, viewMonth, d);
        const btn  = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cal-day';
        btn.textContent = d;

        if (date < today) {
          btn.disabled = true;
        } else {
          if (date.getTime() === today.getTime()) btn.classList.add('today');
          if (selectedDate && date.getTime() === selectedDate.getTime()) btn.classList.add('selected');
          btn.addEventListener('click', () => {
            selectedDate = date;
            if (bookDateHidden) bookDateHidden.value = date.toISOString().split('T')[0];
            if (calHint) calHint.textContent = date.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'long', year:'numeric' });
            renderCalendar();
          });
        }
        calGrid.appendChild(btn);
      }

      const isCurrentMonth = viewYear === today.getFullYear() && viewMonth === today.getMonth();
      if (calPrev) calPrev.disabled = isCurrentMonth;
    }

    calPrev?.addEventListener('click', () => {
      viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      renderCalendar();
    });
    calNext?.addEventListener('click', () => {
      viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      renderCalendar();
    });

    renderCalendar();
  }

  /* ── Time slot picker ────────────────────────────────────── */
  const timeSlotGrid  = document.getElementById('timeSlotGrid');
  const bookTimeHidden = document.getElementById('bookTime');

  if (timeSlotGrid) {
    timeSlotGrid.querySelectorAll('.time-slot').forEach(btn => {
      btn.addEventListener('click', () => {
        timeSlotGrid.querySelectorAll('.time-slot').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (bookTimeHidden) bookTimeHidden.value = btn.dataset.time;
      });
    });
  }

  /* ── Newsletter form ─────────────────────────────────────── */
  document.querySelectorAll('.newsletter__form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('.newsletter__input');
      const btn   = form.querySelector('.newsletter__btn');
      if (input && btn && input.value.includes('@')) {
        btn.textContent = 'Subscribed ✓';
        btn.style.background = 'var(--forest-light)';
        input.value = '';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      }
    });
  });

});
