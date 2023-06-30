import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateUser } from './userOperation';

const initialState = {
  users: [],
  filter: '',
  //   following: false,
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
        // console.log(payload);
        state.isLoading = false;
        state.error = null;
        const { following, id } = payload;
        const updatedUsersIdx = state.users.findIndex(el => el.id === id);
        // console.log(updatedUsersIdx);
        state.users[updatedUsersIdx].following = following;
        // state.following = payload.following;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    //   .addCase(deleteContactOperation.pending, state => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContactOperation.fulfilled, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.contacts = state.contacts.filter(el => el.id !== payload.id);
    //   })
    //   .addCase(deleteContactOperation.rejected, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.error = payload;
    //   });
  },
});

export const userReducer = userSlice.reducer;
export const { changeFilter, deleteContactAction, filterContactAction } = userSlice.actions;

// .addCase(
//       (addContactOperation.pending,
//       state => {
//         state.isLoading = true;
//       })
//     )
//     .addCase(addContactOperation.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = payload;
//     })
//     .addCase(addContactOperation.rejected, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     });
