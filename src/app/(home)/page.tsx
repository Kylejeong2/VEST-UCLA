import {
  Featured,
  Building,
  HeroSection,
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
      <Building />
      <WhereWeWork />
      <Recent />
    </main>
  );
}
