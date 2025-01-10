"use client";
import Image from "next/image";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  position: relative;
  padding: 10rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }

  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 7.38rem;

  h3 {
    color: var(--emerald);
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 1.75;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;

export const HeaderMainText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 4rem 0 8rem;
  width: 100%;
  height: 400px;
  perspective: 2000px;
`;

export const LeftImage = styled(motion(Image))`
  position: absolute;
  transform: translateX(-120%) rotateY(25deg);
  filter: brightness(0.7);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: translateX(-60%) rotateY(15deg);
    filter: brightness(0.9);
  }
`;

export const MiddleImage = styled(motion(Image))`
  position: relative;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1.1);
  filter: brightness(1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

  &:hover {
    transform: scale(1.15);
  }
`;

export const RightImage = styled(motion(Image))`
  position: absolute;
  transform: translateX(120%) rotateY(-25deg);
  filter: brightness(0.7);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: translateX(60%) rotateY(-15deg);
    filter: brightness(0.9);
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const Edge = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.05);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--link-color);
    opacity: 0.9;
  }

  h3 {
    font-size: 1.375rem;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    p {
      font-size: 1rem;
      line-height: 1.5;
    }

    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) saturate(100%) invert(88%) sepia(8%) saturate(1270%) hue-rotate(101deg) brightness(86%) contrast(86%);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
