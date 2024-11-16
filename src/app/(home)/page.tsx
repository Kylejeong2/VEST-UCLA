import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  Timeline,
} from '@/components';

export default function Home() {
  return (
    <main>
      <div id="hero">
        <HeroSection />
      </div>
      <Featured />
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
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
