'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  width: 100%;
  background-position: top center;
  background-size: cover;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 6rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  
  .left-content {
    width: 50vw;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    .left-content {
      width: 100%;
      padding: 0 2rem;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  }
`;

export const ImageContainer = styled.div`
  width: 50vw;
  position: relative;
  height: 80vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;
