class Restaurant {
  title: string;
  star: string;
  description: string;
  infos: string[];
  image: string;
  id: number;

  constructor(
    title: string,
    star: string,
    description: string,
    infos: string[],
    image: string,
    id: number
  ) {
    this.title = title;
    this.star = star;
    this.description = description;
    this.infos = infos;
    this.image = image;
    this.id = id;
  }
}

export default Restaurant;
