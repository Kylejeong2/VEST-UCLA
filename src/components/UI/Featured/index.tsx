'use client';
import Image from 'next/image';
import big_banner from '../../../../public/images/big_banner.png';
import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      {/* add when we get vc connections */}
      {/* <Inner>
        <h2>Worked with</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="companies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner> */}
    </Wrapper>
  );
};

export default Featured;
