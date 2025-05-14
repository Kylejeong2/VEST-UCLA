"use client";

import React from "react";
import {
  JoinUsWrapper,
  JoinUsTitle,
  Subheading,
  JoinUsText,
  WhatWeDoTitle,
  QuarterlySection,
  QuarterlyIcon,
  QuarterlyTitle,
  QuarterlyText,
  QuarterlyDesc,
  QuarterlyVerticalLine,
  BlurCircle,
  Inner
} from "./styles";
import ImageCarousel from "../../imagecarousel";

const JoinUsComponent = () => {
  return (
    <JoinUsWrapper>
      <Inner>
        <JoinUsTitle>Join Us</JoinUsTitle>
        <Subheading>Join UCLA's Premier Startup & VC Organization.</Subheading>
        <JoinUsText>
          Ready to build, learn, and grow alongside UCLA's startup community? At VEST, we're looking for curious, driven students who are excited to explore entrepreneurship—whether you're a first-time founder, a product thinker, or just startup-curious.
        </JoinUsText>
        <WhatWeDoTitle>What We Do</WhatWeDoTitle>
        <ImageCarousel />
        <QuarterlySection>
          <QuarterlyIcon>🛠️</QuarterlyIcon>
          <QuarterlyTitle>Quarterly<br/>Projects</QuarterlyTitle>
          <QuarterlyVerticalLine />
          <QuarterlyText>
            <QuarterlyDesc>
              Every quarter, members team up to tackle real-world problems by building MVPs, mock startups, or internal tools. These projects are a space to experiment, learn, and push your creativity.
            </QuarterlyDesc>
          </QuarterlyText>
        </QuarterlySection>
      </Inner>
      <BlurCircle />
    </JoinUsWrapper>
  );
};

export default JoinUsComponent;
