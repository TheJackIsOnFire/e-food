import MenuFoods from './MenuFoods';

type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: MenuFoods[];
};

export default Restaurant;
