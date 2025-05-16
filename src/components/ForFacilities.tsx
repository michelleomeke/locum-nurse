import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroNurse from "@/assets/facility.png";

const ForFacilities = () => {
  const benefits = [
    "Access to thousands of pre-vetted nursing professionals",
    "Quickly fill open shifts with qualified staff",
    "Reduce recruitment costs and time-to-hire",
    "Streamlined onboarding and credential verification",
    "Flexible staffing solutions for all facility types",
    "Data-driven matching for better healthcare outcomes",
    "Manage all shifts and personnel in one dashboard",
    "Custom reporting and analytics for workforce optimization",
  ];

  return (
    <>
      <section id="for-facilities" className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="order-1 md:order-1">
              <div className="relative">
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-locum-200 rounded-full blur-xl opacity-60"></div>
                <img
                  src={HeroNurse}
                  alt="Healthcare facility"
                  className="w-full h-auto max-w-md mx-auto md:max-w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="order-2 md:order-2">
              <div className="text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  For Healthcare Facilities
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Find qualified nursing professionals to meet your staffing needs, reduce costs, and maintain quality patient care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-locum-500" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <Button className="bg-locum-600 hover:bg-locum-700 text-white btn-hover-effect px-6 py-5">
                  Sign Up Your Facility
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-12 text-gray-900">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 text-left">
            {[
              {
                q: "Can individuals who need a nurse at home also use LocumNurse?",
                a: "Yes! Individuals looking for home care nurses can sign up as a facility and request personalized nursing care based on their needs.",
              },
              {
                q: "How do healthcare facilities get matched with nurses?",
                a: "LocumNurse uses data-driven algorithms to match facilities with qualified and available nurses based on specialty, availability, and location.",
              },
              {
                q: "Is there a fee for signing up on LocumNurse?",
                a: "Creating an account is free. Fees are applied when you successfully book a nurse or request a shift fulfillment.",
              },
              {
                q: "Are the nurses on LocumNurse verified?",
                a: "Yes. All nurses undergo credential verification, background checks, and licensing validation before being added to the platform.",
              },
              {
                q: "Can I manage multiple locations or branches from one account?",
                a: "Absolutely. Our dashboard allows you to manage shifts, staff, and reporting across multiple facility locations from a single account.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="border border-gray-200 rounded-lg px-6 py-4 shadow-sm transition-all open:shadow-md open:bg-gray-50"
              >
                <summary className="cursor-pointer text-lg font-medium text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-2 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ForFacilities;
