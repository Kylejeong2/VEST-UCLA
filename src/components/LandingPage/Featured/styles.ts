"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: #efefef;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LogoTrack = styled.div`
  width: 100%;
  overflow: hidden;
  
  .logo-slider {
    display: flex;
    gap: 84px;
    align-items: center;
  }
`;

// Legacy export
export const ImageContainer = styled.div``;
