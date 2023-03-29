import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../../data/data";
import { setPage } from "../../../features/paginationSlice";
import Pagination from "../../UI/Pagination/Pagination";
import BookListItem from "../BookListItem/BookListItem";
import styles from "./BookList.module.css";

const BookList = () => {
  const dispatch = useDispatch();

  const { page, limit } = useSelector((state) => state.pagination);
  const { query } = useSelector((state) => state.filter);
  const { sortBy } = useSelector((state) => state.sorting);

  let searchedBooks = data.filter((d) => {
    let match = false;
    delete d.id;
    for (const key in d) {
      if (d[key].toLowerCase().includes(query.toLowerCase())) {
        match = true;
      }
    }
    return match;
  });
  let sortedBooks = searchedBooks.sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );

  const firstIndex = (page - 1) * limit;
  const lastIndex = firstIndex + limit;
  const books = sortedBooks.slice(firstIndex, lastIndex);

  const handlePageChange = useCallback(
    (page) => {
      dispatch(setPage(page));
    },
    [dispatch]
  );

  let bookContent = (
    <p className={styles["book-list__error"]}>No results found</p>
  );

  if (books.length > 0) {
    bookContent = (
      <ul className={styles["book-list"]}>
        {books.map((book) => {
          return <BookListItem key={book.id} book={book} />;
        })}
      </ul>
    );
  }

  return (
    <>
      {bookContent}
      <Pagination
        page={page}
        limit={limit}
        total={sortedBooks.length}
        onPageChange={(page) => handlePageChange(page)}
      />
    </>
  );
};

export default BookList;
