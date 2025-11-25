import React from 'react';
import RestaurantsSection from '../components/RestaurantsSection';
import { restaurants } from '../data/restaurants';

const RestaurantsPage = () => {
  return <RestaurantsSection restaurants={restaurants} />;
};

export default RestaurantsPage;
