"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 6rem;
  margin-bottom: 4rem;
  padding: 1rem 0;
  position: relative;
  z-index: 2;

  /* Less top spacing when used in About page */
  .about-page & {
    margin-top: 3rem;
    margin-bottom: 6rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;

  h1,
  h2,
  h3 {
    color: var(--green);
    font-weight: 600;
    font-size: 4rem; /* match Recent Events */
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    h1,
    h2,
    h3 {
      font-size: 2.25rem; /* match Recent Events mobile */
    }
  }
`;

export const LogoGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem 1.5rem;
  align-items: center;
  justify-items: center;
  align-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 0.75rem;
  }
`;

export const LogoItem = styled.div<{
  $cols?: number;
  $scale?: number;
  $keepColor?: boolean;
}>`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;

  img {
    filter: ${(props) =>
      props.$keepColor ? "none" : "brightness(0) invert(1)"};
    height: clamp(20px, 3vw, 36px); /* much smaller unified size */
    width: auto;
    max-width: 100%;
    object-fit: contain;
    transform: scale(${(props) => props.$scale || 1});
  }

  &:nth-child(3n) {
    transform: translateY(8px);
  }
  &:nth-child(4n) {
    transform: translateY(-10px);
  }
  &:nth-child(5n) {
    transform: translateY(6px);
  }
`;
