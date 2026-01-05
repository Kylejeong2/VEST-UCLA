"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding-top: 120px;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1236px;
  margin: 0 auto;
  padding: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: -200px;
  width: 1600px;
  height: 800px;
  background: radial-gradient(ellipse at center, rgba(31, 0, 255, 0.15) 0%, rgba(0, 116, 225, 0.08) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`;

export const BlurCircle = styled.div`
  position: fixed;
  top: -400px;
  left: -200px;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(31, 0, 255, 0.3) 0%, rgba(120, 67, 255, 0.1) 50%, transparent 70%);
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  pointer-events: none;
`;

export const EventsHeader = styled.h1`
  font-size: 72px;
  font-weight: 600;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 60px;
  
  .white {
    background: linear-gradient(180deg, #ffffff 0%, #adceff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .gradient {
    background: linear-gradient(90deg, #12fbbd 0%, #508af5 17.308%, #2b75ff 50.962%, #9114ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 100%;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const TextContainer = styled.div`
  margin: 0 auto 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  text-align: left;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const EventsTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  background: linear-gradient(180deg, #ffffff 0%, #adceff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  width: 500px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const EventsText = styled.div`
  margin: 6px 0 60px;
  text-align: left;
  width: 100%;
  max-width: 750px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  
  p {
    color: #efefef;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    
    p {
      font-size: 14px;
    }
  }
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: linear-gradient(90deg, rgba(30, 70, 200, 0.2) 0%, rgba(50, 30, 110, 0.2) 100%);
  box-shadow: inset 0px 0px 30px 0px rgba(239, 239, 239, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const EventImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex: 1;
  gap: 16px;
`;

export const EventTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: #efefef;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const EventDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(239, 239, 239, 0.7);
`;

export const EventDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 239, 239, 0.5);
`;


export const FooterWrapper = styled.div`
  margin-top: 80px;
`;
