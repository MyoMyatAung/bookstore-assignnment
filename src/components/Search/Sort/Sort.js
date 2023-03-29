import { useDispatch } from "react-redux";
import { setSortBy } from "../../../features/sortingSlice";
import styles from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className={styles.sort}>
      <label>Sort By: </label>
      <select onChange={handleOnChange} className={styles.sort__select}>
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
      </select>
    </div>
  );
};

export default Sort;
