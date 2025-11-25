import React from 'react';
import HeroSection from '../components/HeroSection';
import RestaurantsSection from '../components/RestaurantsSection';
import PopularMealsSection from '../components/PopularMealsSection';

import { restaurants } from '../data/restaurants';
import { meals } from '../data/meals';
import { orders } from '../data/orders';

const HomePage = () => {
  return (
    <>
      <HeroSection orders={orders} />
      <RestaurantsSection restaurants={restaurants} />
      <PopularMealsSection meals={meals} />
    </>
  );
};

export default HomePage;
