import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Restaurant from '../../../types/Restaurant';
import MenuFoods from '../../../types/MenuFoods';

type CartState = {
  items: Restaurant[];
  itemsCart: MenuFoods[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  itemsCart: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuFoods>) => {
      const fooItem = state.itemsCart.find(
        item => item.id === action.payload.id
      );

      if (!fooItem) {
        state.itemsCart.push(action.payload);
      } else {
        alert(`O Item (${fooItem.nome}) já esta no carrinho.`);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itemsCart = state.itemsCart.filter(
        item => item.id !== action.payload
      );
    },
    open: state => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    },
  },
});

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;
