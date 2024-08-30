import RestaurantsCard from '../../components/RestaurantsCard';
import Restaurant from '../../models/Restaurant';
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
            title={list.title}
            stars={list.star}
            description={list.description}
            image={list.image}
            infos={list.infos}
            typeFood={list.typeFood}
            linkGoTo={list.linkPage}
          />
        ))}
      </ContainerList>
    </div>
  );
};

export default RestaurantsList;
