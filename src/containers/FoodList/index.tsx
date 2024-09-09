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
          <li key={food.id}>
            <FoodCard
              foodImg={food.foto}
              foodName={food.nome}
              foodInfos={food.descricao}
              foodPortion={food.porcao}
              foodPrice={food.preco}
            />
          </li>
        ))}
        {}
      </ContainerFoodList>
    </div>
  );
};

export default FoodList;
