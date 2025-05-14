import React, { useEffect, useState } from "react";
import styled from "styled-components";

const images = [
  "/images/VEST-Logo-transbg.png",
  "/images/VEST-logo-white.svg",
  "/images/VEST-Logo-transbg.png",
  "/images/VEST-Logo-transbg.png",
  "/images/VEST-Logo-transbg.png",
];

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0 40px 190px;
  position: relative;
  min-height: 350px;
  overflow: visible;
  max-width: 1100px;
`;

const CarouselImage = styled.img<{ position: "left" | "center" | "right" }>`
  border-radius: 16px;
  background: #e7eaf1;
  color: #222;
  object-fit: contain;
  box-shadow: 0 6px 32px 0 rgba(0,0,0,0.10);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${({ position }) => {
    switch (position) {
      case "left":
        return "translate(-180%, -50%) scale(0.75)";
      case "center":
        return "translate(-50%, -50%) scale(1.07)";
      case "right":
        return "translate(80%, -50%) scale(0.75)";
      default:
        return "translate(-50%, -50%) scale(1)";
    }
  }};
  width: ${({ position }) => (position === "center" ? "480px" : "370px")};
  height: ${({ position }) => (position === "center" ? "350px" : "270px")};
  opacity: ${({ position }) => (position === "center" ? 1 : 0.8)};
  filter: ${({ position }) => (position === "center" ? "none" : "brightness(0.93)")};
  z-index: ${({ position }) => (position === "center" ? 2 : 1)};
  transition: transform 0.85s cubic-bezier(0.4,0,0.2,1), width 0.85s, height 0.85s, opacity 0.85s, filter 0.85s;
`;

const ImageCarousel: React.FC = () => {
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Only render left, center, right
  const leftIdx = (centerIdx - 1 + images.length) % images.length;
  const rightIdx = (centerIdx + 1) % images.length;

  return (
    <CarouselWrapper>
      <CarouselImage
        src={images[leftIdx]}
        alt="carousel-left"
        position="left"
        style={{ zIndex: 1 }}
      />
      <CarouselImage
        src={images[centerIdx]}
        alt="carousel-center"
        position="center"
        style={{ zIndex: 2 }}
      />
      <CarouselImage
        src={images[rightIdx]}
        alt="carousel-right"
        position="right"
        style={{ zIndex: 1 }}
      />
    </CarouselWrapper>
  );
};

export default ImageCarousel;
