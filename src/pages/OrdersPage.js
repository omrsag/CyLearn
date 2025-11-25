import React from 'react';

const OrdersPage = ({ cartItems, onClearCart }) => {
  const hasItems = cartItems && cartItems.length > 0;

  return (
    <section id="orders" className="py-5">
      <div className="container">
        <h2 className="section-title mb-4">My Orders</h2>

        {!hasItems && (
          <p className="text-muted">
            There are no orders at the moment. Go to 
            <strong> Popular Meals </strong>
            and add some meals.
          </p>
        )}

        {hasItems && (
          <>
            <div className="table-responsive mb-3">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Meal</th>
                    <th>Restaurant</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.restaurant}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="btn btn-outline-danger" onClick={onClearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default OrdersPage;
