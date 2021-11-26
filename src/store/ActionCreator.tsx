import { booksSlice } from "./BooksSlice";
import { AppDispatch, store } from "./store";
import { API_KEY } from "../utils/constants";
import { bookSlice } from "./BookSlice";

const limit = 30;

export const fetchBooks =
  (book: string, orderBy: string, subject: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(booksSlice.actions.booksFetching());
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q=${book}&subject=${subject}&orderBy=${orderBy}&key=${API_KEY}&maxResults=${limit}`
      ).then((res) => res.json());
      console.log(response);
      if (response?.error)
        dispatch(booksSlice.actions.booksFetchingError(response.error.message));
      else dispatch(booksSlice.actions.booksFetchingSuccess(response));
    } catch (error: any) {
      dispatch(booksSlice.actions.booksFetchingError(error?.message));
    }
  };

export const fetchMoreBooks =
  (book: string, orderBy: string, subject: string) =>
  async (dispatch: AppDispatch) => {
    const { booksReducer } = store.getState();
    const { books } = booksReducer;
    try {
      if (!book) book = "magic";
      dispatch(booksSlice.actions.moreBooksFetching());
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q=${book}&startIndex=${books.length}&subject=${subject}&orderBy=${orderBy}&key=${API_KEY}&maxResults=${limit}`
      ).then((res) => res.json());
      dispatch(booksSlice.actions.moreBookFetchigSuccess(response.items));
    } catch (error: any) {
      dispatch(booksSlice.actions.booksFetchingError(error?.message));
    }
  };

export const fetchBook = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(bookSlice.actions.bookFetching());
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    ).then((res) => res.json());
    dispatch(bookSlice.actions.bookFetchingSuccess(response));
  } catch (error: any) {
    dispatch(bookSlice.actions.bookFetchingError(error?.message));
  }
};
