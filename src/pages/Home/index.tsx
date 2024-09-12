import Header from '../../containers/Header';
import RestaurantsList from '../../containers/RestaurantsList';
import Footer from '../../containers/Footer';
import { useGetRestaurantOptionsQuery } from '../../Redux/services/api';

const Home = () => {
  const { data: restaurantOptions } = useGetRestaurantOptionsQuery();

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
