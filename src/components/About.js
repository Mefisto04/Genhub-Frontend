import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-emerald-50 page-wrapper">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
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
              innovative software solutions, digital transformation strategies,
              and advanced data analytics. By simplifying complexity and driving
              sustainable growth, we aim to help our clients excel in an
              everevolving digital landscape. Through collaboration and
              cutting-edge technology, we turn ambitions into achievements,
              shaping a future of possibilities.
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
                Our advanced AI analyzes the image and identifies potential skin
                conditions.
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

      {/* Meet the Team Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-[24rem] overflow-hidden">
                <img
                  src="/chanthura.png"
                  alt="Team Member 1"
                  className="w-full h-full object-top "
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-700">
                  Chenthura Arunesh B
                </h3>
                <a
                  href="http://www.linkedin.com/in/chenthura-arunesh-ab2034283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800"
                >
                  <svg
                    className="w-6 h-6 mx-auto mt-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-[24rem] overflow-hidden">
                <img
                  src="/divya.png"
                  alt="Team Member 2"
                  className="w-full h-full object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-700">
                  Dhivya R G
                </h3>
                <a
                  href="https://www.linkedin.com/in/dhivya-r-g-28046725b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 mt-4"
                >
                  <svg
                    className="w-6 h-6 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-[24rem] overflow-hidden">
                <img
                  src="/rahul.png"
                  alt="Team Member 3"
                  className="w-full h-full object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-700">
                  Rahul Kannan
                </h3>
                <a
                  href="http://www.linkedin.com/in/rk0784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 mt-4"
                >
                  <svg
                    className="w-6 h-6 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
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
            Try our AI-powered skin disease detection system today and take the
            first step towards better skin health.
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
  );
}

export default About;
