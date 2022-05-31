import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./blogcard.css";
import Image from "next/image";
import communication from "./communication.jpg";

const BlogCard = ({ title, brief, text }) => {
  const [blogCardOpen, setBlogCardOpen] = useState(false);

  const read = () => {
    if (blogCardOpen) {
      setBlogCardOpen(false);
    } else if (blogCardOpen === false) {
      setBlogCardOpen(true);
    }
  };

  return (
    <div className={blogCardOpen ? "card--open" : "card"}>
      <div className="card__header"></div>
      <div className="card__body">
        <h3 className="article-header">{title}</h3>

        <ReactMarkdown className="article-content" children={brief} />
        {blogCardOpen ? (
          <ReactMarkdown className="article-content" children={text} />
        ) : null}
      </div>
      <div className="card__footer">
        <a class="btn_primary" onClick={read}>
          {blogCardOpen ? "Zavřít..." : "Číst..."}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
