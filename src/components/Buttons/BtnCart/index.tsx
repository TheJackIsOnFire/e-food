import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../Redux/store';
import { CartBtn } from './styles';
import { open } from '../../../Redux/slice/Cart/slice';

const BtnCart = () => {
  const { itemsCart } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <CartBtn onClick={() => dispatch(open())}>
        <span>{itemsCart.length}</span> produto(s) no carrinho
      </CartBtn>
    </>
  );
};

export default BtnCart;
