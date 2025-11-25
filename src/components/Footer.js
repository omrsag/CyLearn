import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 mt-4 footer-custom">
      <div className="container text-center">
        <p className="mb-1">&copy; {year} YallaFood. All rights reserved.</p>
        <p className="small mb-0">
          Built by <strong>Othman Saghir</strong> &amp;{' '}
          <strong>Zein Nouf</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
