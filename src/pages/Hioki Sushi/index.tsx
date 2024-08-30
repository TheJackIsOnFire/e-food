import Banner from '../../containers/Banner';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';

const HiokiSushi = () => {
  return (
    <>
      <Header headernav={true} />
      <Banner linkPageRestaurant="/hioki_sushi" />
      <Footer />
    </>
  );
};

export default HiokiSushi;
