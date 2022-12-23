import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../components/widget/widgetSlice';

export const store = configureStore({
  reducer: {
    selectedUser: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
