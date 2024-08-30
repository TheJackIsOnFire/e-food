import Banner from '../../components/Banner';
import Header from '../../containers/Header';
import Restaurant from '../../models/Restaurant';
import { restaurantOptions } from '../Home';
import { PageContainer } from './styles';

const filterRestaurantByLinkPage = (setRestaurantOptions: Restaurant[]) => {
  const filteredRestaurant = setRestaurantOptions.find(
    restaurant => restaurant.linkPage === '/la_dolce_vita_trattoria'
  );
  return [{ ...filteredRestaurant }];
};

const filteredRestaurant = filterRestaurantByLinkPage(restaurantOptions);

const LaDolceVitaTrattoria = () => {
  return (
    <PageContainer>
      <Header headernav={true} />
      {filteredRestaurant.map(bannerInfos => (
        <Banner
          key={bannerInfos.id}
          imgBanner={bannerInfos.banner}
          foodType={bannerInfos.typeFood}
          restaurantName={bannerInfos.title}
        />
      ))}
    </PageContainer>
  );
};

export default LaDolceVitaTrattoria;
