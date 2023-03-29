import React from "react";
import usePagination, { DOTS } from "../../../hooks/usePagination";
import styles from "./Pagination.module.css";
const Pagination = ({ onPageChange, total, sibling = 1, page, limit }) => {
  const paginationRange = usePagination({ total, limit, sibling, page });

  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(page + 1);
  };

  const onPrevious = () => {
    onPageChange(page - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={styles["pagination-container"]}>
      <li
        className={`${styles["pagination-item"]} ${
          page === 1 ? styles["pagination-item--disabled"] : ""
        }`}
        onClick={onPrevious}
      >
        <div
          className={`${styles["pagination-item__arrow"]} ${styles["pagination-item__arrow--left"]}`}
        />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={pageNumber}
              className={`${styles["pagination-item"]} ${styles["pagination-item--dots"]}`}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={`${styles["pagination-item"]} ${
              pageNumber === page ? styles["pagination-item--selected"] : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles["pagination-item"]} ${
          page === lastPage ? styles["pagination-item--disabled"] : ""
        }`}
        onClick={onNext}
      >
        <div
          className={`${styles["pagination-item__arrow"]} ${styles["pagination-item__arrow--right"]}`}
        />
      </li>
    </ul>
  );
};

export default Pagination;
