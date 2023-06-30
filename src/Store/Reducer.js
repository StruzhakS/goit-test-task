import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './Users/userSlice';
// import { contactReducer } from './contacts/contactSlice';

export const reducer = combineReducers({
  users: userReducer,
});
