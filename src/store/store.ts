import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { User } from "../pages/types";

const initialState: {
  users: User[];
  loading: boolean;
  error: string | null;
  searchQuery: number | null;
} = { users: [], loading: false, error: null, searchQuery: null };

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.users = [];
      state.loading = true;
      state.error = null;
    },
    saveUserData: (state, action: PayloadAction<User[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<number | null>) => {
      console.log(action.payload);
      state.searchQuery = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: usersSlice.reducer,
});

export const usersActions = usersSlice.actions;
