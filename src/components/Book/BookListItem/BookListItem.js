import styles from "./BookListItem.module.css";

const BookListItem = ({ book }) => {
  return (
    <li className={styles["book-list-item"]} key={book.id}>
      <h3 className={styles["book-list-item__title"]}>{book.title}</h3>
      <div className={styles["book-list-item__sub-title"]}>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </div>
    </li>
  );
};

export default BookListItem;