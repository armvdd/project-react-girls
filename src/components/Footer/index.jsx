import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__p ilustrace">
        ilustrace:{" "}
        <a href="https://www.opendoodles.com/" target="_blank">
          Open Doodles
        </a>
      </p>
      <span className="footer__span oddelovac">|</span>
    </footer>
  );
};

export default Footer;
