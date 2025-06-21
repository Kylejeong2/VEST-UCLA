'use client';
import Image from 'next/image';
import { animate, motion, useMotionValue } from 'framer-motion';
import { Wrapper, Inner, ImageContainer } from './styles';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

const Featured = () => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, bounds] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (!bounds.width) return; // Don't animate if width isn't available yet

    let controls;
    // Use the full width of a single image for the animation
    const finalPosition = -bounds.width;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [rerender, xTranslation, duration, bounds.width, mustFinish]);

  return (
    <Wrapper>
      <Inner>
        <h2>Trusted by Leading VCs, Startups, and Companies</h2>
        <ImageContainer>
          <div className="relative overflow-hidden">
            <motion.div
              style={{ x: xTranslation }}
              ref={ref}
              className="flex"
              onHoverStart={() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
              }}
              onHoverEnd={() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
              }}
            >
              {[1, 2].map((_, idx) => (
                <Image 
                  key={idx}
                  src="/images/Logo-Banner-white.png"
                  alt="Companies we're working with"
                  width={3600}
                  height={600}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                  className="carousel-image"
                  priority
                />
              ))}
            </motion.div>
          </div>
        </ImageContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;