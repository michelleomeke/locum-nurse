
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-locum-700">
            Locum<span className="text-healthcare-600">Nurse</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#how-it-works" className="text-gray-700 hover:text-locum-600 transition-colors">
            How It Works
          </a>
          <a href="#for-nurses" className="text-gray-700 hover:text-locum-600 transition-colors">
            For Nurses
          </a>
          <a href="#for-facilities" className="text-gray-700 hover:text-locum-600 transition-colors">
            For Facilities
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-locum-600 transition-colors">
            Testimonials
          </a>
          <Button variant="outline" className="mr-2">
            Log in
          </Button>
          <Button className="bg-locum-600 hover:bg-locum-700">
            Sign up
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#how-it-works" className="text-gray-700 hover:text-locum-600 py-2 transition-colors" onClick={toggleMenu}>
              How It Works
            </a>
            <a href="#for-nurses" className="text-gray-700 hover:text-locum-600 py-2 transition-colors" onClick={toggleMenu}>
              For Nurses
            </a>
            <a href="#for-facilities" className="text-gray-700 hover:text-locum-600 py-2 transition-colors" onClick={toggleMenu}>
              For Facilities
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-locum-600 py-2 transition-colors" onClick={toggleMenu}>
              Testimonials
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button className="w-full bg-locum-600 hover:bg-locum-700">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
