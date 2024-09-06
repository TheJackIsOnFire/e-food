import Restaurant from '../../types/Restaurant';
import { BannerContainerImg, FoodType, RestaurantName } from './styles';

type Props = {
  bannerRestaurant: Restaurant;
};

const Banner = ({ bannerRestaurant }: Props) => {
  return (
    <BannerContainerImg
      style={{ backgroundImage: `url(${bannerRestaurant.capa})` }}
    >
      <div className="container">
        <FoodType>{bannerRestaurant.tipo}</FoodType>
        <RestaurantName>{bannerRestaurant.titulo}</RestaurantName>
      </div>
    </BannerContainerImg>
  );
};

export default Banner;
