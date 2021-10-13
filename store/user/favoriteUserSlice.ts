import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  favoriteUserList: FavoriteUser[];
}

export type FavoriteUser = {
  id: UserId;
  name: string;
  avatar_url: string;
};

export type UserId = number;

const initialState: UserState = {
  favoriteUserList: [],
};

const favoriteUserSlice = createSlice({
  name: "favoriteUser",
  initialState,
  reducers: {
    addUser: (state: UserState, action: PayloadAction<FavoriteUser>) => {
      state.favoriteUserList.push(action.payload);
    },
  },
});

export const { addUser } = favoriteUserSlice.actions;

export default favoriteUserSlice.reducer;
