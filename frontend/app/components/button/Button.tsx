import React from "react";
import styles from "./Button.module.scss";
type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <div className={styles.button}>{children}</div>;
};

export default Button;
