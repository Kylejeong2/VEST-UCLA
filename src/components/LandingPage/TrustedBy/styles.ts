"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  background: #0a0a0a;
  padding: 4rem 0;
  margin: 4rem 0;
`;

export const Inner = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  padding: 0 2rem;

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
  height: 100px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    height: 200px;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f0f0f;
  padding: 0.5rem;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
    padding: 1rem;
  }
`;
