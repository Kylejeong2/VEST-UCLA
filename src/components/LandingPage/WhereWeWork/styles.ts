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
  gap: 36px;
  
  @media (max-width: 768px) {
    gap: 24px;
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
    background: linear-gradient(90deg, #12fbbd 79%, #50b8f5 83.654%, #2b75ff 96.154%, #9114ff 100%);
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

export const ImageCard = styled.div`
  padding: 20px 24px;
  border-radius: 36px;
  background: linear-gradient(90deg, rgba(0, 76, 255, 0.3) 0%, rgba(39, 0, 147, 0.3) 100%);
  box-shadow: inset 0px 0px 30px 0px rgba(239, 239, 239, 0.25);
  
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 24px;
  }
`;

// Legacy exports
export const Subtitle = styled.p``;
export const ImageContainer = styled.div``;
