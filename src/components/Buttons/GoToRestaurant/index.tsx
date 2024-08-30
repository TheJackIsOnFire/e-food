import { LinkGoTo } from './styles';

type Props = {
  BtnLinkPage: string;
};

const GoToRestaurant = ({ BtnLinkPage }: Props) => {
  return (
    <>
      <LinkGoTo to={BtnLinkPage}>Saiba mais</LinkGoTo>
    </>
  );
};

export default GoToRestaurant;
