import data from "../../../data/data";
import BookListItem from "../BookListItem/BookListItem";
import styles from "./BookList.module.css";

const BookList = () => {
  const books = data.slice(0, 5);
  return (
    <ul className={styles["book-list"]}>
      {books.map((book) => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </ul>
  );
};

export default BookList;
