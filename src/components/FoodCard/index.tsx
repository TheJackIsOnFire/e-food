import { CardContainer, FoodImg, FoodInfos, FoodName } from './styles';
import AddCart from '../Buttons/AddCart';

type Props = {
  foodImg: string;
  foodName: string;
  foodInfos: string;
};

const FoodCard = ({ foodImg, foodName, foodInfos }: Props) => {
  return (
    <CardContainer>
      <FoodImg src={foodImg} />
      <FoodName>{foodName}</FoodName>
      <FoodInfos>{foodInfos}</FoodInfos>
      <AddCart />
    </CardContainer>
  );
};

export default FoodCard;
