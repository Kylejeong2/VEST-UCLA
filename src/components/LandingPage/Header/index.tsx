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
import { GetStartedButton } from "@/components/LandingPage";
import AnimatedLink from "@/components/Common/AnimatedLink";
import { useState, useEffect } from "react";
import { links } from "./constants";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Link href="/">
            <Image
              src="https://utfs.io/f/S5FODHw5IM4mVeHOqfYhcQ2vJK1dAe5mOnIjiySl03wFfWDM"
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
              <AnimatedLink key={i} title={link.linkTo} url={link.url} />
            ))}
          </Nav>
          <CallToActions>
            <a
              href="https://discord.gg/PTGgbFvm9t"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-btn"
              onClick={closeMenu}
            >
              Join Discord
            </a>
            <GetStartedButton padding="0.75rem" />
          </CallToActions>
        </MobileMenu>

        <Nav className="desktop">
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} url={link.url} />
          ))}
        </Nav>
        <CallToActions className="desktop">
          <a
            href="https://discord.gg/PTGgbFvm9t"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-btn"
          >
            Join Discord
          </a>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
