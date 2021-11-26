import React, { FC } from "react";
import styles from "./BookDescription.module.css";

interface Props {
  authors: string[] | undefined;
  categories: string[] | undefined;
  description: string | undefined;
  title: string | undefined;
}

const BookDescription: FC<Props> = ({
  authors,
  categories,
  description,
  title,
}) => {
  return (
    <div className={styles.descriptionContainer}>
      <h3>{title}</h3>
      <p>
        <b>Авторы: </b>
        <br />
        {authors}
      </p>
      <p>
        <b>Категории: </b>
        <br />
        {categories}
      </p>
      <p>
        <b>Описание: </b> <br />
        {description}
      </p>
    </div>
  );
};

export default BookDescription;
