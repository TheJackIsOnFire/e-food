import { BannerContainerImg, FoodType, RestaurantName } from './styles';

type Props = {
  imgBanner: string | undefined;
  foodType: string | undefined;
  restaurantName: string | undefined;
};

const Banner = ({ imgBanner, foodType, restaurantName }: Props) => {
  return (
    <BannerContainerImg style={{ backgroundImage: `url(${imgBanner})` }}>
      <div className="container">
        <FoodType>{foodType}</FoodType>
        <RestaurantName>{restaurantName}</RestaurantName>
      </div>
    </BannerContainerImg>
  );
};

export default Banner;
