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
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <Timeline />
      <FAQ />
    </main>
  );
}
