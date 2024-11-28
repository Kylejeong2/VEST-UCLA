'use client';
import Image from 'next/image';
import { 
  Wrapper, 
  Inner, 
  Pill, 
  HeroTextContainer,
  ContentContainer,
  Divider,
  ImageContainer 
} from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ContentContainer>
          <div className="left-content">
            <Pill>
              <span>Introducing UCLA&apos;s Premier VC/Startup Club</span>
              <Image src={ic_chevron_right} alt="chevron-right" />
            </Pill>
            <HeroTextContainer>
              {isMobile ? (
                <>
                  <MaskText phrases={mobilePhrases} tag="h1" />
                  <MaskText phrases={mobileParagraphPhrases} tag="p" />
                </>
              ) : (
                <>
                  <MaskText phrases={phrases} tag="h1" />
                  <MaskText phrases={paragraphPhrases} tag="p" />
                </>
              )}
            </HeroTextContainer>
            <GetStartedButton padding="1rem 2rem" />
          </div>
          
          <Divider />
          
          <ImageContainer>
            {/* Add your hero image here */}
            <Image 
              src="/hero.png"
              alt="Hero Image"
              fill
              style={{ objectFit: 'cover' }}
            />
          </ImageContainer>
        </ContentContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
