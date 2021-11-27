import React from "react";
import styles from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchBooks } from "../../../../store/books/BooksActionCreator";
import { changeInput } from "../../../../store/param/ParamSlice";

import {
  changeSort,
  changeCategory,
} from "../../../../store/param/ParamActionCreator";
import Select from "../select/Select";

const categories = {
  all: "all",
  art: "art",
  biography: "biography",
  computers: "computers",
  history: "history",
  medical: "medical",
  poetry: "poetry",
};

const sortings = {
  relevance: "relevance",
  newest: "newest",
};

const Header = () => {
  const dispatch = useAppDispatch();
  const { category, sort, input } = useAppSelector(
    (state) => state.paramReducer
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchBooks(input, sort, category));
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            value={input}
            onChange={(e) => dispatch(changeInput(e.target.value))}
            required
          />
          <button className={styles.button}>Search</button>
        </form>
        <div className={styles.selects}>
          <p>Category</p>
          <Select
            name="category"
            options={categories}
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(changeCategory(e.target.value))
            }
          />
          <p>Sorting by</p>
          <Select
            name="sort"
            value={sort}
            options={sortings}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              dispatch(changeSort(e.target.value));
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
