import { LinkGoTo } from './styles';

type Props = {
  idPage: number;
};

const GoToRestaurant = ({ idPage }: Props) => {
  return (
    <>
      <LinkGoTo to={`/product/:${idPage}`}>Saiba mais</LinkGoTo>
    </>
  );
};

export default GoToRestaurant;
