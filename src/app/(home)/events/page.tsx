"use client";

import Events from "@/components/LandingPage/Events";
import { styled } from "styled-components";

export default function EventsPage() {
  return (
    <Wrapper>
      <Inner>
        <Events />
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 0;
  background: var(--Background);
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;
