
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-locum-50 via-white to-healthcare-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              The <span className="gradient-text">Marketplace</span> Where Nurses Find Their Perfect Assignment
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Connect with top healthcare facilities nationwide. Find high-paying shifts, flexible schedules, and take control of your nursing career.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-locum-600 hover:bg-locum-700 text-white btn-hover-effect px-8 py-6 text-lg group">
                  I'm a Nurse
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-locum-600 text-locum-600 hover:bg-locum-50 btn-hover-effect px-8 py-6 text-lg">
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
              <p className="text-sm text-gray-500 flex items-center">
                <span className="inline-block h-1 w-8 bg-gradient-to-r from-locum-500 to-healthcare-500 mr-2 rounded-full"></span>
                Join over 10,000+ registered nurses and 1,000+ healthcare facilities
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-healthcare-200 rounded-full blur-xl opacity-60 group-hover:w-32 group-hover:h-32 transition-all duration-300"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-locum-200 rounded-full blur-xl opacity-60 group-hover:w-40 group-hover:h-40 transition-all duration-300"></div>
              
              <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Black nurse providing healthcare services"
                  className="w-full h-auto object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-healthcare-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">400+ Active Shifts</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                whileHover={{ y: 5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-locum-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Highest Pay Rates</span>
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
