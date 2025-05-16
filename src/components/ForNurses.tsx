import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HeroNurse from "@/assets/nurses.png";

const ForNurses = () => {
  const benefits = [
    "Higher pay rates with transparent pricing",
    "Flexible scheduling to match your lifestyle",
    "Direct communication with healthcare facilities",
    "Instant job alerts for shifts matching your profile",
    "Secure and timely payments",
    "Build relationships with top healthcare employers",
    "Streamlined credentialing process",
    "Professional liability insurance options",
  ];

  return (
    <section id="for-nurses" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 md:order-1">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">For Nurses</h2>
              <p className="text-lg text-gray-600 mb-8">
                Take control of your nursing career with access to high-paying shifts at top healthcare facilities nationwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-healthcare-500" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-start">
              <Button className="bg-healthcare-600 hover:bg-healthcare-700 text-white btn-hover-effect px-6 py-5">
                Join as a Nurse
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-healthcare-200 rounded-full blur-xl opacity-60"></div>
              <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={HeroNurse}
                  alt="Nurse at work"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForNurses;
