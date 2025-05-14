"use client";
import styled from "styled-components";

export const GridBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(ellipse at center, rgba(10,25,47,0.97) 0%, #050e1a 100%);
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 100px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 100px);
    pointer-events: none;
    z-index: 1;
  }
`;

export const AboutWrapper = styled.div`
  min-height: 100vh;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h1`
  font-size: 7rem;
  font-weight: 600;
  color: #67b7ff;
  margin: 4rem 0 3.5rem 0;
  text-align: center;
  line-height: 1;
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-bottom: 60px;
  width: 100%;
  padding: 0 20px;
`;

export const AboutImage = styled.div`
  background: #d8dbe2;
  color: #222;
  border-radius: 16px;
  width: 380px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

export const AboutText = styled.div`
  color: #fff;
  max-width: 500px;
  font-size: 1.15rem;
  line-height: 1.6;
  text-align: left;
`;

export const WelcomeTitle = styled.span`
  color: #67b7ff;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
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
  max-width: 900px;
  width: 90%;
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
  color: #fff;
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
  font-size: 1.02rem;
  color: #b9d4f6;
  font-weight: 500;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  /* Spacing above and below pictures */
  margin: 60px auto 80px auto;
  max-width: 1000px;
  width: 90%;
  padding: 0 20px;
`;

export const GridImage = styled.div`
  background: #d8dbe2;
  color: #222;
  border-radius: 16px;
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;
