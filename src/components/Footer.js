import React from "react";

const Footer = () => {
  return (
    <footer className="footer-cylearn py-3 mt-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span>© {new Date().getFullYear()} CyLearn. All rights reserved.</span>
        <span className="text-muted">Secure Your Knowledge.</span>
      </div>
    </footer>
  );
}

export default Footer;
