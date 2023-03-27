import styles from "./Card.module.css";

const Card = ({ children, row = false }) => {
  let classes = [styles.card];

  if (row) {
    classes.push(styles["card--row"]);
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Card;
