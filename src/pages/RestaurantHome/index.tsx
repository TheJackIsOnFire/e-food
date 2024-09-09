import { useEffect, useState } from 'react';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import Restaurant from '../../types/Restaurant';
import { useParams } from 'react-router-dom';
import Banner from '../../containers/Banner';
import FoodList from '../../containers/FoodList';

const RestaurantHome = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState<Restaurant>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => res.json())
      .then(res => setRestaurantData(res));
  }, [id]);

  if (!restaurantData) {
    return <h3 style={{ padding: '20px' }}>Carregando...</h3>;
  }

  return (
    <>
      <Header headernav="active" />
      <Banner bannerRestaurant={restaurantData} />
      <FoodList foods={restaurantData} />
      <Footer />
    </>
  );
};

export default RestaurantHome;
