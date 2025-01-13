import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allBlogPost } from "../ApiRequest/apiRequest";

const BlogList = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await allBlogPost();
        const sortedBlogs = res.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by date
          .slice(0, 12); // Limit to 10 blogs
        setList(sortedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to format content to at least 20 words
  function formatContent(content) {
    const words = content.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + " ...";
    }
    const fillerWords = Array(20 - words.length).fill("...");
    return content + " " + fillerWords.join(" ");
  }

  // Function to format date
  function formatDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mt-10 mb-6">
        Latest Blogs
      </h2>
      <div className="divider"></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 mb-10">
        {List.map((item, index) => (
          <div key={index} className="p-4 rounded">
            <div className="card bg-base-100 w-full shadow-xl h-[400px]">
              <Link to={`/blog/${item._id}`}>
                <figure>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg font-semibold ">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 text-sm mb-2">
                    {formatContent(item.content)}
                    <span className="text-blue-500 ml-1">read more</span>
                  </p>
                  <p className="text-gray-500 text-sm ">
                    {formatDate(item.createdAt)}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
