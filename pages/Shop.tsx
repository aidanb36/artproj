import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import Header from "../components/Header";
import { shopProducts } from "../data/shop";

export default function Shop() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shop — art@mhb</title>
        <meta name="description" content="Handmade cards and art by Madeline. Custom cards for any occasion." />
      </Head>
      <Header />

      <main className="shop-page">
        <section className="section shop-hero">
          <div className="container">
            <h1 className="shop-hero__title">Card Shop</h1>
            <p className="shop-hero__sub">Handmade cards for every occasion</p>
          </div>
        </section>

        <section className="section shop-grid-section">
          <div className="container">
            <div className="shop-grid">
              {shopProducts.map((product) => (
                <article key={product.id} className="shop-card">
                  <a
                    href={product.etsyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shop-card__link"
                  >
                    <div className="shop-card__image-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.imageUrl}
                        alt={product.title || "Handmade card"}
                        className="shop-card__image"
                      />
                    </div>
                    <div className="shop-card__info">
                      <span className="shop-card__price">{product.price}</span>
                      <span className="shop-card__cta">View on Etsy</span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <h2>Thank you</h2>
            <p>@MHB · Stay Artistic</p>
            <NextLink href="/" className="site-footer__home">
              Back to gallery
            </NextLink>
          </div>
        </footer>
      </main>

      <style jsx>{`
        .shop-page {
          min-height: 100vh;
        }
        .shop-hero {
          text-align: center;
          padding-top: var(--space-2xl);
          padding-bottom: var(--space-lg);
        }
        .shop-hero__title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 2.75rem);
          margin-bottom: var(--space-xs);
        }
        .shop-hero__sub {
          color: var(--color-ink-muted);
          font-size: 1.125rem;
        }
        .shop-grid-section {
          padding-top: 0;
        }
        .shop-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--space-xl);
        }
        @media (min-width: 480px) {
          .shop-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .shop-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .shop-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .shop-card {
          background: var(--color-bg-elevated);
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border);
          transition: box-shadow var(--transition), transform var(--transition);
        }
        .shop-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .shop-card__link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .shop-card__image-wrap {
          aspect-ratio: 1;
          overflow: hidden;
          background: var(--color-border);
        }
        .shop-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .shop-card__info {
          padding: var(--space-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .shop-card__price {
          font-weight: 600;
          color: var(--color-ink);
        }
        .shop-card__cta {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-accent);
        }
        .shop-card__link:hover .shop-card__cta {
          text-decoration: underline;
        }
        .site-footer__home {
          display: inline-block;
          margin-top: var(--space-md);
          font-size: 0.875rem;
          color: rgba(255,255,255,0.9);
        }
        .site-footer__home:hover {
          color: #fff;
        }
      `}</style>
    </>
  );
}
