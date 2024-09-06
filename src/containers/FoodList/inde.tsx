import FoodCard from '../../components/FoodCard';
import Foods from '../../types/Foods';
import Restaurant from '../../types/Restaurant';
import { restaurantOptions } from '../../pages/Home';
import { ContainerFoodList } from './styles';

type Props = {
  linkPageRestaurant: string;
};

const FoodList = ({ linkPageRestaurant }: Props) => {
  const filterRestaurantByLinkPage = (setRestaurantOptions: Restaurant[]) => {
    const filteredRestaurant = setRestaurantOptions.find(
      restaurant => restaurant.linkPage === linkPageRestaurant
    );
    return { ...filteredRestaurant };
  };

  const filteredRestaurant = filterRestaurantByLinkPage(restaurantOptions);

  return (
    <div className="container">
      <ContainerFoodList>
        {filteredRestaurant.foods?.map(food => (
          <FoodCard
            key={food.id}
            foodImg={food.image}
            foodName={food.name}
            foodInfos={food.descrition}
          />
        ))}
      </ContainerFoodList>
    </div>
  );
};

export default FoodList;
