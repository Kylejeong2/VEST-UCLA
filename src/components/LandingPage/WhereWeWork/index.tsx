"use client";

import React from "react";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Title,
  Subtitle,
  ImageContainer,
} from "./styles";

const WhereWeWork = () => {
  return (
    <Wrapper>
      <Inner>
        <Title>Where We Work</Title>
        <Subtitle>
          Our members have worked at top companies, from big tech to high-growth startups.
        </Subtitle>
        <ImageContainer>
          <Image
            src="/images/VEST-Companies-White-091725.png"
            alt="Companies where VEST members work"
            width={1200}
            height={600}
            priority={false}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default WhereWeWork;
