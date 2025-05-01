"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Pill,
  HeroTextContainer,
  ContentContainer,
  Divider,
  ImageContainer,
} from "./styles";
import ic_chevron_right from "../../../../public/svgs/ic_chevron_right.svg";
import { GetStartedButton } from "@/components/LandingPage";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from "./constants";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ContentContainer>
          <HeroTextContainer>
            <div className="top-content">
              {isMobile ? (
                <>
                  <MaskText phrases={mobilePhrases} tag="h1" />
                </>
            ) : (
              <>
                <MaskText phrases={phrases} tag="h1" />
              </>
            )}
          </div>
          <div className="bottom-content">
            <div className="left-content">
              {isMobile ? (
                <>
                  <MaskText phrases={mobileParagraphPhrases} tag="p" />
                </>
              ) : (
                <>
                  <MaskText phrases={paragraphPhrases} tag="p" />
                </>
              )}
            </div>
            <div className="right-content">
              <GetStartedButton padding="1rem 2rem" />
            </div>
          </div>
          </HeroTextContainer>
        </ContentContainer>
          {/* <Divider /> */}
          {/* <ImageContainer>
            <Spline scene="https://prod.spline.design/84fjfvzP2Mn0uFeQ/scene.splinecode" />
          </ImageContainer> */}
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
