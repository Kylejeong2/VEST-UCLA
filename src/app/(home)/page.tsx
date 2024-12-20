import {
  FAQ,
  Featured,
  Building,
  HeroSection,
  IntroSection,
  JoinSection,
  WhatYouDo,
  Timeline,
  Learn,
} from "@/components/LandingPage";

export default function Home() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
      </div>
      <Featured />
      <WhatYouDo />
      <Building />
      <Learn />
      <div id="intro">
        <IntroSection />
      </div>
      <div id="join">
        <JoinSection />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </main>
  );
}
