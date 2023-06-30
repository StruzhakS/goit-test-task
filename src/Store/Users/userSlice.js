import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateUser } from './userOperation';

const initialState = {
  users: [],
  filter: 'all',
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'userFollowers',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.users = [...state.users, ...payload];
        state.filter = 'all';
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const { following, id } = payload;
        const updatedUsersIdx = state.users.findIndex(el => el.id === id);
        state.users[updatedUsersIdx].following = following;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { changeFilter, deleteContactAction, filterContactAction } = userSlice.actions;
