import Foods from './Foods';

class Restaurant {
  title: string;
  star: string;
  description: string;
  infos?: string | undefined;
  typeFood: string;
  foods?: Foods[] | undefined;
  image: string;
  banner?: string | undefined;
  linkPage: string;
  id: number;

  constructor(
    title: string,
    star: string,
    description: string,
    infos: string,
    typeFood: string,
    image: string,
    linkPage: string,
    foods: Foods[] | undefined,
    banner: string,
    id: number
  ) {
    this.title = title;
    this.star = star;
    this.description = description;
    this.infos = infos;
    this.typeFood = typeFood;
    this.image = image;
    this.linkPage = linkPage;
    this.foods = foods;
    this.banner = banner;
    this.id = id;
  }
}

export default Restaurant;
