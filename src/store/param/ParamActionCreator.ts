import { fetchBooks } from "../books/BooksActionCreator";
import { AppDispatch, store } from "../store";
import { paramSlice } from "./ParamSlice";
import { defaultBookReq } from "../../utils/constants";

export const changeCategory =
  (category: string) => async (dispatch: AppDispatch) => {
    const { paramReducer } = store.getState();
    dispatch(paramSlice.actions.changeCategory(category));
    dispatch(
      fetchBooks(
        paramReducer.input || defaultBookReq,
        paramReducer.sort,
        category
      )
    );
  };

export const changeSort = (sort: string) => async (dispatch: AppDispatch) => {
  const { paramReducer } = store.getState();
  dispatch(paramSlice.actions.changeSort(sort));
  dispatch(
    fetchBooks(
      paramReducer.input || defaultBookReq,
      sort,
      paramReducer.category
    )
  );
};
