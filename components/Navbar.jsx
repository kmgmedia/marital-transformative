"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home", match: (p) => p === "/" },
  { href: "/about", label: "About Us", match: (p) => p === "/about" },
  { href: "/services", label: "Services", match: (p) => p === "/services" },
  { href: "/blog", label: "Blog", match: (p) => p === "/blog" || p.startsWith("/blog/") },
  { href: "/faq", label: "FAQ", match: (p) => p === "/faq" },
  { href: "/contact", label: "Contact", match: (p) => p === "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="mainNav">
        <div className="container">
          <div className="navbar__inner">
            <Link href="/" className="navbar__logo">
              <img
                src="/images/logo.png"
                alt="Marital Transformative Consult"
                style={{ height: 52, width: "auto", display: "block" }}
              />
            </Link>
            <nav className="navbar__nav" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar__link${link.match(pathname) ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="navbar__actions">
              <Link href="/booking" className="btn btn-primary">
                Book a Session
              </Link>
              <button
                type="button"
                className={`navbar__hamburger${drawerOpen ? " open" : ""}`}
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen((open) => !open)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-drawer${drawerOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div
          className={`drawer-scrim${drawerOpen ? " visible" : ""}`}
          onClick={() => setDrawerOpen(false)}
        ></div>
        <div className={`drawer-panel${drawerOpen ? " open" : ""}`}>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Marital Transformative Consult"
              style={{ height: 48, width: "auto", display: "block" }}
            />
          </Link>
          <nav className="drawer-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={link.match(pathname) ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="drawer-cta">
            <Link href="/booking" className="btn btn-primary btn-full btn-lg">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
