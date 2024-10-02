import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../Redux/store';

import { open } from '../../../Redux/slice/Cart/slice';

import { CartBtn } from './styles';

const BtnCart = () => {
  const { itemsCart } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <CartBtn type="button" onClick={() => dispatch(open())}>
        <span>{itemsCart.length}</span> produto(s) no carrinho
      </CartBtn>
    </>
  );
};

export default BtnCart;
