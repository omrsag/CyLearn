import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const linkClass = (isActive) =>
    'nav-link' + (isActive ? ' active fw-semibold text-danger' : '');

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-danger" to="/">
          YallaFood
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/restaurants"
                className={({ isActive }) => linkClass(isActive)}
              >
                Restaurants
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/meals"
                className={({ isActive }) => linkClass(isActive)}
              >
                Popular Meals
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/orders"
                className={({ isActive }) => linkClass(isActive)}
              >
                My Orders
                {cartCount > 0 && (
                  <span className="badge bg-danger ms-2">{cartCount}</span>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => linkClass(isActive)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <button className="btn btn-danger ms-lg-3 mt-2 mt-lg-0">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
