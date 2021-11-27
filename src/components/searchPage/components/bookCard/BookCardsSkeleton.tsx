import React, { FC } from "react";
import styles from "./BookCardsSkeleton.module.css";

export const BookCardSkeleton: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={""} alt="" />
      </div>
      <div>
        <p className={styles.category}></p>
        <p className={styles.title}></p>
        <p className={styles.authors}></p>
      </div>
    </div>
  );
};

const BookCardsSkeleton: FC = () => {
  return (
    <ul className={styles.skeletonContainer}>
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
    </ul>
  );
};
export default BookCardsSkeleton;
