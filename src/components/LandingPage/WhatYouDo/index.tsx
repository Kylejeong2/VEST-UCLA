"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ImageCtn,
  TextCtn,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from "./constants";

const WhatYouDo = () => {
  const isMobile = useIsMobile();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />
          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        <Offers>
          {offers.map((offer, i) => (
            <OfferCard
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <ImageCtn>
                <Image 
                  src={offer.illustration} 
                  width={480}
                  height={480}
                  alt={offer.title} 
                />
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={new Array(offer.title)} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default WhatYouDo;
