import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #4299e1;
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #efefef;
  margin-bottom: 3rem;
  max-width: 800px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
