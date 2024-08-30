import Header from '../../containers/Header';
import RestaurantsList from '../../containers/RestaurantsList';
import Restaurant from '../../models/Restaurant';
import japoneseFood from '../../assets/images/japonese_food.png';
import italianFood from '../../assets/images/italian_food.png';
import Footer from '../../containers/Footer';
import italianBanner from '../../assets/images/italiana.png';

export const restaurantOptions: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    star: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: 'Destaque da semana',
    typeFood: 'Japonesa',
    image: japoneseFood,
    linkPage: '/hioki_sushi',
    id: 1,
  },
  {
    title: 'La Dolce Vita Trattoria',
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    typeFood: 'Italiana',
    image: italianFood,
    linkPage: '/la_dolce_vita_trattoria',
    banner: italianBanner,
    id: 2,
  },
];

const Home = () => {
  return (
    <>
      <Header headernav={false} />
      <RestaurantsList restaurantList={restaurantOptions} />
      <Footer />
    </>
  );
};

export default Home;
