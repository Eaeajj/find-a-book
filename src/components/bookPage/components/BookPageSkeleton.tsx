import styles from "./BookPageSkeleton.module.css";

const BookPageSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}></div>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}></div>
        <div className={styles.authors}></div>
        <div className={styles.categories}></div>
        <div className={styles.description}></div>
      </div>
    </div>
  );
};

export default BookPageSkeleton;
