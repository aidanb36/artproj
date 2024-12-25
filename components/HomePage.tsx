import React, { ReactNode } from "react";
import Head from "next/head";
import ContactForm from "./Contact";
import Header from "../components/Header";

interface HomePageProps {
  children: ReactNode;
}

const HomePage: React.FC<HomePageProps> = ({ children }) => {
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
      {children}
    </>
  );
};

export default HomePage;
