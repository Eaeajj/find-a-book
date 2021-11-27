import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/BooksSlice";
import paramReducer from "./param/ParamSlice";
import bookReducer from "./book/BookSlice";

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

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
