"use client";
import Image from "next/image";

import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  Edge,
  Edges,
  Title,
} from "./styles";
import { MaskText } from "@/components/LandingPage";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from "./constants";

const IntroSection = () => {
  const isMobile = useIsMobile();

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const edgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <Wrapper>
      <Inner>
        <HeaderMainText
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
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
        </HeaderMainText>

        <Edges>
          {edges.map((edge, i) => (
            <Edge
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={edgeVariants}
            >
              <Title>
                <Image src={edge.icon} alt="icon" width={24} height={24} />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;
