import { LinkGoTo } from './styles';

type Props = {
  idPage: number;
};

const GoToRestaurant = ({ idPage }: Props) => {
  return (
    <>
      <LinkGoTo type="link" to={`/restaurant/${idPage}`}>
        Saiba mais
      </LinkGoTo>
    </>
  );
};

export default GoToRestaurant;
