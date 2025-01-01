import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const reducer = combineReducers({
  todos: todoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer
});

export const todoAction = todoSlice.actions;

export default store;
