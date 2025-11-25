import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section" id="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-dark brand-badge mb-3">
              YallaFood • Fast & Fresh
            </span>

            <h1 className="hero-title mb-3">
              Order Your Food Online
              <br />
              <span className="fw-normal">And get it delivered to your door 🚀</span>
            </h1>

            <p className="lead mb-4">
              YallaFood is a simple food delivery system. Choose a restaurant, select your meal, and easily track your order status.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <a href="/restaurants" className="btn btn-light btn-lg">
                Order Now
              </a>
              <a href="/meals" className="btn btn-outline-light btn-lg">
                View Popular Meals
              </a>
            </div>

            <p className="mt-3 mb-0 small">
              Created by: <strong>Othman Saghir</strong> &amp;{' '}
              <strong>Zein Nouf</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
