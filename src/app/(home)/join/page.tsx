"use client";

import dynamic from "next/dynamic";
import { styled } from "styled-components";
import { GetStartedButton } from "@/components/LandingPage";

const JoinUs = dynamic(() => import("@/components/LandingPage/JoinUs"), {
  ssr: false,
});
// const TimelineComponent = dynamic(() => import("@/components/timeline"), { ssr: false });

export default function JoinUsPage() {
  return (
    <main>
      <JoinUs />
      {/* <OpenApplicationsRow>
        <p className="applications-text">
          Applications for Fall quarter are now open.
        </p>
        <GetStartedButton
          padding="0.9rem 1.75rem"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfmxpRSWgqeIeBbObdA_T4oWLiFXqqcGv_cGFvM85PUbySx9g/viewform"
          label="Apply Now"
          target="_blank"
        />
      </OpenApplicationsRow> */}
      {/* <TimelineContent>
        <TimelineComponent />
      </TimelineContent> */}
    </main>
  );
}

// Styled component for the open applications row CTA
const OpenApplicationsRow = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  position: relative;
  z-index: 5;

  .applications-text {
    color: #efefef;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
    .applications-text {
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
