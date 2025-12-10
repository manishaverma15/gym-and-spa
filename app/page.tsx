import AboutSection from "@/components/sections/About/AboutSection";
import HeroSection from "@/components/sections/Hero/HeroSection";
import ProgramsSection from "@/components/sections/Programs/ProgramsSection";
import TrainersSection from "@/components/sections/Trainers/TrainersSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
    </div>
  );
}
