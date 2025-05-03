"use client";
import { styled } from "styled-components";
import grid_background from "../../../../public/images/grid_background.png";

export const Wrapper = styled.section`
  margin-top: 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  min-height: calc(100vh - 6.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const Inner = styled.div`
  background: url(${grid_background.src}) no-repeat;
  background-position: top center;
  background-size: cover;
  width: 100%;
  padding: 4rem 1rem;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const EventsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 7rem;
    font-weight: 600;
    padding: 0 8rem;
    line-height: 1;
    color: #4299e1;
    margin: 4rem 0;
    text-align: center;
  }

  h2 {
    width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4299e1;
    margin: 0 auto;
    margin-bottom: 0.75rem;
    text-align: left;
  }
  
  p {
    width: 100%;
    color: #efefef;
    font-size: 1.75rem;
    font-weight: 400;
    margin: 0 auto;
    text-align: left;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    
    h1 {
      font-size: 7rem;
    }
    
    h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BlurCircle = styled.div`
  position: fixed;
  top: -800px;
  left: -400px;
  width: 1270px;
  height: 1270px;
  background-color: #1e3a8a;
  border-radius: 50%;
  filter: blur(250px);
  z-index: -1;
  pointer-events: none;
`;