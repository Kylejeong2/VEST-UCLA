"use client";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
  padding-top: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;

export const QRContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px dashed var(--White, #fff);
`;

export const QRImageCtn = styled.div``;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    max-width: 19.5625rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const IconCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 3.75rem;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li.clickable {
    cursor: pointer;
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;
  cursor: pointer;

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h3 {
      font-size: 0.875rem;
    }
  }
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`;

export const ManifestoLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0;
`;

export const ManifestoLink = styled.a`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 5px;
  border: 1px solid #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const SignInButton = styled.button`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
