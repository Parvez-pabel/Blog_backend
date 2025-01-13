// export default BlogPage;
import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { allBlogPost } from "../ApiRequest/apiRequest";
import Loader from "./../components/Loader"; // Assuming you have a Loader component

const BlogPage = () => {
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        let res = await allBlogPost();
        setList(res.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false); // Stop loader after fetching or error
      }
    })();
  }, []);

  function formatContent(content) {
    const words = content.split(" ");
    if (words.length >= 20) {
      return words.slice(0, 20).join(" ") + "...";
    } else {
      const fillerWords = Array(20 - words.length).fill("...");
      return content + " " + fillerWords.join(" ");
    }
  }

  return (
    <Layout>
      <div className="container mx-auto">
        {/* Conditional rendering for Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Loader /> {/* Loader component displayed when loading */}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-20 mb-10">
            {/* Grid Items */}
            {List.map((item, index) => {
              return (
                <div key={index} className="p-4 rounded">
                  <div className="card bg-base-100 w-full shadow-xl h-[650px]">
                    <Link to={`/blog/${item._id}`}>
                      <figure>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-[400px]"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>
                          {formatContent(item.content)}{" "}
                          <span className="text-black">read more</span>
                        </p>
                        <p className="">
                          {new Intl.DateTimeFormat("en-US", {
                            weekday: "long", // Day name (e.g., Monday)
                            day: "numeric", // Day of the month
                            month: "numeric", // Month (1-12)
                            year: "numeric", // Year (e.g., 2025)
                          }).format(new Date(item.createdAt))}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
