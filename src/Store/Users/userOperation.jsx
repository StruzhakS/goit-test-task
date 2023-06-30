import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsersApi, updateUserApi } from '../../tweetApi';

export const getUsers = createAsyncThunk('users/getAll', async ({ page, limit }, thunkAPI) => {
  try {
    const data = await getUsersApi({ page, limit });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk('user/update', async ({ id, following }, thunkAPI) => {
  try {
    const { data } = await updateUserApi(id, following);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
