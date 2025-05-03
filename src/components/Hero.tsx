
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-bold leading-tight">
              The <span className="gradient-text">Marketplace</span> Where Nurses Find Their Perfect Assignment
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Connect with top healthcare facilities nationwide. Find high-paying shifts, flexible schedules, and take control of your nursing career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-locum-600 hover:bg-locum-700 text-white btn-hover-effect px-8 py-6 text-lg">
                I'm a Nurse
              </Button>
              <Button variant="outline" className="border-locum-600 text-locum-600 hover:bg-locum-50 btn-hover-effect px-8 py-6 text-lg">
                I'm a Facility
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-gray-500">
                Join over 10,000+ registered nurses and 1,000+ healthcare facilities
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-healthcare-200 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-locum-200 rounded-full blur-xl opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nurse working with patient"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
