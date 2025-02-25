import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Webcam from "react-webcam";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import Navbar from "./components/Navbar";
import "./index.css";

function Predict() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [recommendations, setRecommendations] = useState("");
  const webcamRef = useRef(null);
  const resultsRef = useRef(null);

  // Add scroll to results when they're available
  useEffect(() => {
    if ((prediction || recommendations) && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [prediction, recommendations]);

  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImagePreview(imageSrc);
    // Convert base64 to file
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "webcam-capture.jpg", {
          type: "image/jpeg",
        });
        setFile(file);
      });
    setShowCamera(false);
  };

  const getRecommendations = async (condition) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Given the skin condition "${condition}", please provide:
      1. Brief description of the condition
      2. Dietary recommendations
      3. Lifestyle changes
      4. Skincare routine suggestions
      5. When to seek medical attention
      Please format the response in a clear, structured way.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setRecommendations(response.text());
    } catch (error) {
      console.error("Error getting recommendations:", error);
      setRecommendations("Unable to fetch recommendations at this time.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/predict`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPrediction(data.prediction);
      await getRecommendations(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Error occurred during prediction");
    } finally {
      setIsLoading(false);
    }
  };

  const formatRecommendations = (text) => {
    let formattedText = text.replace(/##/g, "").replace(/\*\*/g, "");

    formattedText = formattedText.replace(/(\d+)\.\s+([^\n]+)/g, "## $1. $2");

    return formattedText;
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-r from-blue-50 to-purple-50 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <h1 className="text-4xl font-bold text-purple-700 text-center mb-8">
            Skin Condition Analysis
          </h1>

          <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                  Upload Image
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => setShowCamera(!showCamera)}
                    className="w-full bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition duration-300"
                  >
                    {showCamera ? "Hide Camera" : "Use Camera"}
                  </button>
                  <div className="relative">
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      htmlFor="file-upload"
                      className="w-full bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300 cursor-pointer block text-center"
                    >
                      Choose File
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative">
                {showCamera ? (
                  <div className="relative">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      className="w-full rounded-lg"
                    />
                    <button
                      onClick={captureImage}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
                    >
                      Capture
                    </button>
                  </div>
                ) : imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">No image selected</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleSubmit}
                disabled={!file || isLoading}
                className={`bg-purple-700 text-white px-8 py-3 rounded-lg transition duration-300 ${
                  !file || isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-purple-800"
                }`}
              >
                {isLoading ? "Analyzing..." : "Analyze Image"}
              </button>
            </div>
          </div>

          {(prediction || recommendations) && (
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl p-6"
            >
              {prediction && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                    Diagnosis
                  </h2>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-lg text-gray-700">{prediction}</p>
                  </div>
                </div>
              )}

              {recommendations && (
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                    Recommendations
                  </h2>
                  <div className="prose prose-purple max-w-none">
                    <div className="space-y-4 text-gray-700">
                      <ReactMarkdown
                        components={{
                          h2: ({ children }) => (
                            <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-3">
                              {children}
                            </h2>
                          ),
                          p: ({ children }) => (
                            <p className="text-gray-700 mb-4">{children}</p>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc pl-6 mb-4">{children}</ul>
                          ),
                          li: ({ children }) => (
                            <li className="text-gray-700 mb-2">{children}</li>
                          ),
                        }}
                      >
                        {formatRecommendations(recommendations)}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Predict;
