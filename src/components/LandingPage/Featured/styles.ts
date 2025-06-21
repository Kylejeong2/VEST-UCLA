'use client';
import { styled } from 'styled-components';


export const Wrapper = styled.section`
  padding: 4rem 0;
  background: rgba(0, 0, 0, 0);
  position: relative;
  z-index: 3; /* Higher than Building's z-index of 2 */

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  font-family: "Inter", sans-serif;

  h2 {
    color: var(--link-color);
    font-size: 1.75rem;
    font-weight: 400;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 0 1rem;
    
    h2 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      padding: 0 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  
  .carousel-image {
    @media (max-width: 768px) {
      transform: scale(1.3);
      min-height: 100px;
    }
  }
  
  @media (max-width: 768px) {
    width: 120%;
    margin-left: -10%;
    height: auto;
    min-height: 100px;
  }
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