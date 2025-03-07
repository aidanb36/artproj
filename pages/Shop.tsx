import styled, { createGlobalStyle } from "styled-components";
import React, { useState, useRef } from "react";
import Image from "next/image"; // Make sure you have 'next/image' installed
import NextLink from "next/link";
import Head from "next/head";
import Header from "../components/Header";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); // Four columns on wider screens
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: white;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  padding: 10px;
  color: black;
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ContactButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: block;
  width: 100%;
  margin-top: 10px;
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;

  &:hover {
    background-color: #00337a;
  }
  &:after {
    content: "Buy on Etsy"; // Default content
  }

  @media (max-width: 768px) {
    // Adjust breakpoint as needed
    &:after {
      content: "Buy One"; // Content for mobile devices
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
`;

const products = [
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/352d39/5451556827/il_1588xN.5451556827_rxbh.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1", // Replace with actual Etsy listing link
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/23df50/5403382768/il_1588xN.5403382768_lmd7.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589092177/podcats-card?click_key=c109b3ad355c582c78337dce92cd393f5116f7a2%3A1589092177&click_sum=fdc57432&ref=shop_home_active_2", // Replace with actual Etsy listing link
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/706af1/5451504167/il_1588xN.5451504167_50k6.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589086855/cinnamon-roll-kitty-card?click_key=5b32a8c2f6ee24a47316c739898e765ac7459662%3A1589086855&click_sum=cb2c7a5a&ref=shop_home_active_3", // Replace with actual Etsy listing link
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/6018e1/5451451507/il_1588xN.5451451507_rox3.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589078977/kitty-birthday-card?click_key=73051b2ee233f6cf1d4647fc901b8684fab9c2d5%3A1589078977&click_sum=5af45761&ref=shop_home_active_4", // Replace with actual Etsy listing link
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/2b83e1/6358360789/il_1588xN.6358360789_dshh.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/bbeba3/6310307598/il_1588xN.6310307598_ti60.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/e468d5/6358331917/il_1588xN.6358331917_cqc3.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/f54f8a/6358340959/il_1588xN.6358340959_gikj.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/2ac88f/6456227104/il_1588xN.6456227104_btzu.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/4839cc/6504342325/il_1588xN.6504342325_n3vv.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
  {
    imageUrl:
      "https://i.etsystatic.com/47227300/r/il/98205b/6310235786/il_1588xN.6310235786_gf10.jpg",
    price: "$5.00",
    etsyLink:
      "https://www.etsy.com/listing/1589096793/cat-holiday-card?click_key=85c4e1aac214f38706995c3b8994be7d0d4d9dbf%3A1589096793&click_sum=d32c51b7&ref=shop_home_active_1",
  },
];

const Shop = () => {
  return (
    <div>
      <Header />
      <Title>My Card Shop</Title>
      <GridContainer>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.imageUrl} alt="Product Image" />
            <ProductInfo>
              <ProductPrice>{product.price}</ProductPrice>
              <a
                href={product.etsyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactButton></ContactButton>
              </a>
            </ProductInfo>
          </ProductCard>
        ))}
      </GridContainer>

      {/* FOOTER STARTS HERE */}
      <footer>
        <div className="container">
          <h1 style={{ marginTop: "10px" }}>Thank you</h1>
          <p>@MHB</p>
          <p>Stay Artistic</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
