import { RestaurantsLinkBtn } from './styles';

const RestaurantsLink = () => {
  return (
    <>
      <RestaurantsLinkBtn
        type="link"
        title="Clique aqui voltar para a página inicial"
        to="/"
      >
        Restaurantes
      </RestaurantsLinkBtn>
    </>
  );
};

export default RestaurantsLink;
