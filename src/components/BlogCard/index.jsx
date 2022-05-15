import React from "react";
import ReactMarkdown from "react-markdown";
import "./blogcard.css";

const BlogCard = ({ title, brief }) => {
  return (
    <div className="blogcard-container">
      <div className="card">
        <div className="card__header">
          <img></img>
        </div>
        <div className="card__body">
          <h3 className="article-header">{title}</h3>

          <ReactMarkdown className="article-content" children={brief} />
        </div>
        <div className="card__footer"></div>
      </div>
    </div>
  );
};

export default BlogCard;
