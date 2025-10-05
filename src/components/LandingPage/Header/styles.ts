"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding: 1rem 0;
  z-index: 200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  z-index: 102;

  @media (max-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
    
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--green);
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .25s ease-in-out;

      &:nth-child(1) {
        top: 4px;
      }

      &:nth-child(2) {
        top: 11px;
      }

      &:nth-child(3) {
        top: 18px;
      }
    }

    &.open {
      span:nth-child(1) {
        top: 11px;
        transform: rotate(135deg);
      }

      span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }

      span:nth-child(3) {
        top: 11px;
        transform: rotate(-135deg);
      }
    }
  }
`;

export const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 100;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: -320px;
    width: 320px;
    height: 100vh;
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
    box-shadow: -4px 0 30px rgba(0, 0, 0, 0.3);
    padding: 7rem 2.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 101;
    overflow-y: auto;

    &.active {
      right: 0;
    }

    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  margin-right: 0;

  a {
    color: var(--link-color) !important;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #4299e1;
      transition: width 0.3s ease;
    }
    
    &.active {
      color: #4299e1 !important;
      font-weight: 400;
      &:after {
        width: 100%;
      }
    }
    
    &:hover:after {
      color: #4299e1;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    &.desktop {
      display: none;
    }

    position: static;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    margin: 0;
    color: white;

    a {
      color: white;
      font-weight: 500;
      font-size: 1.125rem;
      position: relative;
      padding: 0.5rem 0;
      width: 100%;
      letter-spacing: 0.02em;
      transition: color 0.2s ease;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: #4299e1;
        transition: width 0.3s ease;
      }

      &.active {
        color: #4299e1 !important;
        font-weight: 500;
      }

      &:hover {
        color: #4299e1;
        &:after {
          width: 2rem;
        }
      }
    }
    span, p, div {
      color: white;
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.2s ease;

  &:hover {
    color: var(--blue);
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;
