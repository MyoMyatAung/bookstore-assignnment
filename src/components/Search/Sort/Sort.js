import styles from "./Sort.module.css";

const Sort = () => {
  return (
    <div className={styles.sort}>
      <label>Sort By: </label>
      <select className={styles.sort__select}>
        <option>Title</option>
        <option>Author</option>
        <option>Genre</option>
      </select>
    </div>
  );
};

export default Sort;
