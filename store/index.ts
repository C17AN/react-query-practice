import { configureStore } from "@reduxjs/toolkit";
import favoriteUserSlice from "./user/favoriteUserSlice";

export const store = configureStore({
  reducer: {
    favoriteUser: favoriteUserSlice,
  },
});

// 이부분을 절대 까먹으면 안됨!!!
export type RootState = ReturnType<typeof store.getState>;
