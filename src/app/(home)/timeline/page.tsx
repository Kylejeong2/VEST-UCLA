import { Timeline } from "@/components/LandingPage";
import { styled } from "styled-components";

export default function TimelinePage() {
  return (
    <Wrapper>
        <Timeline />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 4rem 0;
  background: var(--Background);
`;