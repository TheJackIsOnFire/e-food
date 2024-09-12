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
              foodImg={food.foto}
              foodName={food.nome}
              foodInfos={food.descricao}
              foodPortion={food.porcao}
              foodPrice={formatPrice(food.preco)}
            />
          </li>
        ))}
        {}
      </ContainerFoodList>
    </div>
  );
};

export default FoodList;
