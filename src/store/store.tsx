import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./BooksSlice";
import paramReducer from "./ParamSlice";
import bookReducer from "./BookSlice";

const rootReducer = combineReducers({
  bookReducer,
  booksReducer,
  paramReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const store = setupStore();
