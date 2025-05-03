
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForFacilities = () => {
  const benefits = [
    "Access to thousands of pre-vetted nursing professionals",
    "Quickly fill open shifts with qualified staff",
    "Reduce recruitment costs and time-to-hire",
    "Streamlined onboarding and credential verification",
    "Flexible staffing solutions for all facility types",
    "Data-driven matching for better healthcare outcomes",
    "Manage all shifts and personnel in one dashboard",
    "Custom reporting and analytics for workforce optimization"
  ];

  return (
    <section id="for-facilities" className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-locum-200 rounded-full blur-xl opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare facility"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-6">For Healthcare Facilities</h2>
            <p className="text-lg text-gray-600 mb-8">
              Find qualified nursing professionals to meet your staffing needs, reduce costs, and maintain quality patient care.
            </p>

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

            <Button className="bg-locum-600 hover:bg-locum-700 text-white btn-hover-effect px-6 py-5">
              Sign Up Your Facility
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForFacilities;
