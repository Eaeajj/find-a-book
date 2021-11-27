import BookCard from "../bookCard/BookCard";
import styles from "./BookContainer.module.css";
import { useAppSelector, useAppDispatch } from "../../../../hooks/redux";
import {
  fetchBooks,
  fetchMoreBooks,
} from "../../../../store/books/BooksActionCreator";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookCardsSkeleton from "../bookCard/BookCardsSkeleton";

const BookContainer = () => {
  const dispatch = useAppDispatch();
  const { books, isLoading, isError, foundedResults } = useAppSelector(
    (state) => state.booksReducer
  );
  const { category, sort, input } = useAppSelector(
    (state) => state.paramReducer
  );

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchMoreBooks(input, sort, category));
  };

  useEffect(() => {
    if (!books?.length) dispatch(fetchBooks("typescript", "relevance", "all"));
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.foundedResults}>
        {!isLoading && !isError && foundedResults
          ? `найдено книг ${foundedResults}`
          : ""}
      </p>
      <ul className={styles.container}>
        {!!books?.length &&
          books.map((book, index) => {
            return (
              <Link to={`/${book?.id}`} className={styles.link} key={index}>
                <BookCard
                  authors={book?.volumeInfo?.authors}
                  categories={book?.volumeInfo?.categories}
                  image={book?.volumeInfo?.imageLinks?.smallThumbnail}
                  title={book?.volumeInfo?.title}
                />
              </Link>
            );
          })}
        {!books && !isLoading && !isError && <p>Книг не найдено</p>}
        {isLoading && <BookCardsSkeleton />}
      </ul>

      {isLoading && <h1>Загрузка...</h1>}
      {isError && <h1>Ошибка</h1>}
      {!isError && !!books?.length && !(books.length % 30) && !isLoading && (
        <button className={styles.button} onClick={(e) => handleClick(e)}>
          load more
        </button>
      )}
    </div>
  );
};

export default BookContainer;
