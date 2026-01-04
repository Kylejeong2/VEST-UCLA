"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  padding: 24px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    backdrop-filter: blur(12px);
    mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
    pointer-events: none;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
    z-index: -1;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 16px 32px;
  border-radius: 32px;
  border: 2px solid #1f00ff;
  background: linear-gradient(90deg, rgba(0, 76, 255, 0.3) 0%, rgba(39, 0, 147, 0.3) 100%);
  
  @media (max-width: 768px) {
    &.desktop {
      display: none;
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  color: rgba(239, 239, 239, 0.5);
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
  
  &:hover, &.active {
    color: #efefef;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
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
      background: #12fbbd;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-out;

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
    transition: all 0.3s ease-out;
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
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(31, 0, 255, 0.15) 100%);
    backdrop-filter: blur(20px);
    padding: 100px 32px;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    z-index: 101;
    overflow-y: auto;

    &.active {
      right: 0;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 24px;
      
      a {
        color: rgba(239, 239, 239, 0.7);
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
        transition: color 0.2s ease;
        
        &:hover, &.active {
          color: #efefef;
        }
      }
    }
  }
`;

// Legacy exports
export const Nav = styled.div``;
export const AbsoluteLinks = styled(Link)``;
