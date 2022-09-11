import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppReducerPropType } from '../types/AppReducerType';

const initialState: AppReducerPropType = {
  isMenuOpen: false,
  onBoardingStatus: true,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    setOnBoardingStatus: (state, action: PayloadAction<boolean>) => {
      state.onBoardingStatus = action.payload;
    },
  },
});

export const { setIsMenuOpen, setOnBoardingStatus } = appReducer.actions;
export default appReducer.reducer;
