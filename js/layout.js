/* ============================================================
   LAYOUT.JS â€” Shared navbar + footer injection
   ============================================================ */

const NAV_HTML = `
<nav class="navbar" id="mainNav">
  <div class="container">
    <div class="navbar__inner">
      <a href="index.html" class="navbar__logo">
        <img src="public/images/logo.png" alt="Marital Transformative Consult" style="height:52px;width:auto;display:block">
      </a>
      <nav class="navbar__nav" aria-label="Main navigation">
        <a href="index.html" class="navbar__link" data-page="index">Home</a>
        <a href="about.html" class="navbar__link" data-page="about">About Us</a>
        <a href="services.html" class="navbar__link" data-page="services">Services</a>
        <a href="blog.html" class="navbar__link" data-page="blog">Blog</a>
        <a href="faq.html" class="navbar__link" data-page="faq">FAQ</a>
        <a href="contact.html" class="navbar__link" data-page="contact">Contact</a>
      </nav>
      <div class="navbar__actions">
        <a href="booking.html" class="btn btn-primary">Book a Session</a>
        <button class="navbar__hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</nav>

<div class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
  <div class="drawer-scrim" id="drawerScrim"></div>
  <div class="drawer-panel" id="drawerPanel">
    <a href="index.html">
      <img src="public/images/logo.png" alt="Marital Transformative Consult" style="height:48px;width:auto;display:block">
    </a>
    <nav class="drawer-nav" aria-label="Mobile navigation">
      <a href="index.html" data-page="index">Home</a>
      <a href="about.html" data-page="about">About Us</a>
      <a href="services.html" data-page="services">Services</a>
      <a href="blog.html" data-page="blog">Blog</a>
      <a href="faq.html" data-page="faq">FAQ</a>
      <a href="contact.html" data-page="contact">Contact</a>
    </nav>
    <div class="drawer-cta">
      <a href="booking.html" class="btn btn-primary btn-full btn-lg">Book a Session</a>
    </div>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="footer__logo">
          <img src="public/images/logo.png" alt="Marital Transformative Consult" style="height:56px;width:auto;display:block;filter:brightness(0) invert(1)">
        </div>
        <p class="footer__about">Faith-based professional marital counselling helping couples rebuild, strengthen, and transform their marriages through God's wisdom.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" class="footer__social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="white" stroke-width="1.5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" stroke-width="2"/></svg>
          </a>
          <a href="#" class="footer__social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--forest-deep)"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer__heading">Quick Links</div>
        <ul class="footer__links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__heading">Our Services</div>
        <ul class="footer__links">
          <li><a href="booking.html?service=Premarital+Counselling">Premarital Counselling</a></li>
          <li><a href="booking.html?service=Couples+Therapy">Couples Therapy</a></li>
          <li><a href="booking.html?service=Crisis+Intervention">Crisis Intervention</a></li>
          <li><a href="booking.html?service=Family+Restoration">Family Restoration</a></li>
          <li><a href="booking.html?service=Individual+Support">Individual Support</a></li>
          <li><a href="booking.html?service=Faith+Integration">Faith Integration</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__heading">Contact Us</div>
        <div class="footer__contact-row">
          <div class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <div class="footer__contact-text">
            <strong>Phone / WhatsApp</strong>
            <a href="tel:+2348012345678" style="color:rgba(255,255,255,.7)">+234 801 234 5678</a>
          </div>
        </div>
        <div class="footer__contact-row">
          <div class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div class="footer__contact-text">
            <strong>Email</strong>
            <a href="mailto:info@maritaltransformative.org" style="color:rgba(255,255,255,.7)">info@maritaltransformative.org</a>
          </div>
        </div>
        <div class="footer__contact-row">
          <div class="footer__contact-icon">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="footer__contact-text">
            <strong>Location</strong>
            Lagos, Nigeria (In-person & Online)
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; ${new Date().getFullYear()} Marital Transformative Consult. All rights reserved.</p>
      <div class="footer__bottom-links">
        <a href="privacy.html">Privacy Policy</a>
        <a href="privacy.html#terms">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

<a href="https://wa.me/2348012345678" class="whatsapp-btn" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.478 2 2.002 6.474 2 11.998c-.001 1.874.49 3.703 1.42 5.313L2 22l4.854-1.392c1.541.86 3.287 1.317 5.074 1.317h.004c5.523 0 9.998-4.474 10-9.997.001-2.67-1.038-5.18-2.925-7.068A9.955 9.955 0 0012.004 2z"/></svg>
</a>
`;

// Inject nav and footer
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) {
    const div = document.createElement('div');
    div.innerHTML = NAV_HTML;
    navPlaceholder.replaceWith(...div.childNodes);
  }
  if (footerPlaceholder) {
    const div = document.createElement('div');
    div.innerHTML = FOOTER_HTML;
    footerPlaceholder.replaceWith(...div.childNodes);
  }
  // Set active nav link based on current page
  const page = document.body.dataset.page || '';
  document.querySelectorAll('[data-page]').forEach(el => {
    if (el.dataset.page === page) el.classList.add('active');
  });
});
