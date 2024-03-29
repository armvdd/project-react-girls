import React from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import BlogCard from "../../components/BlogCard";
import Loader from "../../components/Loader";

import "./blog.css";

const getBlog = async () => {
  const response = await fetch("/api/blogs");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

/* <>
              <div className="article">
                <h3 className="article-header">{article.attributes.title}</h3>

                <ReactMarkdown
                  className="article-content"
                  children={article.attributes.text}
                />
              </div>
            </> 
           
*/

const Blog = () => {
  const { data, isLoading } = useQuery("blog", getBlog);

  return (
    <div className="blog-container">
      <h2 className="blog-header">BLOG</h2>
      <div className="cards-container">
        {isLoading && <Loader />}
        {data &&
          data.data.map((article) => (
            <BlogCard
              title={article.attributes.title}
              brief={article.attributes.brief}
              text={article.attributes.text}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;
