import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RoadmapSection from "@/components/RoadmapSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <Header />
      <Hero />
      <AboutSection />
      <div className="bg-dot bg-repeat">
        <HowItWorksSection />
        <RoadmapSection />
      </div>
    </main>
  );
}
