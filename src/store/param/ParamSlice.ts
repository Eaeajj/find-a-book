import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ParamState {
  input: string;
  category: string;
  sort: string;
}

const initialState: ParamState = {
  input: "",
  category: "all",
  sort: "relevance",
};

export const paramSlice = createSlice({
  name: "param",
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    changeCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const {
  actions: { changeCategory, changeInput, changeSort },
} = paramSlice;

export default paramSlice.reducer;
