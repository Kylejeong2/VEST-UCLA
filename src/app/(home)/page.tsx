import {
  Featured,
  Building,
  HeroSection,
  IntroSection,
  WhatYouDo,
  Learn,
  TrustedBy,
} from "@/components/LandingPage";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
      </div>
      <Featured />
      {/* <WhatYouDo /> */}
      <Building />
      {/* <TrustedBy /> */}
      <Learn />
      <div id="intro">
        <IntroSection />
      </div>
    </main>
  );
}
