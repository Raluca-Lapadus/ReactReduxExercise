import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { User } from "../pages/types";

const initialState: {
  users: User[];
  loading: boolean;
  searchQuery: number | null;
} = { users: [], loading: false, searchQuery: null };

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.users = [];
      state.loading = true;
    },
    saveUserData: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state) => {
      state.loading = false;
    },
    setSearchQuery: (state, action: PayloadAction<number | null>) => {
      state.searchQuery = action.payload;
    },
  },
});

interface InfoState {
  info: string | null;
}

const initialInfoState: InfoState = {
  info: null,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState: initialInfoState,
  reducers: {
    setInfo: (state, action: PayloadAction<string | null>) => {
      state.info = action.payload;
    },
    clearInfo: (state) => {
      state.info = null;
    },
  },
});

export const store = configureStore({
  reducer: { users: usersSlice.reducer, banner: bannerSlice.reducer },
});

export const usersActions = usersSlice.actions;
export const infoBannerActions = bannerSlice.actions;
