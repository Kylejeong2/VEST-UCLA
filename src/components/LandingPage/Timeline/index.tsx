"use client";
import Image from "next/image";
import { Wrapper, Inner, Header, TimelineContainer } from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";

const Timeline = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>
        <TimelineContainer>
          <Image
            src="/VEST_Recruiting.png"
            alt="VEST Timeline"
            fill
            style={{ objectFit: "contain" }}
          />
        </TimelineContainer>
      </Inner>
    </Wrapper>
  );
};

export default Timeline;
