import Header from '../../containers/Header';
import RestaurantsList from '../../containers/RestaurantsList';
import Footer from '../../containers/Footer';
import { useEffect, useState } from 'react';
import Restaurant from '../../types/Restaurant';

const Home = () => {
  const [restaurantOptions, setRestaurantOptions] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setRestaurantOptions(res));
  });

  if (!restaurantOptions) {
    return <h3 style={{ padding: '20px' }}>Carregando...</h3>;
  }

  return (
    <>
      <Header headernav="disable" />
      <RestaurantsList restaurantList={restaurantOptions} />
      <Footer />
    </>
  );
};

export default Home;
