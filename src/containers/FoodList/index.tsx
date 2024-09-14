import FoodCard from '../../components/FoodCard';
import Restaurant from '../../types/Restaurant';
import { ContainerFoodList } from './styles';

type Props = {
  foods: Restaurant;
};

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
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
