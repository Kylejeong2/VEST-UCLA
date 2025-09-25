import {
  Featured,
  Building,
  HeroSection,
  IntroSection,
  WhatYouDo,
  Learn,
  TrustedBy,
  Recent,
  WhereWeWork,
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
      <WhereWeWork />
      <Recent />
      {/* <TrustedBy /> */}
      {/* <Learn /> */}
      {/* <div id="intro">
        <IntroSection />
      </div> */}
    </main>
  );
}
