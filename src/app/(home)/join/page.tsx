"use client";

import dynamic from "next/dynamic";
import { styled } from "styled-components";

const JoinUs = dynamic(() => import("@/components/LandingPage/JoinUs"), { ssr: false });
const TimelineComponent = dynamic(() => import("@/components/timeline"), { ssr: false });

export default function JoinUsPage() {
  return (
    <main>
      <JoinUs />
      <TimelineContent>
        <TimelineComponent />
      </TimelineContent>
    </main>
  );
}

// Adding a container just for the timeline content
const TimelineContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 5; /* Higher z-index to ensure it's above the BlurCircle */
`;
