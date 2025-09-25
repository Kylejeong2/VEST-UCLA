"use client";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
  padding-bottom: 1rem;
  padding-top: 3rem;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
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
  padding: 2rem 0 2rem;
  gap: 1rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
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
    gap: 2rem;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h2 {
    width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4299e1;
    margin: 0 auto;
    text-align: left;
  }

  @media (max-width: 768px) {
    min-width: auto;

    h2 {
      font-size: 1.75rem;
    }
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4299e1;
    margin: 0 auto;
    text-align: left;
  }

  li.clickable {
    cursor: pointer;
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      color: #4299e1;
    }

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background-color: #4299e1;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover::after {
      transform: scaleX(1);
      color: #4299e1;
    }

    @media (max-width: 768px) {
      gap: 0.5rem;

      h2 {
        font-size: 1.75rem;
      }
    }
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.2;
    color: #efefef;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;
  cursor: pointer;

  h2 {
    width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    color: #4299e1;
    margin: 0 auto;
    text-align: left;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    h2 {
      font-size: 1.75rem;
    }
  }
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #efefef;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }
`;

export const ManifestoLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem !important;
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

export const ManifestoLink = styled.a`
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #2165c8, #0a2040);
  border-radius: 76px;
  box-shadow:
    0px 4px 12px 0px rgba(0, 0, 0, 0.1),
    0px 0px 36px 6px rgba(55, 125, 226, 1);
  border: 0.2px solid #efefef;
  backdrop-filter: blur(3px);
  mix-blend-mode: screen;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const SignInButton = styled.button`
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #2165c8, #0a2040);
  border-radius: 76px;
  box-shadow:
    0px 4px 12px 0px rgba(0, 0, 0, 0.1),
    0px 0px 36px 6px rgba(55, 125, 226, 1);
  border: 0.2px solid #efefef;
  backdrop-filter: blur(3px);
  mix-blend-mode: screen;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  svg {
    width: 32px;
    height: 32px;
    fill: #efefef;
  }
`;
