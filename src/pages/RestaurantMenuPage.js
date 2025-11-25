import React from 'react';
import { useParams } from 'react-router-dom';
import { meals } from '../data/meals';
import { restaurants } from '../data/restaurants';

const RestaurantMenuPage = ({ onAddToCart }) => {
  const { id } = useParams();

  const restaurant = restaurants.find((r) => r.id === Number(id));

  const restaurantMeals = meals.filter(
    (meal) => meal.restaurant === restaurant.name
  );

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title mb-2">Menu – {restaurant.name}</h2>
        <p className="text-muted mb-4">{restaurant.category} Food</p>

        <div className="row">
          {restaurantMeals.map((meal) => (
            <div key={meal.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={meal.image} className="card-img-top" alt={meal.name} />
                <div className="card-body">
                  <h5 className="fw-bold">{meal.name}</h5>
                  <p className="text-muted mb-2">{meal.price}</p>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => onAddToCart(meal)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenuPage;
