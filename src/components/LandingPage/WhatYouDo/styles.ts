"use client";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  padding: 8rem 0;
  background: var(--Background);
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 8rem;

  h1 {
    font-size: 4rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75;
  }

  @media (max-width: 768px) {
    margin: 0 auto 6rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: -90px auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--Background);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: -75px auto 1.5rem;
  }
`;

export const TextCtn = styled.div`
  padding: 0 2rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6rem 3rem;
  margin-bottom: 6rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5rem;
    margin-bottom: 5rem;
  }
`;

export const OfferCard = styled(motion.div)`
  position: relative;
  padding-top: 90px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.1);

    ${ImageCtn} {
      transform: scale(1.05);
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    padding-top: 75px;
  }
`;
