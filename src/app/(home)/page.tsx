import {
  FAQ,
  Featured,
  Building,
  HeroSection,
  IntroSection,
  WhatYouDo,
  Timeline,
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
      <WhatYouDo />
      <Building />
      <TrustedBy />
      <Learn />
      <div id="intro">
        <IntroSection />
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
