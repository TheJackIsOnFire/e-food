import {
  ContainerCard,
  Description,
  ImgCard,
  InfosCard,
  StarsCard,
  TitleCard,
  CurrentStarts,
  ImgFood,
  Infos,
  InfosTitle,
} from './styles';
import star from '../../assets/images/star.png';
import Tag from '../Tag';
import GoToRestaurant from '../Buttons/GoToRestaurant';

type Props = {
  title: string;
  stars: string;
  description: string;
  infos: string[];
  image: string;
};

const RestaurantsCard = ({
  title,
  stars,
  description,
  image,
  infos,
}: Props) => {
  return (
    <ContainerCard>
      <ImgCard>
        <ImgFood src={image} />
      </ImgCard>
      <InfosCard>
        <InfosTitle>
          <TitleCard>{title}</TitleCard>
          <StarsCard>
            <CurrentStarts>{stars}</CurrentStarts>
            <img src={star} alt="Star" />
          </StarsCard>
        </InfosTitle>
        <Description>{description}</Description>
        <GoToRestaurant />
      </InfosCard>
      <Infos>
        {infos.map(info => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    </ContainerCard>
  );
};

export default RestaurantsCard;
