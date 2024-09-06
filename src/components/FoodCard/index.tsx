import { CardContainer, FoodImg, FoodInfos, FoodName } from './styles';
import AddCart from '../Buttons/AddCart';

type Props = {
  foodImg: string;
  foodName: string;
  foodInfos: string;
};

const FoodCard = ({ foodImg, foodName, foodInfos }: Props) => {
  const maxLengthInfos = (lengthInfos: string) => {
    if (lengthInfos.length > 179) {
      return lengthInfos.slice(0, 176) + '...';
    }
    return lengthInfos;
  };

  return (
    <CardContainer>
      <FoodImg src={foodImg} />
      <FoodName>{foodName}</FoodName>
      <FoodInfos>{maxLengthInfos(foodInfos)}</FoodInfos>
      <AddCart />
    </CardContainer>
  );
};

export default FoodCard;
