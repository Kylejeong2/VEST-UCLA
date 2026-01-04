"use client";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  padding: 160px 0 100px;

  @media (max-width: 768px) {
    padding: 120px 0 60px;
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

export const HeaderText = styled.h1`
  font-size: 72px;
  font-weight: 600;
  line-height: 1.1;
  max-width: 800px;
  
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
  }
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AccordionItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  background: linear-gradient(90deg, rgba(0, 76, 255, 0.2) 0%, rgba(39, 0, 147, 0.2) 100%);
  box-shadow: inset 0px 0px 20px 0px rgba(239, 239, 239, 0.1);
  overflow: hidden;
  transition: background 0.3s ease;
  
  &:hover {
    background: linear-gradient(90deg, rgba(0, 76, 255, 0.3) 0%, rgba(39, 0, 147, 0.3) 100%);
  }
`;

export const Question = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  color: #efefef;
  gap: 16px;

  svg {
    color: #12fbbd;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Answer = styled(motion.div)`
  color: rgba(239, 239, 239, 0.7);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 16px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
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
