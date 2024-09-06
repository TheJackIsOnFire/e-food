import BannerComponents from '../../components/BannerComponents';
import Restaurant from '../../types/Restaurant';
import { restaurantOptions } from '../../pages/Home';

type Props = {
  linkPageRestaurant: string;
};

const Banner = ({ linkPageRestaurant }: Props) => {
  const filterRestaurantByLinkPage = (setRestaurantOptions: Restaurant[]) => {
    const filteredRestaurant = setRestaurantOptions.find(
      restaurant => restaurant.linkPage === linkPageRestaurant
    );
    return [{ ...filteredRestaurant }];
  };

  const filteredRestaurant = filterRestaurantByLinkPage(restaurantOptions);

  return (
    <>
      {filteredRestaurant.map(bannerInfos => (
        <BannerComponents
          key={bannerInfos.id}
          imgBanner={bannerInfos.banner}
          foodType={bannerInfos.typeFood}
          restaurantName={bannerInfos.title}
        />
      ))}
    </>
  );
};

export default Banner;
