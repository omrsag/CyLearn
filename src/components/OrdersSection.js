import React from 'react';

const OrdersSection = ({ orders }) => {
  return (
    <section id="orders" className="py-5">
      <div className="container">
        <h2 className="section-title mb-4">My Orders</h2>

        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Restaurant</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>ETA</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.restaurant}</td>
                  <td>{order.items}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className="badge bg-success">{order.status}</span>
                  </td>
                  <td>{order.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;
