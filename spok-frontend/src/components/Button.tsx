import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export default function Button(props: ButtonProps) {
  const { children, className, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
