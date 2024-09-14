import { useDispatch, useSelector } from 'react-redux';
import BtnDefault from '../../components/Buttons/Default';
import {
  CartContainer,
  CartItem,
  Dump,
  Overlay,
  Prices,
  SideBar,
} from './styles';
import { RootReducer } from '../../Redux/store';
import { close, remove } from '../../Redux/slice/Cart/slice';
import { formatPrice } from '../FoodList';

const Cart = () => {
  const { itemsCart, isOpen } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return itemsCart.reduce((accumulator, current) => {
      return (accumulator += current.preco);
    }, 0);
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {itemsCart.map(item => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h5>{item.nome}</h5>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <Dump onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <BtnDefault>Continuar com a entrega</BtnDefault>
      </SideBar>
    </CartContainer>
  );
};

export default Cart;
