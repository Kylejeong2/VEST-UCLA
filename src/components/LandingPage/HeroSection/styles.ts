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

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
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

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 100;
  font-family: "Inter", sans-serif;
  line-height: 1.25;
  white-space: pre-line;

  h1 {
    font-size: 7rem;
    font-weight: 600;
    padding: 0 8rem;
    line-height: 1;
    color: #4299e1;
    margin-top: 8rem;
  }

  h2 {
    max-width: 41.75rem;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4299e1;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  p {
    max-width: 41.75rem;
    color: #efefef;
    font-size: 1.75rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 7rem;
      font-weight: 600;
      padding: 0 4rem;
      line-height: 1;
      white-space: pre-line;
    } 

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.75rem;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  width: 100%;
  min-height: calc(100vh - 14.5rem);

  .top-content {
    width: 100%;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .bottom-content {
    width: 80%;
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  
  .left-content{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 0 0 auto;
    text-align: left;
  }

  .right-content {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 0 auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;

    .top-content {
      width: 100%;
      margin-bottom: 3rem;
    }

    .bottom-content {
      width: 100%;
      padding: 3rem 2rem;
      align-items: center;
      text-align: center;
    }

    .left-content {
      width: 60%;
      text-align: left;
      justify-content: left;
      margin-top: 2rem;
    }

    .right-content {
      justify-content: center;
      width: 40%;
      margin-top: 2rem;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    margin: 1rem 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: calc(100vh - 14.5rem);
  border-radius: 50%;
  overflow: hidden;
  aspect-ratio: 1;
  margin: auto;

  // Make container smaller but keep spline large
  > div {
    transform: scale(1.5);
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vw;
    
    > div {
      transform: scale(1.2);
    }
  }
`;
