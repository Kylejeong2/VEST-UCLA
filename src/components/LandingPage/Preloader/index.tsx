"use client";
import Image from "next/image";
import vest_logo from "../../../../public/logo/VEST_LOGO_TRANSPARENT.png";

import { Wrapper, Inner, SecondOverlay } from "./styles";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIsMobile } from "../../../../libs/useIsMobile";

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ["V", "E", "S", "T"];
  const isMobile = useIsMobile();

  const spans = useRef<any>([]); 
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Skip animation on mobile
    if (isMobile) {
      setComplete(true);
      return;
    }

    const tl = gsap.timeline();
    tl.to(imageRef.current, {
      rotate: "360deg",
      ease: "back.out(1.7)",
      duration: 0.7,
    });
    tl.to(imageRef.current, {
      y: "-100%",
      ease: "back.out(1.7)",
      duration: 0.5,
    });
    tl.to(spans.current, {
      y: "-100%",
      ease: "back.out(1.7)",
      duration: 0.7,
      stagger: 0.03,
    });
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: "top",
      ease: "back.out(1.7)",
      duration: 0.5,
      stagger: 0.1,
      onComplete: () => {
        setComplete(true);
      },
    });

    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 0.5,
      delay: -0.4,
    });
  }, [setComplete, isMobile]);

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={vest_logo} alt="vest logo" />
          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => {
                  spans.current[i] = element;
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
