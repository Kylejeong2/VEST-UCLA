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
    font-size: 4rem;
    font-weight: 600;
    color: #4299e1;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const GroupPhotoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 3rem;
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
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: left;
  
  p {
    color: #efefef;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    
    p {
      font-size: 1rem;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #4299e1;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const BoardSection = styled.div`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const ClassSection = styled.div`
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
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
