import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from './Contact';
const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>art@mhb</title>
      </Head>

      <body>
        {/* NAVIGATION STARTS HERE */}
        <header>
          <div className="containernav">
            <a href="#" onClick={() => window.open('https://www.youtube.com/@blurrilines6148')}>
              <Image src="/images/mhb-removebg-preview.png" alt="logo" className="logo" width={100} height={100} />
            </a>

            <nav>
              <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {/* NAVIGATION ENDS HERE */}

        {/* INTRODUCTION STARTS HERE */}
        <section id="intro" className="intro">
          <div className="container">
            <h1 className="moto">
              Madeline's Portfolio <br />
              <span>A Collection of Art Pieces</span>
              <span>My Art. Your Design.</span>
            </h1>
            <a href="#pathway" className="button">Let's Work Together</a>
          </div>
        </section>
        {/* INTRODUCTION ENDS HERE */}

        {/* PATHWAY STARTS HERE */}
        <section id="pathway" className="pathway">
          <div className="container">
            <div className="explanation">
              <h1>How it works</h1>
            </div>
            <div className="row">
              <div className="step">
                <h2>Have an idea</h2>
              </div>
              <div className="step">
                <h2>Customise it</h2>
              </div>
              <div className="step">
                <h2>Receive it</h2>
              </div>
            </div>
          </div>
        </section>
        {/* PATHWAY ENDS HERE */}

        {/* GALLERY STARTS HERE */}
        <div className="content-container">
        <section id="gallery" className="gallery">
          <div className="container">
            <h1>Gallery</h1>
            <div className="portfolio">
              <a href="/images/image0.jpeg" className="portfolio-item medium one"><p className="desc">Charcoal.</p></a>
              <a href="/images/image1.jpeg" className="portfolio-item medium two"><p className="desc">Colored Pencil.</p></a>
              <a href="/images/image2.jpeg" className="portfolio-item tall three"><p className="desc">Oil.</p></a>
              <a href="/images/image4.jpeg" className="portfolio-item tall four"><p className="desc">Acrylic.</p></a>
              <a href="/images/image3.jpeg" className="portfolio-item medium five"><p className="desc">Acrylic.</p></a>
              <a href="/images/image5.jpeg" className="portfolio-item medium six"><p className="desc">Oil.</p></a>
              <a href="/images/image6.jpeg" className="portfolio-item medium seven"><p className="desc">Marker.</p></a>
              <a href="/images/IMG_1194.jpg" className="portfolio-item medium eight"><p className="desc">Print.</p></a>
              <a href="/images/bunny.jpeg" className="portfolio-item tall nine"><p className="desc">Digital.</p></a>
              <a href="/images/cat2.jpeg" className="portfolio-item tall ten"><p className="desc">Digital.</p></a>
              <a href="/images/anime.jpeg" className="portfolio-item tall eleven"><p className="desc">Digital.</p></a>
            </div>
          </div>
        </section>
        {/* GALLERY ENDS HERE */}

        {/* ABOUT SECTION STARTS HERE */}
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
        </div>
        {/* ABOUT SECTION ENDS HERE */}

        <ContactForm />

        {/* FOOTER STARTS HERE */}
        <footer>
          <div className="container">
            <h1>Thank you</h1>
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
