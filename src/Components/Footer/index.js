import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site_footer">
      <div className="copy-text-wrapper">
        Copyright 2023 bitcot All rights reserved.
      </div>
      <div className="footer-links-wrapper">
        <Link>Terms &amp; Conditions </Link> <span className="mx-2">|</span>
        <Link>Privacy Policy </Link>
      </div>
    </footer>
  );
};

export default Footer;
