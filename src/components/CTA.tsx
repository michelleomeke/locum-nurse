
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-locum-600 to-healthcare-600 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Healthcare Staffing?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Join thousands of healthcare professionals and facilities who are already experiencing the benefits of LocumNurse.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-locum-600 hover:bg-gray-100 btn-hover-effect px-8 py-6 text-lg">
              Sign Up as a Nurse
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-hover-effect px-8 py-6 text-lg">
              Register Your Facility
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
