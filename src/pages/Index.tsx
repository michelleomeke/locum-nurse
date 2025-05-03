
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import ForNurses from "@/components/ForNurses";
import ForFacilities from "@/components/ForFacilities";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>LocumNurse - Connect Nurses With Healthcare Facilities</title>
        <meta 
          name="description" 
          content="LocumNurse is the premier marketplace connecting skilled nurses with healthcare facilities. Find high-paying shifts and qualified staff nationwide." 
        />
        <meta 
          name="keywords" 
          content="nurse staffing, healthcare staffing, nursing jobs, locum nurse, temporary nursing, medical staffing" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LocumNurse - Connect Nurses With Healthcare Facilities" />
        <meta property="og:description" content="Find flexible nursing opportunities or qualified healthcare staff on the leading nurse staffing marketplace." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <div className="bg-gradient-to-b from-white to-gray-50">
          <ForNurses />
          <ForFacilities />
        </div>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
