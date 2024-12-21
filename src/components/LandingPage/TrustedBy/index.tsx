"use client";

import React from "react";
import { Wrapper, Inner, Header, LogoGrid, LogoContainer } from "./styles";
import { trustedByLogos, headerText } from "./constants";
import Image from "next/image";
import Link from "next/link";
import MaskText from "@/components/Common/MaskText";

const TrustedBy = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={[headerText]} tag="h2" />
        </Header>
        <LogoGrid>
          {trustedByLogos.map((logo, index) => (
            <Link
              href={logo.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoContainer>
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </LogoContainer>
            </Link>
          ))}
        </LogoGrid>
      </Inner>
    </Wrapper>
  );
};

export default TrustedBy;
