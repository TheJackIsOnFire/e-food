import Header from '../../containers/Header';
import RestaurantsList from '../../containers/RestaurantsList';
import Restaurant from '../../models/Restaurant';
import japoneseFood from '../../assets/images/japonese_food.png';
import italianFood from '../../assets/images/italian_food.png';
import Footer from '../../containers/Footer';
import italianBanner from '../../assets/images/italiana.png';
import japoneseBanner from '../../assets/images/japonesa.png';
import pizzaMarguerita from '../../assets/images/pizza_marguerita.png';
import temakiSalmao from '../../assets/images/temaki.png';

export const restaurantOptions: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    star: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: 'Destaque da semana',
    typeFood: 'Japonesa',
    foods: [
      {
        image: temakiSalmao,
        name: 'Temaki de Salmão',
        descrition:
          'O clássico Temaki de Salmão: O temaki de salmão é um cone de alga nori recheado com arroz japonês temperado, fatias de salmão fresco, cebolinha e, opcionalmente, cream cheese ou ovas. Simples e delicioso.',
        id: 1,
      },
      {
        image: temakiSalmao,
        name: 'Temaki de Salmão',
        descrition:
          'O clássico Temaki de Salmão: O temaki de salmão é um cone de alga nori recheado com arroz japonês temperado, fatias de salmão fresco, cebolinha e, opcionalmente, cream cheese ou ovas. Simples e delicioso.',
        id: 2,
      },
      {
        image: temakiSalmao,
        name: 'Temaki de Salmão',
        descrition:
          'O clássico Temaki de Salmão: O temaki de salmão é um cone de alga nori recheado com arroz japonês temperado, fatias de salmão fresco, cebolinha e, opcionalmente, cream cheese ou ovas. Simples e delicioso.',
        id: 3,
      },
    ],
    image: japoneseFood,
    banner: japoneseBanner,
    linkPage: '/hioki_sushi',
    id: 1,
  },
  {
    title: 'La Dolce Vita Trattoria',
    star: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    typeFood: 'Italiana',
    foods: [
      {
        image: pizzaMarguerita,
        name: 'Pizza Marguerita',
        descrition:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade',
        id: 1,
      },
      {
        image: pizzaMarguerita,
        name: 'Pizza Marguerita',
        descrition:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade',
        id: 2,
      },
      {
        image: pizzaMarguerita,
        name: 'Pizza Marguerita',
        descrition:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade',
        id: 3,
      },
    ],
    image: italianFood,
    banner: italianBanner,
    linkPage: '/la_dolce_vita_trattoria',
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
