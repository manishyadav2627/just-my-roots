import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListingReducerPropsType } from '../types/ListingReducerTypes';

const initialState: ListingReducerPropsType = {
  counterModalVisible: false,
  activeTab: '',
};

export const listingReducer = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    setCounterModalVisible: (state, action: PayloadAction<boolean>) => {
      state.counterModalVisible = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setCounterModalVisible, setActiveTab } = listingReducer.actions;
export default listingReducer.reducer;
