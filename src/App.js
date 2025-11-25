import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantMenuPage from './pages/RestaurantMenuPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import MealsPage from './pages/MealsPage';
import OrdersPage from './pages/OrdersPage';
import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (meal) => {
    setCartItems(prev => [...prev, meal]);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar cartCount={cartItems.length} />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/meals" element={<MealsPage onAddToCart={handleAddToCart} />} />
            <Route path="/orders" element={<OrdersPage cartItems={cartItems} onClearCart={handleClearCart} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/restaurants/:id"
              element={<RestaurantMenuPage onAddToCart={handleAddToCart} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
