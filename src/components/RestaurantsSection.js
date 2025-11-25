import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card restaurant-card h-100 shadow-sm">
        <img
          src={restaurant.image}
          className="card-img-top"
          alt={restaurant.name}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{restaurant.name}</h5>
          <p className="card-text mb-1">{restaurant.category}</p>
          <p className="card-text">
            <span className="badge bg-success me-2">★ {restaurant.rating}</span>
            <span className="text-muted">{restaurant.eta}</span>
          </p>
          <Link to={`/restaurants/${restaurant.id}`} className="btn btn-outline-danger w-100">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

const RestaurantsSection = ({ restaurants }) => {
  return (
    <section id="restaurants" className="py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title">Featured Restaurants</h2>
        </div>

        <div className="row">
          {restaurants.map((rest) => (
            <RestaurantCard key={rest.id} restaurant={rest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
