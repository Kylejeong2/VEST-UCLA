"use client";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 6rem;
  background: rgba(0, 0, 0, 0);
  padding: 1rem 0;
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 4rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 1rem 1rem;
    width: calc(100% - 2rem);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0 0rem;
  margin-bottom: 3.5rem;

  .left-content{
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .right-content {
    width: 55%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .left-content {
      width: 100%;
      text-align: left;
      justify-content: flex-start;
    }

    .right-content {
      width: 100%;
      justify-content: flex-start;
      text-align: left;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--green);
  }

  div[class*="Body"] {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  p {
    max-width: 41.75rem;
    color: var(--light-gray);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 2.25rem;
      align-self: center;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  width: 100%;
  position: relative;
  width: 100%;
  height: 38.4375rem;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin: 0 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  font-family: "Inter", sans-serif;

  p {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    p {
      max-width: 100%;
      font-size: 0.9rem;
      line-height: 1.4rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: "Inter", sans-serif;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const BriefNote = styled.div`
  max-height: 54.75rem;
  padding: 8.25rem 4.5rem;
  background: var(--emerald);
  font-family: "Inter", sans-serif;

  p {
    color: var(--Background, #070606);
    font-size: 8rem;
    font-weight: 400;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    p {
      font-size: 3.75rem;
    }
  }
`;
