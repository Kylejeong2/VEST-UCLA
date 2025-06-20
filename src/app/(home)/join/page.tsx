"use client";

import dynamic from "next/dynamic";
import { styled } from "styled-components";

const JoinUs = dynamic(() => import("@/components/LandingPage/JoinUs"), { ssr: false });
// const TimelineComponent = dynamic(() => import("@/components/timeline"), { ssr: false });

export default function JoinUsPage() {
  return (
    <main>
      <JoinUs />
      <ClosedApplicationsMessage>
        <p>Applications for VEST are currently closed. Check back later for our Fall 2025 recruitment cycle!</p>
      </ClosedApplicationsMessage>
      {/* <TimelineContent>
        <TimelineComponent />
      </TimelineContent> */}
    </main>
  );
}

// Styled component for the closed applications message
const ClosedApplicationsMessage = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 5;
  
  p {
    color: #4299e1;
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    p {
      font-size: 1.25rem;
    }
  }
`;

// Adding a container just for the timeline content
const TimelineContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 5; 
`;
