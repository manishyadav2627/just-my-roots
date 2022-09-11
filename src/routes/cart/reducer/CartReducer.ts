import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartReducerPropsType } from '../types/CartReducerType';

const initialState: CartReducerPropsType = {
  cartList: [],
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<any>) => {
      state.cartList = action.payload;
    },
  },
});

export const { setCartList } = cartReducer.actions;
export default cartReducer.reducer;
