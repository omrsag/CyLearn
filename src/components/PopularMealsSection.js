import React from 'react';

const MealCard = ({ meal, onAddToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card meal-card h-100 shadow-sm">
        <img src={meal.image} className="card-img-top" alt={meal.name} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{meal.name}</h5>
          <p className="card-text text-muted mb-1">{meal.restaurant}</p>
          <p className="card-text fw-semibold">{meal.price}</p>

          <button
            className="btn btn-danger w-100"
            onClick={() => onAddToCart(meal)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularMealsSection = ({ meals, onAddToCart }) => {
  return (
    <section id="meals" className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title mb-4"> PopularMeals</h2>
        <div className="row">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMealsSection;
