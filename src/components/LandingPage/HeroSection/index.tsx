"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  HeroTextContainer,
  ContentContainer,
  BlurCircle,
} from "./styles";
import { GetStartedButton } from "@/components/LandingPage";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  mobileParagraphPhrases,
  mobilePhrases,
  mobileSubPhrases,
  paragraphPhrases,
  phrases,
  subPhrases,
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
              {/* Applications CTA */}
              <div className="applications-cta">
                <p className="applications-text">
                  Applications for Fall 2025 are now open.
                </p>
                <GetStartedButton
                  padding={isMobile ? "0.75rem 1.25rem" : "0.9rem 1.75rem"}
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfmxpRSWgqeIeBbObdA_T4oWLiFXqqcGv_cGFvM85PUbySx9g/viewform"
                  label="Apply Now"
                  target="_blank"
                />
              </div>
            </div>
            <div className="bottom-content">
              <div className="left-content">
                {isMobile ? (
                  <>
                    <MaskText phrases={mobileSubPhrases} tag="h2" />
                    <MaskText phrases={mobileParagraphPhrases} tag="p" />
                  </>
                ) : (
                  <>
                    <MaskText phrases={subPhrases} tag="h2" />
                    <MaskText phrases={paragraphPhrases} tag="p" />
                  </>
                )}
              </div>
              <div className="right-content">
                <GetStartedButton
                  padding={isMobile ? "0.75rem 1.5rem" : "1rem 2rem"}
                />
              </div>
            </div>
          </HeroTextContainer>
        </ContentContainer>
        {/* <Divider /> */}
        {/* <ImageContainer>
            <Spline scene="https://prod.spline.design/84fjfvzP2Mn0uFeQ/scene.splinecode" />
          </ImageContainer> */}
      </Inner>
      <BlurCircle />
    </Wrapper>
  );
};

export default HeroSection;
