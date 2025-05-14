"use client";
import { styled } from "styled-components";
import hero_background from "../../../../public/images/grid_background.png";

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
  background: url(${hero_background.src}) no-repeat;
  width: 100%;
  background-position: top center;
  background-size: 100% auto;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const TeamHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 7rem;
    font-weight: 600;
    padding: 0 8rem;
    line-height: 1;
    color: #4299e1;
    margin-top: 8rem;
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    h1 {
      font-size: 7rem;
    }
  }
`;

export const GroupPhotoContainer = styled.div`
  // max-width: calc(100% - 8rem);
  margin: 0 auto 4rem;
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const TeamDescription = styled.div`
  // max-width: calc(100% - 8rem);
  margin: 0 auto 4rem;
  text-align: left;
  
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
    margin-bottom: 3rem;

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--green);
  margin-inline: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const BoardSection = styled.div`
  margin-bottom: 6rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const ClassSection = styled.div`
  margin-bottom: 4rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const BoardCard = styled.div`
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  justify-content: flex-start;
`;

export const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 2rem; 
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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
