
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold gradient-text">Making an Impact in Healthcare</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Join thousands of healthcare professionals already transforming how staffing works</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-locum-600 mb-2">10,000+</p>
            <p className="text-gray-600">Registered Nurses</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-healthcare-600 mb-2">1,000+</p>
            <p className="text-gray-600">Healthcare Facilities</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-locum-600 mb-2">50,000+</p>
            <p className="text-gray-600">Shifts Filled</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-healthcare-600 mb-2">48</p>
            <p className="text-gray-600">States Covered</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
