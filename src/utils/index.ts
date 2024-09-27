//Calcula o preço total dos produtos do carrinho de compras
export const getTotalPrice = (items: MenuFoods[]) => {
  return items.reduce((accumulator, current) => {
    return (accumulator += current.preco);
  }, 0);
};

//Formata o valores monetarios para os padrões brasileiros(R$)
export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};
