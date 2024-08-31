import Banner from '../../containers/Banner';
import FoodList from '../../containers/FoodList/inde';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';

const LaDolceVitaTrattoria = () => {
  return (
    <>
      <Header headernav="active" />
      <Banner linkPageRestaurant="/la_dolce_vita_trattoria" />
      <FoodList linkPageRestaurant="/la_dolce_vita_trattoria" />
      <Footer />
    </>
  );
};

export default LaDolceVitaTrattoria;
