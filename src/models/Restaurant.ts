class Restaurant {
  title: string;
  star: string;
  description: string;
  infos?: string | undefined;
  typeFood: string;
  image: string;
  linkPage: string;
  foods?: object[] | undefined;
  banner?: string | undefined;
  id: number;

  constructor(
    title: string,
    star: string,
    description: string,
    infos: string,
    typeFood: string,
    image: string,
    linkPage: string,
    foods: object[],
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
