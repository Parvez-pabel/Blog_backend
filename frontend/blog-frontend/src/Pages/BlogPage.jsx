import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { allBlogPost } from "../ApiRequest/apiRequest";
const BlogPage = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await allBlogPost();
      setList(res.data);
    })();
  }, []);

  function formatContent(content) {
    const words = content.split(" ");
    if (words.length >= 20) {
      // Truncate content to the first 40 words
      return words.slice(0, 20).join(" ") + "...";
    } else {
      // Append dummy words to make it at least 40 words
      const fillerWords = Array(20 - words.length).fill("...");
      return content + " " + fillerWords.join(" ");
    }
  }

  return (
    <Layout>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-20 mb-10 ">
          {/* Grid Items */}
          {List.map((item, index) => {
            return (
              <div key={index} className=" p-4 rounded">
                <div className="card bg-base-100 w-full shadow-xl">
                  <Link to={`/blog/${item._id}`}>
                    <figure>
                      <img src={item.image} alt={item.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.title}</h2>
                      <p>
                        {formatContent(item.content)}{" "}
                        <span className="text-black">read more</span>
                      </p>
                      <p>
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
      </div>
    </Layout>
  );
};

export default BlogPage;
