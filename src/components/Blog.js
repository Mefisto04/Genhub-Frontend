import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/blog/posts`
      );

      if (response.data.success) {
        setPosts(response.data.posts);
      } else {
        toast.error("Failed to fetch blog posts");
      }
    } catch (error) {
      toast.error("Error fetching blog posts");
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="h-screen pt-24 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="h-screen pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">
        Blog Posts
      </h1>

      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">No blog posts available yet.</p>
        </div>
      ) : (
        <>
          <div className="space-y-10">
            {currentPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                {post.image_data && (
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={post.image_data}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(post.created_at)} • By {post.author_name}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {post.title}
                  </h2>
                  <div className="prose max-w-none text-gray-600 mb-4">
                    {/* Show a preview of the content (first 200 characters) */}
                    {post.content.length > 200
                      ? `${post.content.substring(0, 200)}...`
                      : post.content}
                  </div>
                  <Link
                    to={`/blog/${post._id}`}
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {posts.length > postsPerPage && (
            <div className="flex justify-center mt-10">
              <nav>
                <ul className="flex space-x-2">
                  {Array.from({
                    length: Math.ceil(posts.length / postsPerPage),
                  }).map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => paginate(index + 1)}
                        className={`px-4 py-2 rounded ${
                          currentPage === index + 1
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Blog;
