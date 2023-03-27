import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Eg. Margaret Atwood" className={styles.form__input} />
      <button type="submit" className={styles.form__button}>Search</button>
    </form>
  );
};

export default Search;
