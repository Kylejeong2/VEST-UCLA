import styled from "styled-components";
import hero_background from "../../../../public/images/grid_background.png";


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

export const JoinUsWrapper = styled.div`
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
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const WhatWeDoTitle = styled.h2`
  color: #4299e1;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: left;
  width: 100%;
  max-width: 1100px;
  padding-left: 190px;
  position: relative;
  z-index: 3;
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
  z-index: -10;
  pointer-events: none;
`;

export const JoinUsTitle = styled.h1`
  font-size: 7rem;
  font-weight: 600;
  color: #4299e1;
  margin: 4rem 0;
  text-align: center;
  line-height: 1;
  width: 100%;
  position: relative;
  z-index: 3;
`;

export const Subheading = styled.h2`
  width: 100%;
  font-size: 1.75rem;
  font-weight: 600;
  color: #4299e1;
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: left;
  max-width: 1100px;
  padding-left: 20px;
  position: relative;
  z-index: 3;
`;

export const JoinUsText = styled.p`
  color: #efefef;
  font-size: 1.75rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 60px;
  text-align: left;
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
  z-index: 3;
`;

export const PictureGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 32px;
  margin-top: 60px;
  margin-bottom: 30px;
`;

export const PictureCard = styled.div`
  background: #efefef;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border-radius: 10px;
  min-width: 170px;
  min-height: 130px;
  max-width: 350px;
  max-height: 250px;
  width: ${props => props.style && props.style.width ? props.style.width : '220px'};
  height: ${props => props.style && props.style.height ? props.style.height : '160px'};
  box-shadow: 0 6px 32px 0 rgba(0,0,0,0.08);
`;

export const QuarterlySection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  max-width: 1100px;
  margin: 40px auto 0;
  padding: 24px 15%;
  gap: 48px;
  position: relative;
  z-index: 3;
`;

export const QuarterlyVerticalLine = styled.div`
  width: 2px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const QuarterlyIcon = styled.div`
  font-size: 3rem;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const QuarterlyText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const QuarterlyTitle = styled.h3`
  color: #efefef;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.3;
`;

export const QuarterlyDesc = styled.p`
  color: #efefef;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
`;
