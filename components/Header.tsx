import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#about", label: "About" },
  { href: "/Shop", label: "Shop" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled}
        role="banner"
      >
        <div className="site-header__inner container">
          <NextLink href="/" className="site-header__logo" aria-label="Home">
            <Image
              src="/images/mhb-removebg-preview.png"
              alt="MHB"
              width={120}
              height={40}
              priority
            />
          </NextLink>

          <nav className="site-header__nav" aria-label="Main">
            <ul className="site-header__links">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NextLink href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className="site-header__backdrop"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      <div className="site-header__mobile" data-open={menuOpen} role="dialog" aria-label="Mobile menu">
        <ul className="site-header__mobile-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <NextLink href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </NextLink>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(250, 249, 246, 0.85);
          backdrop-filter: saturate(180%) blur(12px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .site-header[data-scrolled="true"] {
          border-color: var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .site-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-md) var(--space-lg);
          min-height: 64px;
        }
        .site-header__logo {
          display: block;
          line-height: 0;
        }
        .site-header__logo :global(img) {
          height: 40px;
          width: auto;
        }
        .site-header__nav {
          display: none;
        }
        @media (min-width: 768px) {
          .site-header__nav { display: block; }
          .site-header__menu-btn { display: none; }
        }
        .site-header__links {
          list-style: none;
          display: flex;
          gap: var(--space-xl);
          margin: 0;
          padding: 0;
        }
        .site-header__links a {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-ink);
        }
        .site-header__links a:hover {
          color: var(--color-accent);
        }
        .site-header__menu-btn {
          width: 44px;
          height: 44px;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
        }
        .site-header__menu-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--color-ink);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .site-header__menu-btn[aria-expanded="true"] span:nth-child(1) {
          transform: translateY(4px) rotate(45deg);
        }
        .site-header__menu-btn[aria-expanded="true"] span:nth-child(2) {
          opacity: 0;
        }
        .site-header__menu-btn[aria-expanded="true"] span:nth-child(3) {
          transform: translateY(-4px) rotate(-45deg);
        }
        .site-header__backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.3);
          z-index: 99;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease, visibility 0.2s ease;
        }
        .site-header__backdrop[data-open="true"] {
          opacity: 1;
          visibility: visible;
        }
        @media (min-width: 768px) {
          .site-header__backdrop[data-open="true"] { display: none; }
        }
        .site-header__mobile {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: var(--color-bg-elevated);
          border-bottom: 1px solid var(--color-border);
          z-index: 100;
          padding: var(--space-lg);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease;
        }
        .site-header__mobile[data-open="true"] {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        @media (min-width: 768px) {
          .site-header__mobile { display: none; }
        }
        .site-header__mobile-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .site-header__mobile-links li {
          border-bottom: 1px solid var(--color-border);
        }
        .site-header__mobile-links a {
          display: block;
          padding: var(--space-md);
          font-weight: 500;
          color: var(--color-ink);
        }
        .site-header__mobile-links a:hover {
          color: var(--color-accent);
        }
      `}</style>
    </>
  );
}
