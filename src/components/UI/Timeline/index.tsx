'use client';
import Image from 'next/image';
import { Wrapper, Inner, Header, TimelineContainer } from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { desktopHeaderPhrase, desktopParagraphPhrase, mobileHeaderPhrase, mobileParagraphPhrase } from './constants';

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
          {/* Your timeline image will go here */}
          <Image 
            src="/path-to-your-timeline-image.png"
            alt="BVL Timeline"
            fill
            style={{ objectFit: 'contain' }}
          />
        </TimelineContainer>
      </Inner>
    </Wrapper>
  );
};

export default Timeline;
