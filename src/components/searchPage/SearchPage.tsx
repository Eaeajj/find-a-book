import React from "react";
import Header from "./components/header/Header";
import BookContainer from "./components/bookContainer.tsx/BookContainer";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div className={styles.searchPage}>
      <Header />
      <BookContainer />
    </div>
  );
};

export default SearchPage;
