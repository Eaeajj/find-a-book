import React, { FC } from "react";
import styles from "./BookCard.module.css";

interface CardProps {
  image: string;
  title: string;
  categories: string[];
  authors: string[];
}

const BookCard: FC<CardProps> = ({ authors, categories, image, title }) => {
  let formatAuthors = !!authors ? authors.join(", ") : "";
  if (formatAuthors.length > 30)
    formatAuthors = formatAuthors.slice(0, 30) + "...";
  else formatAuthors = formatAuthors.slice(0, -1);

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div>
        <p className={styles.category}>{categories ? categories[0] : ""}</p>
        <h4 className={styles.title}>
          {title
            ? title.length > 34
              ? title.slice(0, 35) + "..."
              : title
            : ""}
        </h4>
        <p className={styles.authors}>{formatAuthors}</p>
      </div>
    </div>
  );
};

export default BookCard;
