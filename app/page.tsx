import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <Header />
      <Hero />
      <div className="bg-dot bg-repeat w-screen">
        <AboutSection />
        <HowItWorksSection />
        {/* <RoadmapSection /> */}
        <Footer />
      </div>
    </main>
  );
}
