import { configureStore } from '@reduxjs/toolkit';
import AppReducer from '../common/components/layout/reducers/AppReducer';
import ListingReducer from '../routes/listings/reducer/ListingReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cartList'],
};

const persistedReducer = persistReducer(persistConfig, ListingReducer);
export const store = configureStore({
  reducer: {
    common: AppReducer,
    listing: ListingReducer,
    cart: persistedReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
