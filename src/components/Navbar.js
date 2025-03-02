import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img src="/logo.svg" alt="DermAI Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-purple-700">
                DermAI Assistant
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActiveRoute("/")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActiveRoute("/about")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              About
            </Link>
            <Link
              to="/predict"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActiveRoute("/predict")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              Diagnose
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActiveRoute("/contact")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActiveRoute("/")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActiveRoute("/about")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/predict"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActiveRoute("/predict")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Diagnose
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActiveRoute("/contact")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
