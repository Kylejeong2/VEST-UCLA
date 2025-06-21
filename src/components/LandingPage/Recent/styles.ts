"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 6rem;
  background: rgba(0, 0, 0, 0);
  padding: 1rem 0;
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 1rem 1rem;
    width: calc(100% - 2rem);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  padding: 0 0rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--green);
  }

  div[class*="Body"] {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  p {
    color: var(--light-gray);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;