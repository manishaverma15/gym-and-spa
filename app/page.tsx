import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/About/AboutSection";
import ContactUs from "@/components/sections/ContactUs/ContactUs";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import Membership from "@/components/sections/MemberShip/MemberShip";
import ProgramsSection from "@/components/sections/Programs/ProgramsSection";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import TrainersSection from "@/components/sections/Trainers/TrainersSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <Membership />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
