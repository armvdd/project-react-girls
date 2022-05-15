import React from "react";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";

import "./blog.css";

const getBlog = async () => {
  const response = await fetch("/api/blogs");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

/* {data &&
            data.data.map((article) => (
              <>
                <div className="article">
                  <h3 className="article-header">{article.attributes.title}</h3>

                  <div className="article-content">
                    {article.attributes.text}
                  </div>
                </div>
              </>
            ))} 
            
            
            
            
            
            */

const Blog = () => {
  const { data, isLoading } = useQuery("blog", getBlog);

  return (
    <div className="blog-container">
      <h2 className="blog-header">Blog Page</h2>
      <div className="article-container">
        {data &&
          data.data.map((article) => (
            <>
              <div className="article">
                <h3 className="article-header">{article.attributes.title}</h3>

                <ReactMarkdown
                  className="article-content"
                  children={article.attributes.text}
                />
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Blog;
