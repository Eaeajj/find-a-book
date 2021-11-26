import React from "react";
import styles from "./Header.module.css";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchBooks } from "../../../../store/ActionCreator";
import {
  changeCategory,
  changeInput,
  changeSort,
} from "../../../../store/ParamSlice";

enum Category {
  all = "all",
  art = "art",
  biography = "biography",
  computers = "computers",
  history = "history",
  medical = "medical",
  poetry = "poetry",
}

enum Sort {
  relevance = "relevance",
  newest = "newest",
}

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
          <select
            name="category"
            className={styles.select}
            onChange={(e) => dispatch(changeCategory(e.target.value))}
          >
            <option value={Category.all}>{Category.all}</option>
            <option value={Category.art}>{Category.art}</option>
            <option value={Category.biography}>{Category.biography}</option>
            <option value={Category.computers}>{Category.computers}</option>
            <option value={Category.history}>{Category.history}</option>
            <option value={Category.medical}>{Category.medical}</option>
            <option value={Category.poetry}>{Category.poetry}</option>
          </select>
          <p>Sorting by</p>
          <select
            name="sort"
            className={styles.select}
            onChange={(e) => dispatch(changeSort(e.target.value))}
          >
            <option value={Sort.relevance}>{Sort.relevance}</option>
            <option value={Sort.newest}>{Sort.newest}</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
