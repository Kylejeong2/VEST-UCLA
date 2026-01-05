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

export const TeamHeader = styled.h1`
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

export const GroupPhotoContainer = styled.div`
  margin: 0 auto 100px;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(90deg, rgba(30, 70, 200, 0.2) 0%, rgba(50, 30, 110, 0.2) 100%);
  box-shadow: inset 0px 0px 30px 0px rgba(239, 239, 239, 0.15);
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    border-radius: 16px;
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
`;

export const TeamTitle = styled.h2`
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
  }
`;

export const TeamDescription = styled.div`
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

export const SectionTitle = styled.h2`
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
  }
`;

export const BoardSection = styled.div`
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const ClassSection = styled.div`
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
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
  gap: 24px;
  max-width: 1200px;
  margin: 0 0;
  justify-items: center;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
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
