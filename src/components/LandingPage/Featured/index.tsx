'use client';
import Image from 'next/image';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ParallaxImages } from './styles';
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
  return (
    <Wrapper>
      {/* add when we get vc connections */}
      {/* https://pixlr.com/editor/ */}
      <Inner>
        {/* TODO: for some reason the images are super small */}
        <h2>Companies We've Worked With</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="companies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
