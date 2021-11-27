import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { useLocation, Link } from "react-router-dom";
import styles from "./BookPage.module.css";
import { fetchBook } from "../../store/book/BookActionCreator";
import { useEffect } from "react";
import BookDescription from "./components/BookDescription";
import BookPageSkeleton from "./components/BookPageSkeleton";
const BookPage = () => {
  const id = useLocation().pathname.slice(1);
  const dispatch = useAppDispatch();
  const { book, isLoading, isError } = useAppSelector(
    (state) => state.bookReducer
  );

  useEffect(() => {
    if (book?.id !== id) dispatch(fetchBook(id));
  }, []);

  const { volumeInfo } = book;

  return (
    <div className={styles.bookPage}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link to={"/"} className={styles.link}>
            {"<"}- На главную
          </Link>
        </header>

        {isLoading ? (
          <BookPageSkeleton />
        ) : (
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              <img
                src={
                  volumeInfo?.imageLinks?.extraLarge ||
                  volumeInfo?.imageLinks?.large ||
                  volumeInfo?.imageLinks?.medium ||
                  volumeInfo?.imageLinks?.small ||
                  volumeInfo?.imageLinks?.thumbnail
                }
                alt=""
              />
              {isError && (
                <p>
                  <b>Произошла ошибка при загрузке книги</b>
                </p>
              )}
            </div>
            <BookDescription
              title={volumeInfo?.title}
              authors={volumeInfo?.authors}
              categories={volumeInfo?.categories}
              description={volumeInfo?.description}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPage;
