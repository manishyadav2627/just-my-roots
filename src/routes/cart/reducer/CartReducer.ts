import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataItemsType } from '../../../common/data/DataType';
import { CartReducerPropsType } from '../types/CartReducerType';

const initialState: CartReducerPropsType = {
  cartList: [],
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter(
        (product) => product.id !== action.payload
      );
    },
    addCartItem: (state, action: PayloadAction<DataItemsType>) => {
      state.cartList = [...state.cartList, action.payload];
    },
    modifyQuantityInCart: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const index = state.cartList.findIndex((d) => d.id === action.payload.id);
      let manish = state.cartList;
      manish[index].quantity = action.payload.count;
      state.cartList = manish;
    },
  },
});

export const { removeCartItem, modifyQuantityInCart, addCartItem } =
  cartReducer.actions;
export default cartReducer.reducer;
