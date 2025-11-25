import React from 'react';
import PopularMealsSection from '../components/PopularMealsSection';
import { meals } from '../data/meals';

const MealsPage = ({ onAddToCart }) => {
  return <PopularMealsSection meals={meals} onAddToCart={onAddToCart} />;
};

export default MealsPage;
