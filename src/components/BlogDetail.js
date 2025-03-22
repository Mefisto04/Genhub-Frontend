import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isAdmin = user && user.role === "admin";

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${
          process.env.REACT_APP_API_URL || "http://localhost:5000"
        }/blog/posts/${id}`
      );

      if (response.data.success) {
        setPost(response.data.post);
      } else {
        toast.error("Failed to fetch blog post");
        navigate("/blog");
      }
    } catch (error) {
      toast.error("Error fetching blog post");
      console.error("Error fetching blog post:", error);
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await axios.delete(
          `${
            process.env.REACT_APP_API_URL || "http://localhost:5000"
          }/blog/posts/${id}`
        );

        if (response.data.success) {
          toast.success("Blog post deleted successfully");
          navigate("/blog");
        } else {
          toast.error("Failed to delete blog post");
        }
      } catch (error) {
        toast.error("Error deleting blog post");
        console.error("Error deleting blog post:", error);
      }
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Post Not Found
        </h1>
        <p className="mb-6">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/blog"
            className="text-purple-600 hover:text-purple-800 transition flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {post.image_data && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={post.image_data}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-6">
              <span>{formatDate(post.created_at)}</span>
              <span className="mx-2">•</span>
              <span>By {post.author_name}</span>
            </div>
            <div className="prose max-w-none text-gray-600 whitespace-pre-line">
              {post.content}
            </div>

            {isAdmin && (
              <div className="mt-8 flex space-x-4">
                <Link
                  to={`/blog/edit/${post._id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Edit Post
                </Link>
                <button
                  onClick={handleDelete}
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete Post
                </button>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
