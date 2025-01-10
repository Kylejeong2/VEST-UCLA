"use client"

import { Directors } from "@/components/LandingPage";
import { styled } from "styled-components";

export default function TeamPage() {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Our Team</h1>
          <p>Meet the talented individuals behind VEST @ UCLA</p>
        </Header>
        <Directors />
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 0;
  background: var(--Background);
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`; 