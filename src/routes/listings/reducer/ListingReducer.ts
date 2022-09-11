import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListingReducerPropsType } from '../types/ListingReducerTypes';

const initialState: ListingReducerPropsType = {
  counterModalVisible: false,
};

export const listingReducer = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setCounterModalVisible: (state, action: PayloadAction<boolean>) => {
      state.counterModalVisible = action.payload;
    },
  },
});

export const { setCounterModalVisible } = listingReducer.actions;
export default listingReducer.reducer;
