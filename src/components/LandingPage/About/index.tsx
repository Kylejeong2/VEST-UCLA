"use client";
import React from "react";
import {
  AboutWrapper,
  AboutTitle,
  TopRow,
  AboutImage,
  AboutText,
  WelcomeTitle,
  StatsRow,
  StatBox,
  StatNumber,
  StatLabel,
  ImagesGrid,
  GridImage
} from "./styles";

const About = () => (
  <AboutWrapper>
      <AboutTitle>About</AboutTitle>
      <TopRow>
        <AboutImage>picture here</AboutImage>
        <AboutText>
          <WelcomeTitle>Welcome to VEST at UCLA.</WelcomeTitle>
          One of UCLA's pioneering startup clubs—a student-led community for builders, founders, and curious minds. We bring together driven individuals to explore entrepreneurship through hands-on projects and a tight-knit support network.
        </AboutText>
      </TopRow>
      <StatsRow>
        <StatBox>
          <StatNumber>XX</StatNumber>
          <StatLabel>Company collaborations</StatLabel>
        </StatBox>
        <StatBox>
          <StatNumber>XX</StatNumber>
          <StatLabel>Events</StatLabel>
        </StatBox>
        <StatBox>
          <StatNumber>XX</StatNumber>
          <StatLabel>Products launched</StatLabel>
        </StatBox>
        <StatBox>
          <StatNumber>$XX</StatNumber>
          <StatLabel>Total valuations</StatLabel>
        </StatBox>
      </StatsRow>
      <ImagesGrid>
        <GridImage>picture here</GridImage>
        <GridImage>picture here</GridImage>
        <GridImage>picture here</GridImage>
        <GridImage>picture here</GridImage>
      </ImagesGrid>
    </AboutWrapper>
);

export default About;
