import React, { FC } from "react";
import styles from "./BookCardSkeleton.module.css";

const BookCardSkeleton: FC = () => {
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

export default BookCardSkeleton;

export const SkeletonArray = [
  <BookCardSkeleton />,
  <BookCardSkeleton />,
  <BookCardSkeleton />,
  <BookCardSkeleton />,
  <BookCardSkeleton />,
];
