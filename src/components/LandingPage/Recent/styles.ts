"use client";
import { styled } from "styled-components";
import Link from "next/link";

export const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1236px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  
  @media (max-width: 768px) {
    gap: 32px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 72px;
  font-weight: 600;
  line-height: 1;
  
  .white {
    background: linear-gradient(180deg, #ffffff 0%, #adceff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .gradient {
    background: linear-gradient(90deg, #12fbbd 0%, #50b8f5 28.846%, #2b75ff 50.962%, #9114ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  
  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

export const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 30px;
  border-radius: 24px;
  background: linear-gradient(180deg, #0074e1 0%, #1f00ff 100%);
  box-shadow: 0px 0px 30px 0px #7843ff, inset 0px 0px 8px 0px #efefef;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  span {
    color: #efefef;
    font-size: 20px;
    font-weight: 400;
  }
  
  svg {
    color: #efefef;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 40px 0px #7843ff, inset 0px 0px 8px 0px #efefef;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    
    span {
      font-size: 16px;
    }
  }
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: linear-gradient(90deg, rgba(0, 76, 255, 0.3) 0%, rgba(39, 0, 147, 0.3) 100%);
  box-shadow: inset 0px 0px 30px 0px rgba(239, 239, 239, 0.25);
  overflow: hidden;
`;

export const EventImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
`;

export const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  flex: 1;
  gap: 16px;
`;

export const EventTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  color: #efefef;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const EventDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(239, 239, 239, 0.7);
`;

export const EventDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(239, 239, 239, 0.5);
`;

// Legacy exports
export const EventsContainer = styled.div``;
export const Subtitle = styled.p``;
