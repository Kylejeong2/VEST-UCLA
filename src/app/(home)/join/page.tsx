"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/LandingPage/Footer";
import { styled } from "styled-components";

const JoinUs = dynamic(() => import("@/components/LandingPage/JoinUs"), { ssr: false });
const TimelineComponent = dynamic(() => import("@/components/timeline"), { ssr: false });

export default function JoinUsPage() {
  return (
    <Wrapper>
      <Inner>
        <JoinUs />
        <TimelineComponent />
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  background: radial-gradient(ellipse at center, rgba(10,25,47,0.97) 0%, #050e1a 100%);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 100px), repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 100px);
    pointer-events: none;
    z-index: 1;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;
