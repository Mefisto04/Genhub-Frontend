import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import "./index.css";

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col">
        <div className="flex-grow bg-gradient-to-r from-blue-50 to-purple-50 pt-16">
          <main className="w-full">
            {/* Hero Section */}

            <motion.section
              initial="initial"
              animate="animate"
              className="pt-20 pb-20 h-screen flex items-center justify-center"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                {/* Left: Text Content */}
                <div className="max-w-2xl text-center lg:text-left">
                  <motion.h1
                    variants={fadeIn}
                    className="text-5xl md:text-6xl font-bold text-purple-700 mb-6"
                  >
                    AI-Powered Skin Disease Detection
                  </motion.h1>
                  <motion.p
                    variants={fadeIn}
                    className="mt-4 text-xl text-gray-600"
                  >
                    Get instant, accurate skin condition analysis powered by
                    advanced AI. Upload an image or use your camera for
                    real-time detection.
                  </motion.p>
                  <motion.div variants={fadeIn} className="mt-8 space-x-4">
                    <Link
                      to="/predict"
                      className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                      Start Diagnosis
                    </Link>
                    <Link
                      to="/about"
                      className="inline-block bg-white text-purple-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>

                {/* Right: Image */}
                <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
                  <img
                    src="/contactus.jpg"
                    alt="AI Skin Analysis"
                    className="w-full max-w-md rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="py-16 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
                  Why Choose DermAI Assistant?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="AI Analysis"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-purple-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-700 mb-2">
                      Instant Analysis
                    </h3>
                    <p className="text-gray-600">
                      Get immediate results powered by advanced AI technology.
                    </p>
                  </motion.div>

                  {/* Feature 2 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Personalized Care"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-purple-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-700 mb-2">
                      Personalized Care
                    </h3>
                    <p className="text-gray-600">
                      Receive tailored recommendations for your skin condition.
                    </p>
                  </motion.div>

                  {/* Feature 3 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1576670159147-042c8d530b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Easy to Use"
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-purple-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-700 mb-2">
                      Easy to Use
                    </h3>
                    <p className="text-gray-600">
                      Simple interface for uploading images or using your
                      camera.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </main>

          {/* Footer */}
          <footer className="w-full bg-purple-950 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">DermAI Assistant</h3>
                  <p className="text-purple-100">
                    Advanced skin disease detection powered by artificial
                    intelligence.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/" className="text-purple-100 hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/predict"
                        className="text-purple-100 hover:text-white"
                      >
                        Diagnose
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-purple-100 hover:text-white"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/blog"
                        className="text-purple-100 hover:text-white"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="text-purple-100 hover:text-white"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/support"
                        className="text-purple-100 hover:text-white"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2">
                    <li className="text-purple-100">
                      Email: contact@genhubInnovation.com
                    </li>
                    <li className="text-purple-100">Phone: +91 6385499454</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-purple-600 mt-8 pt-8 text-center">
                <p className="text-purple-100">
                  &copy; 2025 Designed and Developed by GenHub Innovations. All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <Chatbot />
    </>
  );
}

export default App;
