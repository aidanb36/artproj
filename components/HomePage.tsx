import Head from "next/head";
import React, { useState, useCallback, useEffect } from "react";
import NextLink from "next/link";
import Header from "./Header";
import ContactForm from "./Contact";
import { galleryItems } from "../data/gallery";

export default function HomePage() {
  const [lightbox, setLightbox] = useState<{ src: string; medium: string } | null>(null);

  const openLightbox = useCallback((src: string, medium: string) => {
    setLightbox({ src, medium });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeLightbox]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>art@mhb — Madeline&apos;s Portfolio</title>
        <meta name="description" content="A collection of art pieces. Painting, sculpture, figure drawing, digital art, and handmade cards." />
      </Head>

      <Header />

      <main>
        {/* Hero */}
        <section className="hero" id="intro">
          <div className="container hero__inner">
            <h1 className="hero__title">
              Madeline&apos;s Portfolio
            </h1>
            <p className="hero__tagline">A collection of art pieces</p>
            <p className="hero__sub">My Art. Your Design.</p>
            <NextLink href="/Shop" className="btn btn--outline hero__cta">
              Visit the shop
            </NextLink>
          </div>
        </section>

        {/* Gallery */}
        <section className="section gallery-section" id="gallery">
          <div className="container">
            <h2 className="section__title">Gallery</h2>
            <div className="gallery">
              {galleryItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="gallery__item"
                  onClick={() => openLightbox(item.src, item.medium)}
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <span className="gallery__label">{item.medium}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section about-section" id="about">
          <div className="container about-section__inner">
            <h2 className="section__title">About me</h2>
            <p className="about-section__text">
              I&apos;m a recent graduate of Eastern Connecticut State University,
              where I studied anthropology. I have a passion for art and have
              been creating it throughout my life. My main areas of expertise
              are painting, sculpture, and figure drawing, but I am also
              expanding my skills in digital art and animation. I am known for
              my handmade cards which I can customize to fit any theme or
              occasion.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <h2 className="section__title">Get in touch</h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container">
            <h2>Thank you</h2>
            <p>@MHB · Stay Artistic</p>
          </div>
        </footer>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt=""
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="lightbox-caption">{lightbox.medium}</span>
        </div>
      )}

      <style jsx>{`
        .hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--space-3xl) var(--space-lg);
          background: linear-gradient(180deg, var(--color-bg) 0%, rgba(45, 74, 62, 0.06) 100%);
        }
        .hero__inner {
          max-width: 640px;
        }
        .hero__title {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 6vw, 3.75rem);
          margin-bottom: var(--space-sm);
          color: var(--color-ink);
        }
        .hero__tagline {
          font-size: 1.25rem;
          color: var(--color-ink-muted);
          margin-bottom: var(--space-xs);
        }
        .hero__sub {
          font-style: italic;
          color: var(--color-accent);
          margin-bottom: var(--space-xl);
        }
        .hero__cta {
          margin-top: var(--space-md);
        }
        .gallery-section {
          background: var(--color-bg-elevated);
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--space-lg);
        }
        @media (min-width: 480px) {
          .gallery { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .gallery { grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
        }
        .gallery__item {
          position: relative;
          aspect-ratio: 1;
          border: none;
          border-radius: var(--radius-md);
          background-size: cover;
          background-position: center;
          cursor: pointer;
          overflow: hidden;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .gallery__item:hover {
          transform: scale(1.02);
          box-shadow: var(--shadow-md);
        }
        .gallery__item::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
          opacity: 0;
          transition: opacity var(--transition);
        }
        .gallery__item:hover::before {
          opacity: 1;
        }
        .gallery__label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-md);
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          text-align: center;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity var(--transition), transform var(--transition);
        }
        .gallery__item:hover .gallery__label {
          opacity: 1;
          transform: translateY(0);
        }
        .about-section {
          background: var(--color-bg);
        }
        .about-section__inner {
          max-width: 640px;
          margin: 0 auto;
        }
        .about-section__text {
          font-size: 1.0625rem;
          color: var(--color-ink-muted);
          line-height: 1.75;
        }
        .contact-section {
          background: var(--color-bg-elevated);
        }
      `}</style>
    </>
  );
}
