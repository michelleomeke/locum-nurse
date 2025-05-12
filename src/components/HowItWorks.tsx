
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">How LocumNurse Works</h2>
          <p className="text-lg text-gray-600">
            Our platform makes it simple for nurses to find shifts and for healthcare facilities to find qualified staff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-locum-200 rounded-full blur-xl opacity-60"></div>
              <img
                src="https://media.istockphoto.com/id/1308844951/photo/nurse-practitioner-doctor-with-tablet-and-stethoscope-smiling.jpg?s=612x612&w=0&k=20&c=mGIcubew63Ltivg0vI8-1nqV-7iUgT-o8NN4J3Qo3Hw="
                alt="Nurse using laptop"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">Sign up and build your professional profile highlighting your skills, experience, certifications, and availability.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Browse Opportunities</h3>
                <p className="text-gray-600">Explore thousands of shifts and assignments that match your qualifications, preferences, and desired location.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Apply & Get Matched</h3>
                <p className="text-gray-600">Apply to positions with a single click. Our intelligent matching system recommends you to facilities looking for your skills.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-locum-600 text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Work & Get Paid</h3>
                <p className="text-gray-600">Accept offers, confirm shifts, and receive secure payments directly through our platform with complete transparency.</p>
              </div>
            </div>

            <Button className="bg-locum-600 hover:bg-locum-700 text-white btn-hover-effect px-6 py-5">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
