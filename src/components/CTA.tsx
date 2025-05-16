
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-locum-600 to-healthcare-700 opacity-95"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full opacity-10"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white rounded-full opacity-10"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Healthcare Staffing?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto">
            Join thousands of healthcare professionals and facilities who are already experiencing the benefits of LocumNurse. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-white text-locum-600 hover:bg-gray-100 btn-hover-effect w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl shadow-lg">
                Sign Up as a Nurse
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="border-2 border-white text-locum-600 hover:bg-white/10 btn-hover-effect w-full sm:w-auto px-8 py-6 text-lg font-semibold rounded-xl">
                Register Your Facility
              </Button>
            </motion.div>
          </div>
          <p className="mt-8 text-white/80 text-sm">No credit card required. Free to get started.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
