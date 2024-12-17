'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding-top: 7.75rem;

  @media (max-width: 768px) {
    padding-top: 5rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin-bottom: 6.25rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3.75rem;
    
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
  margin: 0 auto;

  img {
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 25rem;
  }
`;
