import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

interface HeaderContainerProps {
  $isScrolled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => props.$isScrolled ? '#faf5eb' : 'transparent'};
  transition: background-color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 10;
  color: black;
  font-size: 15px;
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const NavigationLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

const NavigationLink = styled.a`
  margin-left: 25px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <NextLink href="/" passHref>
        <Logo src="/images/mhb-removebg-preview.png" alt="Your Logo Name" />
      </NextLink>
      <NavigationLinks>
      <NextLink href="/#gallery" passHref><NavigationLink>gallery</NavigationLink></NextLink>
        <NextLink href="/#about" passHref><NavigationLink>about</NavigationLink></NextLink>
        <NextLink href="/Shop" passHref><NavigationLink>shop</NavigationLink></NextLink>
        <NextLink href="/#contact" passHref><NavigationLink>contact</NavigationLink></NextLink>
      </NavigationLinks>
    </HeaderContainer>
  );
};

export default Header;
