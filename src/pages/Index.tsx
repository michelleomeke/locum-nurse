
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import ForNurses from "@/components/ForNurses";
import ForFacilities from "@/components/ForFacilities";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <ForNurses />
      <ForFacilities />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
