"use client";

import React from "react";
import Image from "next/image";
import { Wrapper, Inner, Header, LogoGrid, LogoItem } from "./styles";
import { companies } from "./logos";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";

const WhereWeWork = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={["Where We Work"]} tag={isMobile ? "h3" : "h2"} />
        </Header>
        <LogoGrid>
          {companies.map((company, idx) => (
            <LogoItem
              key={idx}
              title={company.name}
              $cols={company.cols}
              $scale={company.scale}
              $keepColor={company.keepColor}
            >
              {company.logo && (
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={80}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              )}
            </LogoItem>
          ))}
        </LogoGrid>
      </Inner>
    </Wrapper>
  );
};

export default WhereWeWork;
