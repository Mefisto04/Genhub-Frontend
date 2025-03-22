import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { toast } from "react-toastify";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const isAdmin = user && user.role === "admin";

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
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
              to="/blog"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname.startsWith("/blog")
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              Blog
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">Hello, {user.name}</span>
                  {isAdmin && (
                    <>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold mr-2">
                        Admin
                      </span>
                      <Link
                        to="/blog/create"
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium mr-2"
                      >
                        New Blog Post
                      </Link>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-violet-700 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
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
                to="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname.startsWith("/blog")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
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

              {isAdmin && (
                <Link
                  to="/blog/create"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Blog Post
                </Link>
              )}

              {user && (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
