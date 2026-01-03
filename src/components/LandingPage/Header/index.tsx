"use client";

import Image from "next/image";
import {
  Wrapper,
  Inner,
  LogoContainer,
  NavMenu,
  NavLink,
  BurgerMenu,
  MobileOverlay,
  MobileMenu,
} from "./styles";
import { useState, useEffect } from "react";
import { links } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
              src="/images/VEST-logo-white.svg"
              width={72}
              height={72}
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
          <nav>
            {links.map((link, i) => (
              <Link 
                key={i} 
                href={link.url}
                className={pathname === link.url ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.linkTo}
              </Link>
            ))}
          </nav>
        </MobileMenu>

        <NavMenu className="desktop">
          {links.map((link, i) => (
            <NavLink 
              key={i} 
              href={link.url}
              className={pathname === link.url ? 'active' : ''}
            >
              {link.linkTo}
            </NavLink>
          ))}
        </NavMenu>
      </Inner>
    </Wrapper>
  );
};

export default Header;
