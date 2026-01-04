"use client";
import { styled } from "styled-components";

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
  gap: 60px;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 72px;
  font-weight: 600;
  line-height: 1.1;
  max-width: 594px;
  flex-shrink: 0;
  
  .white {
    background: linear-gradient(180deg, #ffffff 0%, #adceff 44.231%);
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
    max-width: 100%;
  }
`;

export const HeaderDescription = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: #efefef;
  max-width: 594px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 18px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px 30px;
  border-radius: 24px;
  background: linear-gradient(90deg, rgba(0, 76, 255, 0.3) 0%, rgba(39, 0, 147, 0.3) 100%);
  box-shadow: inset 0px 0px 30px 0px rgba(239, 239, 239, 0.25);
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 16px;
  }
`;

export const CardIcon = styled.div`
  color: #12fbbd;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: #efefef;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(239, 239, 239, 0.7);
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Legacy exports for backwards compatibility
export const Header = styled.div``;
export const HeaderContainer = styled.div``;
export const Edges = styled.div``;
export const Edge = styled.div``;
export const Title = styled.div``;
export const BriefNote = styled.div``;
export const BannerCtn = styled.div``;
