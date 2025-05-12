
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItem = ({ href, text }: { href: string; text: string }) => (
    <motion.a
      href={href}
      className="relative group text-gray-700 hover:text-locum-600 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsOpen(false)}
    >
      {text}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-locum-600 group-hover:w-full transition-all duration-300"></span>
    </motion.a>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-2xl font-bold">
            <span className="text-locum-600">Locum</span>
            <span className="text-healthcare-600">Nurse</span>
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-healthcare-500"></span>
          </a>
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem href="#how-it-works" text="How It Works" />
          <NavItem href="#for-nurses" text="For Nurses" />
          <NavItem href="#for-facilities" text="For Facilities" />
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-locum-600 transition-colors">
              Testimonials
              <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-locum-600 rounded-t-lg">
                Client Stories
              </a>
              <a href="#testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-locum-600 rounded-b-lg">
                Nurse Experiences
              </a>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button 
              className="bg-[#2F80ED] text-white shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => window.open("#download", "_self")}
            >
              <Download size={18} className="mr-2" />
              Download App
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu} 
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white border-b border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <NavItem href="#how-it-works" text="How It Works" />
              <NavItem href="#for-nurses" text="For Nurses" />
              <NavItem href="#for-facilities" text="For Facilities" />
              <NavItem href="#testimonials" text="Testimonials" />
              <div className="pt-3">
                <Button 
                  className="w-full bg-gradient-to-r from-locum-600 to-healthcare-600 hover:from-locum-700 hover:to-healthcare-700 flex items-center justify-center"
                  onClick={() => window.open("#download", "_self")}
                >
                  <Download size={18} className="mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
