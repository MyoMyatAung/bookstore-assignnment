import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../../features/filterSlice";
import { setLimit, setPage } from "../../../features/paginationSlice";

import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(search));
    dispatch(setLimit(10));
    dispatch(setPage(1));
    setSearch("");
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={search}
        placeholder="Eg. Margaret Atwood"
        name="search"
        onChange={handleOnChange}
        className={styles.form__input}
      />
      <button type="submit" className={styles.form__button}>
        Search
      </button>
    </form>
  );
};

export default Search;
