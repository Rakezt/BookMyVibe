import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/src/features/auth/types/auth.types';

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isInitialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    initialize(state) {
      state.isInitialized = true;
    },
  },
});

export const { setUser, clearUser, initialize } = authSlice.actions;

export default authSlice.reducer;
