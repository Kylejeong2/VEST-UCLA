"use client";
import styled from "styled-components";
import hero_background from "../../../../public/images/grid_background.png";

// Removing the CSS-grid background and replacing with image-based grid
// export const GridBackground = styled.div`
//   position: fixed;
//   inset: 0;
//   z-index: -1;
//   background: radial-gradient(ellipse at center, rgba(10,25,47,0.97) 0%, #050e1a 100%);
//   &:before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 100px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 100px);
//     pointer-events: none;
//     z-index: 1;
//   }
// `;

export const AboutWrapper = styled.div`
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

export const AboutTitle = styled.h1`
  font-size: 7rem;
  font-weight: 600;
  color: #4299e1;
  margin: 4rem 0 3.5rem 0;
  text-align: center;
  line-height: 1;
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 60px;
  width: 100%;
  padding: 0 20px;
`;

export const AboutImage = styled.div`
  background: #d8dbe2;
  color: #222;
  border-radius: 16px;
  height: 400px;
  aspect-ratio: 5/4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

export const AboutText = styled.div`
  // max-width: 500px;
  width: 100%;
  color: #efefef;
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0 auto;
  text-align: left;
`;

export const WelcomeTitle = styled.span`
  width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4299e1;
    margin: 0 auto;
    margin-bottom: 0.75rem;
    text-align: left;
  display: block;
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 0;
  background: rgba(0,0,0,0.22);
  border-radius: 20px;
  margin: 0 auto 70px auto;
  max-width: 1000px;
  width: 100%;
  aspect-ratio: 5/1;
  overflow: hidden;
  border: 1.5px solid #3a4c66;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

export const StatBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0 24px 0;
  background: transparent;
  color: #efefef;
  border-right: 1.5px solid #3a4c66;
  &:last-child {
    border-right: none;
  }
`;

export const StatNumber = styled.div`
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: #b9d4f6;
  font-weight: 400;
  text-align: center;
  line-height: 1.2;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  /* Spacing above and below pictures */
  margin: 60px auto 80px auto;
  width: 100%;
  padding: 0 20px;
`;

export const GridImage = styled.div`
  background: #efefef;
  color: #222;
  border-radius: 16px;
  width: 100%;
  aspect-ratio: 5/4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  
  // &:hover {
  //   transform: translateY(-5px);
  // }
`;

export const AboutParagraph = styled.p`
  margin-bottom: 1.25rem;
  color: #efefef;
  font-weight: 400;
  text-align: left;
  `;