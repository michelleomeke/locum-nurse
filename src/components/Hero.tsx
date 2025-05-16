import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroNurse from "@/assets/group-nurse.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-locum-50 via-white to-healthcare-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              The Marketplace Where Nurses Find Their Perfect Assignments
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connect with top healthcare facilities nationwide. Find high-paying shifts, flexible schedules, and take control of your nursing career.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 pt-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full sm:w-[160px] bg-locum-600 hover:bg-locum-700 text-white px-4 py-3 text-sm sm:text-base font-bold group">
                  I'm a Nurse
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="w-full sm:w-[160px] bg-orange-600 text-white hover:bg-locum-50 px-4 py-3 text-sm sm:text-base font-bold"
                >
                  I'm a Facility
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-sm text-gray-500 flex justify-center md:justify-start items-center">
                <span className="inline-block h-1 w-8 bg-gradient-to-r from-locum-500 to-healthcare-500 mr-2 rounded-full"></span>
                Join over 10,000+ registered nurses and 1,000+ healthcare facilities
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-full">
              {/* Background glows */}
              <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-healthcare-200 rounded-full blur-xl opacity-60 group-hover:w-28 group-hover:h-28 transition-all duration-300"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-locum-200 rounded-full blur-xl opacity-60 group-hover:w-36 group-hover:h-36 transition-all duration-300"></div>

              {/* Main Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={HeroNurse}
                  alt="Black nurse providing healthcare services"
                  className="w-full h-auto object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>

              {/* Floating Labels */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-healthcare-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">400+ Active Shifts</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                whileHover={{ y: 3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-locum-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium">Highest Pay Rates</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
