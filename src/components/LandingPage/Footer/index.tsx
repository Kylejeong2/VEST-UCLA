"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  EnvelopeSimple,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  Wrapper,
  Inner,
  TopSection,
  LogoSection,
  NavSection,
  NavColumn,
  NavTitle,
  NavLinks,
  SocialSection,
  SocialLinks,
  NewsletterButton,
  BottomSection,
  Copyright,
} from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Inner>
        <TopSection>
          <LogoSection>
            <Link href="/">
              <Image
                src="/images/VEST-logo-white.svg"
                alt="VEST Logo"
                width={72}
                height={72}
              />
            </Link>
          </LogoSection>

          <NavSection>
            <NavColumn>
              <NavTitle>Navigate</NavTitle>
              <NavLinks>
                <Link href="/">Home</Link>
                <Link href="/team">Team</Link>
                <Link href="/events">Events</Link>
                <Link href="/about">About</Link>
              </NavLinks>
            </NavColumn>

            <NavColumn>
              <NavTitle>Resources</NavTitle>
              <NavLinks>
                <Link href="/join">Join Us</Link>
                <Link href="/about">What We Do</Link>
              </NavLinks>
            </NavColumn>
          </NavSection>

          <SocialSection>
            <SocialLinks>
              <a
                href="https://www.linkedin.com/company/vest-ucla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={32}/>
              </a>
              <a
                href="https://www.instagram.com/vestucla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramLogo size={32}/>
              </a>
              <a
                href="https://twitter.com/vestucla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X/Twitter"
              >
                <XLogo size={32}/>
              </a>
              <a
                href="mailto:vestucla@gmail.com"
                aria-label="Email"
              >
                <EnvelopeSimple size={32}/>
              </a>
            </SocialLinks>

            <NewsletterButton
              href="https://vestucla.us13.list-manage.com/subscribe/post?u=65d6dbbacd1e7ab2cebe3bc5c&id=aa4fd52c38"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Newsletter</span>
              <ArrowRight size={20} weight="bold" />
            </NewsletterButton>
          </SocialSection>
        </TopSection>

        <BottomSection>
          <Copyright>© {currentYear} VEST at UCLA. All rights reserved.</Copyright>
        </BottomSection>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
