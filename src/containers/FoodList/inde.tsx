import FoodCard from '../../components/FoodCard';
import Restaurant from '../../types/Restaurant';
import { ContainerFoodList } from './styles';

type Props = {
  foods: Restaurant;
};

const FoodList = ({ foods }: Props) => {
  return (
    <div className="container">
      <ContainerFoodList>
        {foods.cardapio.map(food => (
          <FoodCard
            key={food.id}
            foodImg={food.foto}
            foodName={food.nome}
            foodInfos={food.descricao}
          />
        ))}
      </ContainerFoodList>
    </div>
  );
};

export default FoodList;
