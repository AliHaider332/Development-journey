import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Async thunk for checking auth
export const checkAuthFirst = createAsyncThunk(
  'auth/checkAuthFirst',
  async () => {
    const res = await fetch('http://localhost:3000/checkAuth', {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error('Not authenticated');
    }

    const result = await res.json();
    return result.user; // this becomes action.payload
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthFirst.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthFirst.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(checkAuthFirst.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
