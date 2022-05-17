import React from "react";
import ReactMarkdown from "react-markdown";
import "./blogcard.css";
import Image from "next/image";
import communication from "./communication.jpg";

const BlogCard = ({ title, brief, image }) => {
  return (
    <div className="card">
      <div className="card__header"></div>
      <div className="card__body">
        <h3 className="article-header">{title}</h3>

        <ReactMarkdown className="article-content" children={brief} />
      </div>
      <div className="card__footer">
        <a class="btn_primary" href="#">
          Číst...
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
