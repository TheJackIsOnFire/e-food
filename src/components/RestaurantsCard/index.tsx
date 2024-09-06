import {
  ContainerCard,
  Description,
  ImgCard,
  InfosCard,
  StarsCard,
  TitleCard,
  CurrentStarts,
  Infos,
  InfosTitle,
  ImgRestaurant,
} from './styles';
import star from '../../assets/images/star.png';
import Tag from '../Tag';
import GoToRestaurant from '../Buttons/GoToRestaurant';

type Props = {
  title: string;
  stars: number;
  description: string;
  highlighted: boolean;
  typeFood: string;
  image: string;
  idGoTo: number;
};

const RestaurantsCard = ({
  title,
  stars,
  description,
  image,
  highlighted,
  typeFood,
  idGoTo,
}: Props) => {
  const maxLengthDescription = (maxDescription: string) => {
    if (maxDescription.length > 263) {
      return maxDescription.slice(0, 260) + '...';
    }
    return maxDescription;
  };

  return (
    <ContainerCard>
      <ImgCard>
        <ImgRestaurant src={image} />
      </ImgCard>
      <InfosCard>
        <InfosTitle>
          <TitleCard>{title}</TitleCard>
          <StarsCard>
            <CurrentStarts>{stars}</CurrentStarts>
            <img src={star} alt="Star" />
          </StarsCard>
        </InfosTitle>
        <Description>{maxLengthDescription(description)}</Description>
        <GoToRestaurant idPage={idGoTo} />
      </InfosCard>
      <Infos>
        {highlighted && <Tag>Destaque da semana</Tag>}
        <Tag>{typeFood}</Tag>
      </Infos>
    </ContainerCard>
  );
};

export default RestaurantsCard;
