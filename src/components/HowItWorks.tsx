import { Button } from "@/components/ui/button";
import HeroNurse from "../assets/how-it-works-nurse.png";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold">How LocumNurse Works</h2>
          <p className="text-lg text-gray-600">
            Our platform makes it simple for nurses to find shifts and for healthcare facilities to find qualified staff.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Image Section */}
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-locum-200 rounded-full blur-xl opacity-60"></div>
              <img
                src={HeroNurse}
                alt="Nurse using laptop"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto rounded-2xl shadow-lg mx-auto"
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="space-y-10 sm:space-y-12">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">
                  Sign up and build your professional profile highlighting your skills, experience, certifications, and availability.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Browse Opportunities</h3>
                <p className="text-gray-600">
                  Explore thousands of shifts and assignments that match your qualifications, preferences, and desired location.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Apply & Get Matched</h3>
                <p className="text-gray-600">
                  Apply to positions with a single click. Our intelligent matching system recommends you to facilities looking for your skills.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work & Get Paid</h3>
                <p className="text-gray-600">
                  Accept offers, confirm shifts, and receive secure payments directly through our platform with complete transparency.
                </p>
              </div>
            </div>

            {/* Centered CTA Button */}
            <div className="flex justify-center pt-6">
              <Button className="bg-locum-600 hover:bg-locum-700 text-white btn-hover-effect px-6 py-5">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
