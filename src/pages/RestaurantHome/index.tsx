import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import { useParams } from 'react-router-dom';
import Banner from '../../containers/Banner';
import FoodList from '../../containers/FoodList';
import { useGetRestaurantDataQuery } from '../../Redux/services/api';
import Cart from '../../containers/Cart';

const RestaurantHome = () => {
  const { id } = useParams();
  const { data: restaurantData } = useGetRestaurantDataQuery(id!);

  if (!restaurantData) {
    return <h3 style={{ padding: '20px' }}>Carregando...</h3>;
  }

  return (
    <>
      <Header headernav="active" />
      <Banner bannerRestaurant={restaurantData} />
      <FoodList foods={restaurantData} />
      <Footer />
      <Cart />
    </>
  );
};

export default RestaurantHome;
