import RestaurantsCard from '../../components/RestaurantsCard';
import Restaurant from '../../types/Restaurant';
import { ContainerList } from './styles';

type Props = {
  restaurantList: Restaurant[];
};

const RestaurantsList = ({ restaurantList }: Props) => {
  return (
    <div className="container">
      <ContainerList>
        {restaurantList.map(list => (
          <RestaurantsCard
            key={list.id}
            title={list.titulo}
            stars={list.avaliacao}
            description={list.descricao}
            image={list.capa}
            highlighted={list.destacado}
            typeFood={list.tipo}
            idGoTo={list.id}
          />
        ))}
      </ContainerList>
    </div>
  );
};

export default RestaurantsList;
