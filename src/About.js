import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-purple-50 to-emerald-50">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-32 text-center py-16 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
            About DermAI Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing skin health care through artificial intelligence and
            cutting-edge technology.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-700 mb-6">
                About Us
              </h2>
              <p className="text-gray-600 mb-4">
                At GenHub Innovations, our goal is to empower businesses with
                innovative software solutions, digital transformation
                strategies, and advanced data analytics. By simplifying
                complexity and driving sustainable growth, we aim to help our
                clients excel in an everevolving digital landscape. Through
                collaboration and cutting-edge technology, we turn ambitions
                into achievements, shaping a future of possibilities.
              </p>
              <p className="text-gray-600">
                Our goal is to lead technological advancements, providing
                solutions that bridge the gap between complexity and efficiency,
                ultimately making work easier and more impactful for our clients
                and communities.
              </p>
              <br />
            
              <p className="text-gray-600">
                At GenHub Innovations, we are dedicated to delivering
                transformative, high-quality solutions that help businesses and
                individuals achieve their goals. By leveraging cutting-edge
                technology and fostering a culture of collaboration
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Medical Technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-purple-700 text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">1</span>
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">
                  Upload or Capture
                </h3>
                <p className="text-gray-600">
                  Upload an image of your skin condition or use your device's
                  camera for real-time capture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">2</span>
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">
                  AI Analysis
                </h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes the image and identifies potential
                  skin conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-700">3</span>
                </div>
                <h3 className="text-xl font-bold text-purple-700 mb-2">
                  Get Recommendations
                </h3>
                <p className="text-gray-600">
                  Receive personalized care recommendations and treatment
                  suggestions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Try our AI-powered skin disease detection system today and take
              the first step towards better skin health.
            </p>
            <Link
              to="/predict"
              className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Analysis
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default About;
