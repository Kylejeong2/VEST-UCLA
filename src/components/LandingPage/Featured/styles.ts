'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem 0;
  background: var(--Background);
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const ScrollingWrapper = styled.div`
  display: flex;
  height: 100%;
  width: fit-content;
  animation: scroll 20s linear infinite;

  .scroll-group {
    height: 100%;
    display: flex;
    align-items: center;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;