import React from "react";
import { Link } from "react-router-dom";
import { CurrentYear } from "../../config";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-footer">
      <Link to="/" className="footer-logo">
        <img src="/images/nba_logo.png" alt="nba logo" />
      </Link>
      <div className="footer-right">@NBA {CurrentYear} All rights reserved</div>
    </div>
  );
};

export default Footer;
