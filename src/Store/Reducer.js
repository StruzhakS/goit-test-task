import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './Users/userSlice';

export const reducer = combineReducers({
  users: userReducer,
});
