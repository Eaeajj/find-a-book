import { bookSlice } from "./BookSlice";
import { AppDispatch } from "../store";

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
