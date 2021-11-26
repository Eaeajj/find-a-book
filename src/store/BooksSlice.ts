import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BooksResponse, Item } from "../models/books";

interface BooksState {
  books: Item[];
  isLoading: boolean;
  isError: string;
  foundedResults: number;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  isError: "",
  foundedResults: 0,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    booksFetching(state) {
      state.isLoading = true;
      state.books = [];
    },
    moreBooksFetching(state) {
      state.isLoading = true;
    },
    booksFetchingSuccess(state, action: PayloadAction<BooksResponse>) {
      state.isLoading = false;
      state.books = action.payload.items;
      state.foundedResults = action.payload.totalItems;
    },
    moreBookFetchigSuccess(state, action: PayloadAction<Item[]>) {
      state.isLoading = false;
      state.books = state.books.concat(action.payload);
    },
    booksFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default booksSlice.reducer;
