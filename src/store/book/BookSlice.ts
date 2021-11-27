import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookResponse } from "../../models/book";

interface BookState {
  book: BookResponse;
  isLoading: boolean;
  isError: string;
}

const initialState: BookState = {
  book: {} as BookResponse,
  isLoading: false,
  isError: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    bookFetching(state) {
      state.isLoading = true;
      state.isError = "";
    },
    bookFetchingSuccess(state, action: PayloadAction<BookResponse>) {
      state.isLoading = false;
      state.isError = "";
      state.book = action.payload;
    },
    bookFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default bookSlice.reducer;
