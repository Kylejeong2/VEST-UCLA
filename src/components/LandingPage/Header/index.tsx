'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
} from './styles';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components/LandingPage';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Link href="/">
            <Image src="/Bruin_Venture_Lab_Submark_Bold.png" width={50} height={50} alt="VEST logo" priority />
          </Link>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} url={link.url} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
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
