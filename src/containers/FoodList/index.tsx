import FoodCard from '../../components/FoodCard';
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
              id={food.id}
              foto={food.foto}
              preco={food.preco}
              nome={food.nome}
              descricao={food.descricao}
              porcao={food.porcao}
            />
          </li>
        ))}
      </ContainerFoodList>
    </div>
  );
};

export default FoodList;
