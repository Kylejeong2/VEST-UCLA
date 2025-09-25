"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
  MobileOverlay,
  MobileMenu,
} from "./styles";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState, useEffect } from "react";
import { links } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      // Add class to body instead of directly manipulating style
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Cleanup function to ensure class is removed
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Link href="/">
            <Image
              src="/images/VEST-logo-white.svg"
              width={70}
              height={70}
              alt="VEST logo"
              priority
            />
          </Link>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'open' : ''}>
            <span />
            <span />
            <span />
          </BurgerMenu>
        </LogoContainer>

        <MobileOverlay className={isOpen ? 'active' : ''} onClick={closeMenu} />
        <MobileMenu className={isOpen ? 'active' : ''}>
          <Nav>
            {links.map((link, i) => (
              <Link 
                key={i} 
                href={link.url}
                className={`text-white hover:text-blue-500 transition-colors ${
                  pathname === link.url ? 'active' : ''
                }`}
                onClick={closeMenu}
              >
                {link.linkTo}
              </Link>
            ))}
          </Nav>
        </MobileMenu>

        <Nav className="desktop">
          {links.map((link, i) => (
            <Link 
              key={i} 
              href={link.url}
              className={`text-white hover:text-blue-500 transition-colors ${
                pathname === link.url ? 'active text-blue-500' : ''
              }`}
            >
              {link.linkTo}
            </Link>
          ))}
        </Nav>
      </Inner>
    </Wrapper>
  );
};

export default Header;
