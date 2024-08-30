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
  infos: string | undefined;
  typeFood: string;
  image: string;
  linkGoTo: string;
};

const RestaurantsCard = ({
  title,
  stars,
  description,
  image,
  infos,
  typeFood,
  linkGoTo,
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
        <GoToRestaurant BtnLinkPage={linkGoTo} />
      </InfosCard>
      <Infos>
        {infos !== undefined ? (
          <>
            <Tag>{infos}</Tag>
            <Tag>{typeFood}</Tag>
          </>
        ) : (
          <Tag>{typeFood}</Tag>
        )}
      </Infos>
    </ContainerCard>
  );
};

export default RestaurantsCard;
