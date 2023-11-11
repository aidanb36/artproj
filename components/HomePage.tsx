import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './Contact';
import React, { useState, useRef, useEffect } from 'react';
import NextLink from 'next/link';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>art@mhb</title>
        <style>
          {`
            .gallery2 {
              display: grid;
              grid-template-columns: repeat(3, 1fr); /* Creates a 3-column grid */
              grid-gap: 30px;
              width: 100%;
              background-color: white;
              margin-bottom: 40px;
              @media (max-width: 575.98px) {
                grid-template-columns: repeat(1, 1fr); /* Creates a 3-column grid */
              }

            }
            
            .portfolio-item2 {
              position: relative;
              overflow: hidden;
              cursor: pointer;
              background-size: cover;
              background-position: center;
              transition: transform 0.3s ease-in-out;
              margin: 15px;
            }
            
            .portfolio-item2::before {
              content: '';
              display: block;
              padding-top: 100%; /* This maintains a square aspect ratio */
            }
            
            .desc2 {
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
              background: rgba(0, 0, 0, 0.7);
              color: white;
              visibility: hidden;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
              padding: 10px 0;
            }
            
            .portfolio-item2:hover {
              transform: scale(1.1);
            }
            
            .portfolio-item2:hover .desc2 {
              visibility: visible;
              opacity: 1;
            }

            .hamburger {
              display: flex;
              cursor: pointer;
              flex-direction: column;
              justify-content: space-around;
              width: 30px;
              height: 25px;
              background: transparent;
              border: none;
              outline: none;
              position: absolute;
              right: 20px; /* Adjust as needed */
              top: 20px; /* Adjust as needed */
            }
            
            .hamburger span {
              display: block;
              width: 100%;
              height: 3px;
              background-color: #333;
              z-index: 1002; /* Ensure it's above the nav */

            }
            
            nav {
              position: absolute;
              right: 20px;
              top: 60px;
              background-color: rgba(221, 216, 216, 0.9);
              width: 150px; /* Adjust as needed */
              display: none;
              z-index: 1001;
              display: none;
              position: absolute;
              right: 0;
              top: 60px;
              z-index: 1001;
            }
            
            nav ul {
              display: block;
              padding: 20px;
              text-align: right;
            }
            
            nav li {
              margin-bottom: 15px;
            }
            
            nav a {
              font-size: 14px; /* Adjust font size */
            }
          `}
        </style>
      </Head>

      <body>
      <Header />
        {/* INTRODUCTION STARTS HERE */}
        <section id="intro" className="intro">
          <div className="container">
            <h1 className="moto">
              Madeline's Portfolio <br />
              <span>A Collection of Art Pieces</span>
              <span>My Art. Your Design.</span>
            </h1>
            <a href="/Shop" className="button">Visit my Shop</a>
          </div>
        </section>
        {/* INTRODUCTION ENDS HERE */}

        {/* GALLERY STARTS HERE */}
        <section id="gallery" className="gallery2">
              <a href="/images/image0.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image0.jpeg')" }}>
                <div className="desc2">Charcoal</div>
              </a>
              <a href="/images/image1.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image1.jpeg')" }}>
                <div className="desc2">Colored Pencil</div>
              </a>
              <a href="/images/image2.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image2.jpeg')" }}>
                <div className="desc2">Oil</div>
              </a>
              <a href="/images/image4.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image4.jpeg')" }}>
                <div className="desc2">Acrylic</div>
              </a>
              <a href="/images/image3.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image3.jpeg')" }}>
                <div className="desc2">Acrylic</div>
              </a>
              <a href="/images/image5.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image5.jpeg')" }}>
                <div className="desc2">Oil</div>
              </a>
              <a href="/images/image6.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/image6.jpeg')" }}>
                <div className="desc2">Marker</div>
              </a>
              <a href="/images/IMG_1194.jpg" className="portfolio-item2" style={{ backgroundImage: "url('/images/IMG_1194.jpg')" }}>
                <div className="desc2">Print</div>
              </a>
              <a href="/images/bunny.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/bunny.jpeg')" }}>
                <div className="desc2">Digital</div>
              </a>
              <a href="/images/cat2.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/cat2.jpeg')" }}>
                <div className="desc2">Digital</div>
              </a>
              <a href="/images/anime.jpeg" className="portfolio-item2" style={{ backgroundImage: "url('/images/anime.jpeg')" }}>
                <div className="desc2">Digital</div>
              </a>
          </section>
        {/* GALLERY ENDS HERE */}

        {/* ABOUT ME SECTION STARTS HERE */}
        <section id="about" className="about-me">
          <div className="container">
            <h1>About me</h1>
            <p>
              I'm a recent graduate of Eastern Connecticut State University, where I studied anthropology. 
              I have a passion for art and have been creating it throughout my life. My main areas of 
              expertise are painting, sculpture, and figure drawing, but I am also expanding my skills in 
              digital art and animation. I am known for my handmade cards which I can customize to fit any 
              theme or occasion.
            </p>
          </div>
        </section>
        {/* ABOUT ME SECTION ENDS HERE */}

        {/* CONTACT FORM STARTS HERE */}
        <section id="contact">
          <ContactForm />
        </section>
        {/* CONTACT FORM ENDS HERE */}

        {/* FOOTER STARTS HERE */}
        <footer>
          <div className="container">
          <h1 style={{ marginTop: '10px' }}>Thank you</h1>
            <p>@MHB</p>
            <p>Stay Artistic</p>
          </div>
        </footer>
        {/* FOOTER ENDS HERE */}
      </body>
    </>
  );
};

export default HomePage;



