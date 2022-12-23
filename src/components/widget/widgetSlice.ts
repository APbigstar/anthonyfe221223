import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface User {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

const initialState: User = {
  "phone": "902-738-3242",
  "name": "Geordan Aaryn",
  "nickname": "@geordanaaryn",
  "email": "geordan.aaryn@fallinhay.com",
  "position": "Chief Executive Officer", 
  "photo": "1.jpg"
};

export const widgetSlice = createSlice({
  name: 'selectedUser',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateSelectedUser: (state, action: PayloadAction<User>) => {
      state.phone = action.payload.phone;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.position = action.payload.position;
      state.photo = action.payload.photo;
    },
  }
});

export const { updateSelectedUser } = widgetSlice.actions;

export const selectedUser = (state: RootState) => state.selectedUser;

export default widgetSlice.reducer;
