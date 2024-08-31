import Banner from '../../containers/Banner';
import FoodList from '../../containers/FoodList/inde';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';

const HiokiSushi = () => {
  return (
    <>
      <Header headernav="active" />
      <Banner linkPageRestaurant="/hioki_sushi" />
      <FoodList linkPageRestaurant="/hioki_sushi" />
      <Footer />
    </>
  );
};

export default HiokiSushi;
