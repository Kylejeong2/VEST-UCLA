"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  background: #0a0a0a;
  padding: 4rem 0;
  margin: 4rem 0;
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #989898;
    margin-bottom: 1rem;
  }
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  align-items: stretch;
  justify-items: stretch;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LogoContainer = styled.div`
  height: 180px;
  width: 100%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f0f0f;
  padding: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
